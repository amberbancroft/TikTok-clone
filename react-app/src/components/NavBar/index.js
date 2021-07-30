// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import DemoUser from '../DemoUser'
import LoginFormModal from '../auth/LoginForm/LoginFormModal';
import SignUpFormModal from '../auth/SignUpForm/SignUpFormModal';
import logo from './images/logo.png'
import upload from './images/upload.png'
// import message from './images/message.png'
// import inbox from './images/inbox.png'
// import bootstrap from ''

import "./NavBar.css"


const NavBar = ({ loaded }) => {
	const user = useSelector(state => state.session.user);
	// console.log('!!!!!!!!!!!!!!', user.profile_url)
	// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  	// 	return new bootstrap.Tooltip(tooltipTriggerEl)
	// })

	let sessionLinks;
	if (user) {
		sessionLinks = (
			<>
				<div className='navbar-button'>
					<NavLink to={`/`} exact={true} >
						<img data-bs-toggle="tooltip" data-bs-placement="bottom" title="upload" src={upload} className="navbar-icon" alt="homepageUpload"></img>
					</NavLink>
				</div>
				{/* <div className='navbar-button'>
					<NavLink to={`/`} exact={true} >
						<img  src={message} className="navbar-icon" alt="homepageMessage"></img>
					</NavLink>
				</div>
				<div className='navbar-button'>
					<NavLink to={`/`} exact={true} >
						<img src={inbox} className="navbar-icon" alt="homepageInbox"></img>
					</NavLink>
				</div> */}
				<div className='navbar-button'>
					<NavLink to={`/users/${user.id}`} exact={true} >
						<img src={user.profile_url} id='profile-icon' alt="homepageInbox"></img>
						{/* <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
  							bottom
						</button> */}
					</NavLink>
				</div>
				<LogoutButton />
			</>
		);
	} else {
		sessionLinks = (
			<>
				<div className='navbar-button-container'>
					<LoginFormModal />
				</div>
				<div className='navbar-button-container'>
					<SignUpFormModal />
				</div>
				<div className='navbar-button-container'>
					<DemoUser />
				</div>
			</>
		);
	}

	return (
		<div className='navbar__container'>
			<NavLink  id='homepage_icon' exact to="/">
				<img src={logo} className="navbar-icon" alt="homepageLogo"></img>
			</NavLink>
			<div className='session-container' >
				{loaded && sessionLinks}
			</div>
		</div>
	);
}

export default NavBar;
