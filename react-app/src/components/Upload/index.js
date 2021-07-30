import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createVideo } from '../../store/video';
// import './LoginForm.css';

const UploadForm = () => {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [video_url, setVideo_url] = useState('');
  const [description, setDescription] = useState('');
//   const [poster_Id, setPoster_Id] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      setErrors([]);
      return dispatch(createVideo(video_url, description, user.id)).catch(
          async (res) => {
              const data = await res.json();
              if (data && data.errors) setErrors(data.errors);
          }
      );
  };

  return (
    <form className='form-container' onSubmit={handleSubmit}>
        <ul className="form-errors">
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <h2>Post to TikTok</h2>
        <div>
            <input
                type="file"
                placeholder='Video url'
                value={video_url}
                onChange={(e) => setVideo_url(e.target.value)}
                required
            />
        </div>
        <div>
            <input
                type="text"
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
        </div>
        <div>
            <button type="submit">Upload</button>
        </div>
    </form>
  );
};

export default UploadForm;