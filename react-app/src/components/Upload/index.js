import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createVideo } from '../../store/video';

const UploadForm = () => {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [description, setDescription] = useState('');
  const [video_url, setVideo_url] = useState('');


const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createVideo(user.id, description, video_url))
}
const updateVideo = async (e) => {
    const file = e.target.files[0]
    if (file){
        setVideo_url(file)
    }
}

  return (
    <form className='form-container' onSubmit={handleSubmit}>
        <ul className="form-errors">
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <h2>Post to TikTok</h2>
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
            <input
                type="file"
                name='video_url'
                accept='image/png, image,jpeg, video/*'
                placeholder='Video url'
                onChange={updateVideo}
            />
        </div>
        <div>
            <button type="submit">Upload</button>
        </div>
    </form>
  );
};

export default UploadForm;