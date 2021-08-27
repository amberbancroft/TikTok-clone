import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { update_Video } from '../../store/video';

const EditVideoForm = ({ video_id, content }) => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState(content);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(update_Video({ description, video_id }))
        window.location.reload(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type='text'
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type='submit'> Save </button>
        </form>
    );
};

export default EditVideoForm;