import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

function Chat(props) {
    const [messages, setMessages] = useState([]);

    function onSend(newMessages = []) {
        setMessages(GiftedChat.append(messages, newMessages));
    }

    return (
        <GiftedChat
            messages={messages}
            onSend={onSend}
            user={{
                _id: 1,
            }}
            text={props.inputText}
            onInputTextChanged={props.handleInputText}
        />
    );
}

export default Chat;
