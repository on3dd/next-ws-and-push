import { NextComponentType } from 'next';
import styled from 'styled-components';

import Message from '../models/Message';
import MessagesList from './MessagesList';
import MessagesButton from './MessagesButton';

const Div = styled.div`
  text-align: center;
`;

const Heading = styled.h2`
  margin: 0;
  font-size: 2.5rem;
`;

const Messages: NextComponentType = () => {
  const onClick = () => {
    console.log('fuck niggers');
  };

  const messages: Message[] = [
    {
      title: 'bruh',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, natus.',
    },
    {
      title: 'i hate niggers',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, laudantium.',
    },
  ];

  return (
    <Div className="messages">
      <Heading className="messages__title">
        Messages
      </Heading>
      <MessagesList messages={messages} />
      <MessagesButton onClick={onClick} />
    </Div>
  );
};

export default Messages;
