import React from 'react';
import './info.css';

export default function Info(props){
  return (
    <section id="what" tabIndex="-1" style={{'display': (props.visible)? 'block': 'none'}}>
      <div className='content'>
        <h2>What do I do?</h2>
        <div>
          <p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
          <ul>
            <li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
            <li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
            <li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
          </ul>
          <p>So, Are you ready?</p>
          <button href='' onClick={()=>props.handleInfo()}>Close</button>
        </div>
      </div>
    </section>
  );
};