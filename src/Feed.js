import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender/>
            <Post 
           profilePic="https://scontent.fqlf1-1.fna.fbcdn.net/v/t1.0-9/54369268_2621657101181967_4751207824879517696_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_ohc=sJKSD8RC-lMAX86L9uz&_nc_ht=scontent.fqlf1-1.fna&oh=0f9ab56d6a655ab61474ce31710601bf&oe=6078BAD2" 
            username= 'Md mahamudul Alam'
            message='wow thats worked'
            timestamp='This is timestamp'
            image="https://cdn.abcotvs.com/dip/images/1816915_032517-ss-earth-hour-img.jpg"
            />
            <Post 
           profilePic="https://scontent.fqlf1-1.fna.fbcdn.net/v/t1.0-9/33063613_2136602059687476_6406760616173764608_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_ohc=arsamuZy5_oAX8MNEm1&_nc_ht=scontent.fqlf1-1.fna&oh=50406abc8d81e9288bbd0312b0d6cdd6&oe=60799B1D" 
            username= 'Md mahamudul Alam'
            message='wow thats worked'
            timestamp='This is timestamp'
            
            />
            <Post />
            
            
        </div>
    )
}

export default Feed;
