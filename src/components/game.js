import React, { Component } from 'react';

import Header from './header';
import Feedback from './feedback';
import GuessForm from './guess-form';
import GuessCount from './guess-count';
import GuessList from './guess-list';



export default class Game extends Component {
  render() {
    return (
      <div>
        <Header />
        <main role='main'>
          <div className='game'>
            <Feedback />
            <GuessForm />
            <GuessCount />
            <GuessList />
          </div>
        </main>
      </div>
      
    )
  }
}