import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update_comment } from '../../store/comment';
import { useHistory } from 'react-router-dom';
import { addComments, getComments, deleteComment } from '../../store/comment';
import './CommentForm.css';


const EditCommentForm = ({ video_id }) => {
    const [errors, setErrors] = useState([]);
    const [validationError, setValidationError] = useState([]);
    const [content, setContent] = useState('');
    const [newComment, setNewComment] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [formId, setFormId] = useState(null);

    const user = useSelector(state => state.session.user);
    const comments = useSelector(state => state.comments);
    const dispatch = useDispatch();
    const history = useHistory();

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

    const Btn = () => {
        if (newComment) {
            return <button id='post-button' type='submit'> Post </button>
        } else {
            return <button id='disabled-post-btn' disabled> Post </button>
        }
    }

    return (
        <>
            <div className='Comments--container'>
                {Object.values(comments)?.map((comment, i) =>
                    <div key={i}>
                        {video_id === comment?.video_Id && (
                            <div className='comment-edit'>

                                {/* Commenter Information */}
                                <div onClick={e => { history.push(`/users/${comment?.username}`); window.location.reload(true); }}>
                                    <img src={comment?.profile_url} id='profile-icon' alt='user_photo' />
                                </div>
                                <div className='content-container'>
                                    <div onClick={e => { history.push(`/users/${comment?.username}`); window.location.reload(true); }}>
                                        <div style={{ cursor: 'pointer' }}> {`${comment?.username}`} </div>
                                    </div>
                                <div> {`${comment?.content}`} </div>

                                </div>

                                {/* Edit Comment Button */}
                                {user?.id === comment?.poster_Id && (
                                    <div className='btn-container'>
                                        {showForm && comment.id === formId ?
                                            <form onSubmit={(e) => handleSubmit(comment.id, content, e)}>
                                                <input type='text' value={content} required onChange={(e) => setContent(e.target.value)}/>
                                                <button type='submit'> Save </button>
                                            </form>
                                            : null}

                                        <button className='edit-delete-btn' onClick={() => openForm(comment)}> Edit </button>
                                        <button className='edit-delete-btn' onClick={() => dispatch(deleteComment(comment?.id))}> Delete </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                )}
            </div>

            {/* Posting Comments */}
            <form id='posting-comments' onSubmit={userComment}>
                <div className='comment-and-errors'>
                    <div className='comment-form-errors'>
                        {validationError.map((error, idx) => <div key={idx} > {error} </div>)}
                    </div>
                    <div>
                        <input
                            className='comment'
                            type='text'
                            placeholder='Add Comment...'
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                    </div>
                </div>

                <Btn />
            </form>
        </>
    );
};

export default EditCommentForm;

{/* <ul className=' form-errors'>
    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
</ul> */}
{/* <hr /> */}