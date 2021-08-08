// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../auth/LoginForm/LoginFormModal';
import SignUpFormModal from '../auth/SignUpForm/SignUpFormModal';
import UploadFormModal from '../Upload/UploadModal';
import logo from './images/logo.png'
import Grid from '@material-ui/core/Grid';
import DemoUser from '../DemoUser/index';
// import message from './images/message.png'
// import inbox from './images/inbox.png'
import "./NavBar.css"

const NavBar = ({ loaded }) => {
	const user = useSelector(state => state.session.user);

	let sessionLinks;
	if (user) {
		sessionLinks = (
			<>
				<div className='navbar-button-container'>
					<UploadFormModal />
				</div>
				{/* >
					<NavLink to={`/`} exact={true} >
						<img  src={message} className="navbar-icon" alt="homepageMessage"></img>
					</NavLink>
				</div>
				<div >
					<NavLink to={`/`} exact={true} >
						<img src={inbox} className="navbar-icon" alt="homepageInbox"></img>
					</NavLink>
				</div> */}
				<NavLink  to={`/`} exact={true}>
					<LogoutButton />
				</NavLink>
				<div >
					<NavLink to={`/users/${user.id}`} exact={true} >
						<img src={user.profile_url} id='profile-icon' alt="homepageInbox"></img>
						{/* <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
  							bottom
						</button> */}
					</NavLink>
				</div>
			</>
		);
	} else {
		sessionLinks = (
			<>
				<div className="navbar-button">
					<SignUpFormModal />
				</div>
				<div className="navbar-button" id="login-button">
					<LoginFormModal />
				</div>
				<div>
					<DemoUser />
				</div>
				{/* <div className="navbar-button">
					<DemoUser />
				</div> */}
			</>
		);
	}

	return (
		<div className='navbar__container'>
			<Grid container>
				<Grid item md={2}/>
				<Grid item md={4} xs={6}>
					<NavLink  id='homepage_icon' exact to="/">
						<img src={logo} className="navbar-icon" alt="homepageLogo"></img>
					</NavLink>
				</Grid>
				<Grid className='session-container' item md={4} xs={6}>
					{loaded && sessionLinks}
				</Grid>
				<Grid item md={2}/>
			</Grid>
		</div>
	);
}

export default NavBar;
