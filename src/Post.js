import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="postTop">
                <Avatar src={profilePic}
                className="postAvatar"/>
                <div className="postTopInfo">
                    <h3>{username}</h3>
                    <p>Timestamp..</p>
                </div>
            </div>
            <div className="postBottom">
                <p>{message}</p>
            </div>
            <div className="postImage">
                <img src={image} alt=""/>
            </div>
            <div className="postOptions">
                <div className="postOption">
                    <ThumbUpAltIcon />
                    <p>Like</p>

                </div>
                <div className="postOption">
                    <ChatBubbleOutlinedIcon />
                    <p>Comment</p>

                </div>
                <div className="postOption">
                    <NearMeIcon />
                    <p>Share</p>

                </div>
                <div className="postOption">
                    <ExpandMoreRoundedIcon />
                    <AccountCircleIcon />
                    

                </div>
            </div>
        </div>
    )
}

export default Post
