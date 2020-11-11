import React from 'react';
import styled from 'styled-components';

import Message from '../models/Message';

type MessagesItemProps = {
  message: Message;
};

const Div = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  flex-basis: 45%;
  text-align: left;
  border: 1px solid #eaeaea;
  border-radius: 10px;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
`;

const Description = styled.p`
  margin: 0;
`;

const MessagesItem: React.FC<MessagesItemProps> = ({
  message,
}: MessagesItemProps) => (
  <Div className="item">
    <Title className="item__heading">{message.title}</Title>
    <Description className="item__description">
      {message.description}
    </Description>
  </Div>
);

export default MessagesItem;
