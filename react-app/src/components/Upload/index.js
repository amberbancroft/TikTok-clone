import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createVideo } from '../../store/video';
import CancelIcon from '@material-ui/icons/Cancel';
import '../auth/Modal.css'

const UploadForm = ( { setShowModal } ) => {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const [errors] = useState([]);
  const [description, setDescription] = useState('');
  const [video_url, setVideo_url] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(createVideo(user.id, description, video_url))
        setShowModal(false)
    }

    const updateVideo = async (e) => {
        const file = e.target.files[0]
        if (file){
            setVideo_url(file)
        }
    }

  return (
    <form className='modal--container' onSubmit= { handleSubmit } >

    <CancelIcon onClick={() => setShowModal(false)} className='modal--cancel--icon'></CancelIcon>

        <h2 className='modal--header'> Post to TikTok </h2>

        <div>
            <input
                className='modal--input'
                type= 'text'
                placeholder= 'Caption'
                value= { description }
                onChange= { (e) => setDescription(e.target.value) }
                required
            />
        </div>

        <div id='video--upload--input--container'>
            <input
                className='modal--input'
                id= 'video--upload--input'
                type= 'file'
                name= 'video_url'
                accept= 'image/png, image,jpeg, video/*'
                placeholder= 'Video url'
                onChange= { updateVideo }
                required
            />
        </div>

        <div className='modal--button--container'>
            <button className='modal--button' type= 'submit' style={{padding: 10}}> Post </button>
        </div>

        <div className= 'modal--form--errors'>
            { errors.map( (error, idx) => <div key= { idx } > { error } </div>) } 
        </div>

    </form>
  );
};

export default UploadForm