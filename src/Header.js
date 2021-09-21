import React from 'react'
import './Header.css';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ForumIcon from '@material-ui/icons/Forum';
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from './StateProvider';
function Header() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="headerLeft">
                <img src="https://www.logolynx.com/images/logolynx/9a/9a9ddd0444417748eefa19f5cf7dcc1c.png" alt="logo"/>
                <div className="headerInput">
                    <YoutubeSearchedForIcon />
                    <input placeholder="Search Here" type="text"/>

                </div>
            </div>
            <div className="headerMiddle">
            <div className="headerOption
            headerOption__active">
                <HomeIcon fontSize="large"/>
            </div>
            <div className="headerOption">
                <FlagIcon fontSize="large"/>
            </div>
            
            <div className="headerOption">
                <SubscriptionsRoundedIcon fontSize="large"/>
            </div>
            <div className="headerOption">
                <StorefrontRoundedIcon fontSize="large"/>
            </div>
            <div className="headerOption">
                <SupervisedUserCircleRoundedIcon fontSize="large"/>
            </div>

            </div>
            <div className="headerRight">
                <div className="headerInfo">
                    <Avatar src ={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
            
        </div>
    )
}

export default Header
