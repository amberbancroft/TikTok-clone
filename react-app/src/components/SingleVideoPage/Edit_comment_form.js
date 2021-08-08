import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { update_comment } from '../../store/comment';

const EditCommentForm = ({ comment_id }) => {
    const dispatch = useDispatch();
    // const [errors, setErrors] = useState([]);
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // setErrors([]);
        // return dispatch(update_Video({description, video_id})).catch(
        //     async (res) => {
        //         const data = await res.json();
        //         if (data && data.errors) setErrors(data.errors);
        //     }
        // );
        dispatch(update_comment( content , comment_id ))
        // window.location.reload(true);
    };

    return (
        <form onSubmit= { handleSubmit }>
            {/* <ul className="form-errors">
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul> */}
            <hr />
            <div>
                <input
                    type="text"
                    placeholder='Content'
                    value= { content }
                    onChange= { (e) => setContent(e.target.value) }
                />
            </div>
            <button type="submit"> Save </button>
        </form>
    );
};

export default EditCommentForm;