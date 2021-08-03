// Imports
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DemoUser from '../DemoUser/index';
import { useSelector, useDispatch } from 'react-redux';
import ForYou from './foryou.png'
import UserList from '../UserList/index';

function SideBar() {
    const user = useSelector(state => state.session.user);
    return (
        <>
            <div>
                <a className="individual-container" id="foryou-container" href={`/`}>
                    <img src={ForYou} alt="ForYouLogo" ></img>
                </a>
            </div>
            <div>
            {/* <div className="individual-container" id="demouser-container"> */}
                <h4>Log in to follow creators, like videos, and view comments.</h4>
                {!user&&<DemoUser user={user}/>}
            </div>
            <div className="individual-container" id="userList-container">
                <h3>Suggested Accounts</h3>
                <UserList/>
            </div>
            <div className="individual-container" id="about-container">
                <h4>Created by: Amber Bancroft</h4>
                <a href={`https://www.linkedin.com/in/amber-bancroft/`}>
                    <LinkedInIcon/>
                </a>
                <a href={`https://github.com/amberbancroft`}>
                    <GitHubIcon/>
                </a>
            </div>
        </>
    )
}


export default SideBar