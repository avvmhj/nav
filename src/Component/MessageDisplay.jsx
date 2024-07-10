import React from 'react';

function MessageDisplay({ message ,updateMessage }) {
  return (
    <div>
      <p>Current Message: {message}</p>
      <button  onClick={updateMessage}>UpdateMessage 'c'</button>

    </div>
  );
}

export default MessageDisplay;
