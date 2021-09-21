import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import "./MessageSender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';

function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const handleSubmit =(e) =>{
        e.preventDefault();
        setInput("");
        setImageUrl("");
    };
    return (
        <div className="mesaageSender">
            <div className="messageSenderTop">
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                     value={input}
                     onChange= {(e)=>
                         setInput(e.target.value)
                     }
                     className="messageSenderInput"
                     placeholder={`What's on your mind  ${user.displayName}?`}/>
                     <input
                     value={imageUrl}
                     onChange= {(e)=>
                         setImageUrl(e.target.value)
                     }
                    
                    placeholder="Image URL (optional)"/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>

            </div>
            <div className="messageSenderBottom">

            <div className="messageSenderOption">
                <VideocamIcon style={{color:"red"}}/>
                <h3>Live Video</h3>
                </div>
            <div className="messageSenderOption">
                <PhotoLibraryIcon style={{color:"green"}}/>
                <h3>Photo/Video</h3>
                </div>
            <div className="messageSenderOption">
                <InsertEmoticonIcon style={{color:"orange"}}/>
                <h3>Feeling/Activity</h3>
                </div>
                

            </div>
            
        </div>
    )
}

export default MessageSender
