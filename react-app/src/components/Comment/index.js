import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComments  } from '../../store/comment';
import './comment.css';

const CommentForm = ({ video_Id }) => {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  //const [errors, setErrors] = useState([]);
  const [content, setContent] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(addComments({ content, poster_Id: user?.id, video_Id: video_Id }))
        setContent('')
    }

  return (
    <form className='form-container' onSubmit={handleSubmit}>
        {/* <ul className="form-errors">
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul> */}
        <div>
            <input
                type="text"
                placeholder='Comment'
                value={ content }
                onChange={(e) => setContent(e.target.value)}
                // required
            />
        </div>
        <div>
            <button type="submit"> Post </button>
        </div>
    </form>
  );
};

export default CommentForm;