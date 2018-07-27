import React, { Component } from 'react';

import Header from './header';



import GuessBox from './guess-box';



export default class Game extends Component {
    constructor(props){
        super(props);
        this.state={
            // userGuess: '',
            guesses: [],
            correctAnswer: Math.floor(Math.random()*100)+1,
            feedback: 'Make Your Guess',
            info: false
        }
    }
    handleSubmit(num){
        
        let feedback;
        const diff = Math.abs(num- this.state.correctAnswer)
        if(diff>=50){
            feedback = 'You are Ice Cold'
        }else if(diff>=30){
            feedback = 'You are Cold'
        }else if(diff>=10){
            feedback='You are Warm'
        }else if (diff>=4){
            feedback= 'You are Hot'
        }else if (diff>=1){
            feedback= 'You are on fire'
        }else{
            feedback= 'WINNER'
        }
        this.setState({
            userGuess: Number(num),
            guesses: [...this.state.guesses, num],
            feedback: feedback
        });
    }
    newGame() {
        this.setState({
        userGuess: '',
        guesses: [],
        correctAnswer: Math.floor(Math.random()*100)+1,
        feedback: 'Make Your Guess'
        });
    }
    handleInfo(){
        this.setState({
            info: !this.state.info
        })
    }
    
  render() {



    return (
      <div>
        <Header 
            newGame = {() => this.newGame()}
            handleInfo = {()=> this.handleInfo()}
            visiblity = {this.state.info}
        />
        <main role='main'>
          <div className='game'>
            
            <GuessBox 
                handleNumSubmit={num=> this.handleSubmit(num)} 
                guessCount={this.state.guesses.length}
                feedback={this.state.feedback}
                guesses={this.state.guesses}
            />
            
          </div>
        </main>
      </div>
      
    )
  }
}