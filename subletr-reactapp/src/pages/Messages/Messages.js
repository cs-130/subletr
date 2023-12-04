import React, { useState, useContext } from 'react';
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
import avatarIcon2 from "./anon.jpg";
import socket from './components/Socket';
import { UserContext } from '../../context/UserContext';


// Fake conversation data
const fakeConversationData = [
    {
        id: 1,
        name: "Rental Agent",
        status: "available",
        messages: [
          { text: "Hello! Are you still looking for an apartment?", direction: "incoming" },
          { text: "Yes, I am. Do you have any listings available?", direction: "outgoing" },
          { text: "We have a two-bedroom apartment in the city center. Are you interested?", direction: "incoming" },
          { text: "That sounds great. Can you tell me more about the rent and amenities?", direction: "outgoing" },
          { text: "The rent is $1200 per month, including utilities. The apartment has a fully equipped kitchen and a balcony.", direction: "incoming" },
          { text: "Is there a parking space available?", direction: "outgoing" },
          { text: "Yes, there's underground parking included.", direction: "incoming" },
          { text: "Sounds good. Can I schedule a viewing for this weekend?", direction: "outgoing" },
          { text: "Certainly! How about Saturday at 10 AM?", direction: "incoming" },
          { text: "Perfect, see you then!", direction: "outgoing" },
        ],
    },
    {
        id: 2,
        name: "Agent Smith",
        status: "available",
        messages: [
          { text: "Good day! We've got a lovely studio apartment near the park. Interested?", direction: "incoming" },
          { text: "Sounds nice. Is it pet-friendly?", direction: "outgoing" },
          { text: "Absolutely! It's perfect for pet owners. Plus, it has a spacious balcony.", direction: "incoming" },
          { text: "Great, I'd like to know more about the lease terms and the monthly rent.", direction: "outgoing" },
          { text: "The lease is for a minimum of one year, and the rent is $1000 per month.", direction: "incoming" },
          { text: "Does that include utilities?", direction: "outgoing" },
          { text: "Yes, all utilities are included. Would you like to schedule a viewing?", direction: "incoming" },
        ],
      },
      {
        id: 3,
        name: "Emma from City Realty",
        status: "busy",
        messages: [
          { text: "Hi there! I noticed you're looking for a 1-bedroom apartment. We have a few options.", direction: "incoming" },
          { text: "Yes, I'm looking for something downtown. What do you have?", direction: "outgoing" },
          { text: "We have a recently renovated unit, 10 minutes walk from Main Street, with a great view of the city.", direction: "incoming" },
          { text: "That sounds promising. What's the rent, and does it come furnished?", direction: "outgoing" },
          { text: "It's $1300 per month unfurnished. We do offer furnishing options for an additional fee.", direction: "incoming" },
          { text: "Could you send me some photos and the exact location?", direction: "outgoing" },
        ],
      },
    {
      id: 4,
      name: "Lakeside Properties",
      status: "away",
      messages: [
        { text: "Hello! Are you interested in waterfront properties?", direction: "incoming" },
        { text: "Yes, that would be amazing. What are the prices like?", direction: "outgoing" },
        { text: "They start at $1500, including a private dock.", direction: "incoming" },
      ],
    },
    {
      id: 5,
      name: "Downtown Real Estate",
      status: "online",
      messages: [
        { text: "We have a special offer on some of our downtown apartments this month.", direction: "incoming" },
        { text: "That's interesting. Can you give me more details?", direction: "outgoing" },
        { text: "Sure! There's a 20% discount for the first six months.", direction: "incoming" },
      ],
    },
    {
      id: 6,
      name: "Suburban Homes",
      status: "offline",
      messages: [
        { text: "Looking for a quiet place? We have some new listings in the suburbs.", direction: "incoming" },
        { text: "I prefer a quiet neighborhood. Do you have any 2-bedroom homes?", direction: "outgoing" },
        { text: "Yes, we do. They come with a backyard and a garage.", direction: "incoming" },
      ],
    },
  ];

function ChatPage() {
    const {
        sendMessage,
        getConversations,
        getMessages,
        conversationIds,
        messages
      } = useContext(UserContext)
    socket.connect();
  // State to track the active conversation
  const [activeConversation, setActiveConversation] = useState(null);

  // Function to handle clicking on a conversation
  const handleConversationClick = (conversationId) => {
    setActiveConversation(conversationId);
  };
  // Find active conversations
  const activeConversations = conversationIds;
  // Find the messages for the active conversation
  const activeMessages = fakeConversationData.find(c => c.id === activeConversation)?.messages || [];

  // Function to send message
  const [message, setMessage] = useState("");
    const sendMessageOnClick = async (event) => {
        event.preventDefault();
        if (message.trim() === "") {
            return;
        }
        await sendMessage({
            text: message,
            conversationId: 0,
            name: "Justin",
            time: Date.now(),
        });
        setMessage("");
      };

  return (
    <div style={{ position: "relative", height: "90%" }}>
      <MainContainer>
        <Sidebar position="left" scrollable={false}>
          <ConversationList>
            {fakeConversationData.map(conversation => (
              <Conversation
                key={conversation.id}
                name={conversation.name}
                onClick={() => handleConversationClick(conversation.id)}
              >
                <Avatar src={avatarIcon2} name={conversation.name} status={conversation.status} />
              </Conversation>
            ))}
          </ConversationList>
        </Sidebar>

        <ChatContainer>
          <MessageList>
            {activeMessages.map((message, index) => (
              <Message key={index} model={{ message: message.text, direction: message.direction }} />
            ))}
          </MessageList>
          <MessageInput placeholder="Type message here" >
            <form onSubmit={(event) => sendMessageOnClick(event)} className="send-message">
                <label htmlFor="messageInput" hidden>
                    Enter Message
                </label>
                <input
                    id="messageInput"
                    name="messageInput"
                    type="text"
                    className="form-input__input"
                    placeholder="type message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Send</button>
                </form>
          </MessageInput>
        </ChatContainer>
      </MainContainer>
    </div>
  );
}

export default ChatPage;