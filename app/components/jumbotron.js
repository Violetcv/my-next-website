'use client'

import React from 'react';
import './jumbotron.css';
import { sendGTMEvent, sendGAEvent } from '@next/third-parties/google'

function Jumbotron() {

  function handleClick() {
    alert('Button Clicked! GTM sent! GUA sent!');
    sendGTMEvent({ event: 'buttonClicked', value: 'xyz' });
    sendGAEvent({ event: 'buttonClicked', value: 'xyz' });
    window.location.href = 'https://www.saeternus.com/';
  }
//   () => sendGTMEvent({ event: 'buttonClicked', value: 'xyz' })

  return (
    <div className="jumbotron">
      <div className='container-jumbotron'>
      <h1>Welcome to My React App</h1>
      <p>This is a Basic Jumbotron. You can personalize it <strong>however</strong> you want!</p>
      <p>This is a simple React app with a navbar, jumbotron, sign-in (using Firebase), and about pages.</p>
      <button className='pretty-button' onClick={handleClick}>Click Me!</button>
      </div>
  </div>
  );
}

export default Jumbotron;