import React, { useState } from 'react';
import MessageDisplay from './MessageDisplay';

function MessageParent() {
  const [message, setMessage] = useState('');

  const updateMessage = () => {
    setMessage('Message updated!');
  };

  return (
    <div>
      <MessageDisplay message={message} updateMessage={updateMessage} />
      <button onClick={updateMessage}>Update Message</button>
    </div>
  );
}

export default MessageParent;
