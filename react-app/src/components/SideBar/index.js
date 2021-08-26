// Imports
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DemoUser from '../DemoUser/index';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ForYou from './foryou.png';
import { getUsers } from '../../store/user';
import { Link } from 'react-router-dom';
import React from "react";
import './SideBar.css';

function SideBar() {
    const user = useSelector(state => state.session.user);
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <div>
            <div>
                <a className= "individual-container" id= "foryou-container" href= { `/` }>
                    <img src= { ForYou } alt= "ForYouLogo" />
                </a>
            </div>
            <hr/>
            <div>
                { !user && <h4> Log in to follow creators, like videos, and view comments. </h4> }
                { !user && <DemoUser user= { user }/> }
                { !user && <hr/>}
            </div>
            
            <h3 className='line-div'>Suggested Accounts</h3>
            <div>
                {Object.values(users).map(user => (
                    <div key={user.id}>
                        <div className="userProfiles-container">
                            <img src={user.profile_url} id='profile-icon' alt="suggested_user_photo"></img>
                            <Link to={`/users/${user.username}`}>{user.username}</Link>
                        </div>
                    </div>
                ))}
            </div>
            <hr/>
            <div className= "individual-container" id= "about-container">
                <h4> Created by: Amber Bancroft </h4>
                <a className= 'link--icon' href= { `https://www.linkedin.com/in/amber-bancroft/` }>
                    <LinkedInIcon/>
                </a>
                <a className= 'link--icon' href= { `https://github.com/amberbancroft` }>
                    <GitHubIcon/>
                </a>
            </div>
            <hr/>
        </div>
    )
};

export default SideBar