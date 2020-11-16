import React from 'react';
import styled from 'styled-components';
import { io, Socket } from 'socket.io-client';

import Message from '../models/Message';
import MessagesList from './MessagesList';
import MessagesButton from './MessagesButton';

const Div = styled.div`
  width: 100%;
  text-align: center;
`;

const Heading = styled.h2`
  margin: 0;
  font-size: 2.5rem;
`;

type MessagesProps = {};

type MessagesState = {
  messages: Message[];
};

class Messages extends React.Component<
  MessagesProps,
  MessagesState
> {
  private socket: Socket;

  constructor(props: MessagesProps) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    this.socket = io();
    this.socket.on('message', (message: Message) => {
      this.setState((state) => ({
        messages: [...state.messages, message],
      }));
    });
  }

  private onClick() {
    this.socket.emit('message');
  }

  render() {
    return (
      <Div className="messages">
        <Heading className="messages__title">
          Messages
        </Heading>
        <MessagesList messages={this.state.messages} />
        <MessagesButton onClick={() => this.onClick()} />
      </Div>
    );
  }
}

export default Messages;
