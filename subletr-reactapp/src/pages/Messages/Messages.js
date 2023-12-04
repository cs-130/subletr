import React from 'react';
import '../../App.css'
import ChatBox from "./components/ChatBox";
import ChatList from "./components/ChatList";
import socket from './components/Socket';

export default function Messages() {
    socket.connect();
    return (
        <div className='messages-container'>
            <div className='chatbox'>
                <ChatBox  />
            </div>
            <div className='chat-sidepanel'>
                <ChatList  />
            </div>
        </div>
        )
}