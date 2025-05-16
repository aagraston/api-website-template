import React, { useEffect, useState } from 'react';
import './ScrollingMessage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const ScrollingMessage: React.FC = () => {
  const [welcomeMessage, setWelcomeMessage] = useState<string>('Welcome!');


  useEffect(() => {
    const fetchWelcomeMessage = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/`);
        const data = await response.json();
        console.log(data);
        if (data.welcomeMessage) {
          setWelcomeMessage(data.welcomeMessage);
        }
      } catch (error) {
        console.error('Error fetching welcome message:', error);
      }
    };

    fetchWelcomeMessage();
  }, []);

  return (
    <div className="scrolling-message-container">
      <div className="welcome-container">
        <div className="scrolling-message">
          <p>{welcomeMessage}</p>
        </div>
      </div>
      <div className="tooltip-container">
        <FontAwesomeIcon icon={faInfoCircle} className="tooltip-icon" />
        <div className="tooltip-text">Let's set this message up to come from our backend!</div>
      </div>
    </div>
  );
};

export default ScrollingMessage;