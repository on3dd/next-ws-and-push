import React from 'react';
import styled from 'styled-components';

import Message from '../models/Message';
import MessagesItem from './MessagesItem';

type MessagesListProps = {
  messages: Message[];
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem 0;
  max-width: 800px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

const MessagesList: React.FC<MessagesListProps> = ({
  messages,
}: MessagesListProps) => (
  <Div className="messages__list">
    {messages.map((message) => {
      return (
        <MessagesItem
          key={message.title}
          message={message}
        />
      );
    })}
  </Div>
);

export default MessagesList;
