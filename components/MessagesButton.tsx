import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 1.5rem;
  color: #ffffff;
  font-size: 1.5rem;
  background-color: #0070f3;
  border: none;
  border-radius: 10px;

  transition: border-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    border-color: #003573;
  }
`;

type MessagesButtonProps = {
  onClick: () => void;
};

const MessagesButton: React.FC<MessagesButtonProps> = ({
  onClick,
}: MessagesButtonProps) => {
  return (
    <Button className="messages__button" onClick={onClick}>
      Add message
    </Button>
  );
};

export default MessagesButton;
