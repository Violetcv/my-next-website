'use client'

import React from 'react';
import './jumbotron.css';
import { sendGTMEvent, sendGAEvent } from '@next/third-parties/google'

function Jumbotron() {

  function handleClick() {
    alert('Button Clicked! GTM sent! GUA sent!');
    sendGTMEvent({ event: 'buttonClicked', value: 'xyz' });
    window.location.href = 'https://www.saeternus.com/';
  }
//   () => sendGTMEvent({ event: 'buttonClicked', value: 'xyz' })

  return (
    <div className="jumbotron">
      <div className='container-jumbotron'>
      <h1>Welcome to My Google Tag Manager and Google Universal Analytics tester</h1>
      <p>Please allow the page to load <strong>completely</strong>.</p>
      <p>Following which please click on the button below, which will redirect you to a webpage using an outbound link.</p>
      <p>If you make any observations of note, please inform Chhavi Verma.</p>
      <button className='pretty-button' onClick={handleClick}>Click Me!</button>
      </div>
  </div>
  );
}

export default Jumbotron;