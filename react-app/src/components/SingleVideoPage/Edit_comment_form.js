import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update_comment } from '../../store/comment';
import { addComments, getComments, deleteComment } from '../../store/comment'
import './EditCommentForm.css';


const EditCommentForm = ( { video_id } ) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const [errors, setErrors] = useState([]);
    const [validationError, setValidationError] = useState([])
    const [content, setContent] = useState('');
    const [newComment, setNewComment] = useState('')
    const comments = useSelector(state => state.comments)

    const [showForm, setShowForm] = useState(false)
    const [formId, setFormId] = useState(null)

    useEffect(() => {
        dispatch(getComments())
    }, [dispatch])

    const handleSubmit = async (comment_id, content, e) => {
        e.preventDefault();
        let newErrors = []
        if (!content.length) {
            newErrors.push('Please provide a valid edited comment')
        }
        e.preventDefault();
        if (!newErrors.length) {
            dispatch(update_comment(comment_id, content))
            setShowForm(false)

        }
        else {
            setErrors(newErrors)
        }
    };

    const userComment = async (e) => {
        e.preventDefault();
        setValidationError([])
        let commentErrors = []
        if (!newComment.length) {
            commentErrors.push('Please provide a valid comment')
        }
        if (!commentErrors.length) {
            await dispatch(addComments({ content: newComment, poster_Id: user?.id, video_Id: video_id }))
            setNewComment('')

        }
        else {
            setValidationError(commentErrors)
        }
    }

    const openForm = (comment) => {
        setShowForm(true)
        setContent(comment.content)
        setFormId(comment.id)
    }

    return (
        <div>
            {Object.values(comments)?.map((comment, i) =>
                <div key= { i } >
                    {video_id === comment?.video_Id && (
                        <div className= 'comment-edit'>
                            <div className= 'comment-class'> { `${comment?.content}` } </div>
                            {user?.id === comment?.poster_Id && (
                                <div className='btn-container'>
                                    <button className= 'edit-delete-btn' onClick= { () => openForm(comment) }> Edit </button>
                                    <button className= 'edit-delete-btn' onClick= { () => dispatch(deleteComment(comment?.id)) }> Delete </button>
                                    {showForm && comment.id === formId ?
                                        <form onSubmit= { (e) => handleSubmit(comment.id, content, e) }>
                                            <ul className=' form-errors'>
                                                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                                            </ul>
                                            <hr />
                                            <input type= 'text' value= { content } onChange={ (e) => setContent(e.target.value) }></input>
                                            <button type= 'submit'> Update </button>
                                        </form>
                                        : null}
                                </div>
                            )}
                        </div>
                    )}
                </div>

            )}
            <form id='posting-comments' onSubmit= { userComment }>
                <ul className='form-errors'>
                    {validationError.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div>
                    <input
                        className= 'comment'
                        type= 'text'
                        placeholder= 'Comment'
                        value= { newComment }
                        onChange={ (e) => setNewComment(e.target.value)}
                    />
                </div>
                <div>
                    <button id= 'post' type= 'submit'> Post </button>
                </div>
            </form>
        </div>
    );
};

export default EditCommentForm;