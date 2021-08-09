import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createVideo } from '../../store/video';

const UploadForm = ({setShowModal}) => {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();
//   const [errors, setErrors] = useState([]);
  const [description, setDescription] = useState('');
  const [video_url, setVideo_url] = useState('');
//   const [showMenu, setShowMenu] = useState(false)

const handleSubmit = async (e) => {
    e.preventDefault();
    // let newErrors = []
    // if (video_url) {
    //     newErrors.push('Please provide a video')
    // }
    // if (!newErrors.length) {
        await dispatch(createVideo(user.id, description, video_url))
        setShowModal(false)

    // }
    // else {
    //     setErrors(newErrors)
    // }
}
    const updateVideo = async (e) => {
        const file = e.target.files[0]
        if (file){
            setVideo_url(file)
        }
    }


  return (
    <form className='form-container' onSubmit={handleSubmit}>
        {/* <ul className="form-errors">
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul> */}
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