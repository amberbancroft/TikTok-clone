// Importing
import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../store/session';

// Initializing DemoUser component
const DemoUser = ({user}) => {
	const [errors, setErrors] = useState([]);
	const dispatch = useDispatch();
	const history = useHistory()

	const onLogin = async (e) => {
		e.preventDefault();

		const data = await dispatch(login('demo@aa.io', 'password'));
		if (data) setErrors(data);
	};

	if (user) history.push('/');

	return (
		<form onSubmit={onLogin}>
			<div className='form'>
				{errors.map((error, ind) => (
					<div key={ind}>{error}</div>
				))}
			</div>
			<button id="demo-button" type='submit'> Demo User </button>
		</form>
	)
}

// Exporting
export default DemoUser;