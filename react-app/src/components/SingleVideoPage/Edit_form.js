import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {update_Video} from '../../store/video';

const EditVideoForm = ({video_id}) => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        // return dispatch(update_Video({description, video_id})).catch(
        //     async (res) => {
        //         const data = await res.json();
        //         if (data && data.errors) setErrors(data.errors);
        //     }
        // );
        dispatch(update_Video({description, video_id}))
        window.location.reload(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <ul className="form-errors">
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul> */}
            {/* <button onClick={() => {console.log('Poop', video_id)}}>Video info</button> */}
            <hr />
            <div>
                <input
                    type="text"
                    placeholder='Description'
                    value= { description }
                    onChange= { (e) => setDescription(e.target.value) }
                />
            </div>
            <button type="submit"> Save </button>
        </form>
    );
};

export default EditVideoForm;