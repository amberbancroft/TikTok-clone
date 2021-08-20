import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createVideo } from '../../store/video';
import '../auth/Modal.css'
// import { DropzoneArea } from 'material-ui-dropzone';

const UploadForm = ( { setShowModal } ) => {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const [errors] = useState([]);
  const [description, setDescription] = useState('');
  const [video_url, setVideo_url] = useState('');
  // const [showMenu, setShowMenu] = useState(false)

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

        <h2> Post to TikTok </h2>

        <div>
            <input
                type= 'file'
                name= 'video_url'
                accept= 'image/png, image,jpeg, video/*'
                placeholder= 'Video url'
                onChange= { updateVideo }
                // required
            />
        </div>

        {/* <div>
            <DropzoneArea

            />
        </div> */}

        <div>
            <input
                type= 'text'
                placeholder= 'Caption'
                value= { description }
                onChange= { (e) => setDescription(e.target.value) }
                // required
            />
        </div>

        <div>
            <button type= 'submit'> Post </button>
        </div>

        <div className= 'modal--form--errors'>
            { errors.map( (error, idx) => <div key= { idx } > { error } </div>) } 
        </div>

    </form>
  );
};

export default UploadForm