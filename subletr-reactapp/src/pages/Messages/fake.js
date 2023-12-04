import React from 'react';
import {
  MainContainer, 
  ChatContainer, 
  MessageList, 
  MessageInput,
  Sidebar,
  ConversationList,
  Conversation,
  Avatar,
  Message
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import avatarIcon from "./john.jpg";

// Fake conversation data
const fakeConversationData = [
  { name: "John Doe", lastSenderName: "John", info: "Hello...", status: "available" },
  { name: "Alice Smith", lastSenderName: "Alice", info: "See you soon!", status: "busy" },
  { name: "Bob Johnson", lastSenderName: "Bob", info: "That's great!", status: "away" },
  // Add more conversations here
];

// Fake message data
const fakeMessageData = [
  { message: "Hello!", direction: "incoming" },
  { message: "Hi! How are you?", direction: "outgoing" },
  { message: "I'm good, thanks for asking!", direction: "incoming" },
  { message: "Glad to hear that!", direction: "outgoing" },
  // Add more messages here
];

export function FakeConversations() {
  return (
    <>
      {fakeConversationData.map((conv, index) => (
        <Conversation
          key={index}
          name={conv.name}
          lastSenderName={conv.lastSenderName}
          info={conv.info}
        >
          <Avatar src={avatarIcon} name={conv.name} status={conv.status} />
        </Conversation>
      ))}
    </>
  );
}

export function FakeMessages() {
  return (
    <>
      {fakeMessageData.map((msg, index) => (
        <Message
          key={index}
          model={{
            message: msg.message,
            direction: msg.direction,
          }}
        />
      ))}
    </>
  );
}
