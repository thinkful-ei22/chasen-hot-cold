import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default function GuessBox(props){
  return (
    <div>
      <Feedback feedback={props.feedback}/>
      <GuessForm handleSubmit={props.handleNumSubmit} />
      <GuessCount guessCount={props.guessCount}/>
      <GuessList guesses={props.guesses}/>
    </div>
  );
};