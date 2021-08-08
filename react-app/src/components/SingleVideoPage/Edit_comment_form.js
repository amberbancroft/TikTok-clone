import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update_comment } from '../../store/comment';
import { getComments, deleteComment } from '../../store/comment'


const EditCommentForm = ({ video_id }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const [errors, setErrors] = useState([]);
    const [content, setContent] = useState('');
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

    const openForm = (comment) => {
        setShowForm(true)
        setContent(comment.content)
        setFormId(comment.id)
    }

    return (
        <div>
            {Object.values(comments)?.map((comment, i) =>
                <div className='comment-container' key={i} >
                    {video_id === comment?.video_Id && (
                        <>
                            <div>{`${comment?.content}`}</div>
                            {user?.id === comment?.poster_Id && (
                                <>
                                <button onClick={() => openForm(comment)}>Edit</button>
                                    {showForm && comment.id === formId ? 
                                        <form onSubmit= { (e) => handleSubmit(comment.id, content, e) }>
                                            <ul className="form-errors">
                                                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                                            </ul>
                                            <hr />
                                            <input type="text" value={content} onChange={(e) => setContent(e.target.value)}></input>
                                            <button type="submit">Update</button>
                                        </form>
                                    
                                
                                
                                
                                
                                    :null}
                                    {/* <button onClick={() => editHelperFunction2()}> Edit </button>
                                    {showEditCommentForm && (<EditCommentForm comment_id={comment?.id} video_id={video?.single_video?.id} />)}
                                    <button onClick={() => dispatch(deleteComment(comment?.id))}>Delete</button> */}
                                </>
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
        // <form onSubmit= { handleSubmit }>
        //     <ul className="form-errors">
        //         {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        //     </ul>
        //     <hr />
        //     {video_id === comment_id && (
        //         // <div>
        //         //     <button onClick={() => openForm()}>Edit Comment</button>
        //         // </div>
        //     <div>
        //         <input
        //             type="text"
        //             placeholder='Content'
        //             value= { content }
        //             onChange= { (e) => setContent(e.target.value) }
        //         />
        //     </div>

        //     )}
        //     <button type="submit"> Save </button>
        // </form>
    );
};

export default EditCommentForm;