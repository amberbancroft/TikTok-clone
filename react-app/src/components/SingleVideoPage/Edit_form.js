import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {update_Video} from '../../store/video';

const EditVideoForm = () => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(update_Video(description)).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <ul className="form-errors">
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul> */}
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