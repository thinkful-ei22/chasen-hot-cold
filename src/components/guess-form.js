import React from 'react';

export default function GuessForm(props){
  return (
    <form onSubmit={e => {
        e.preventDefault();
        props.handleSubmit(e.target.userGuess.value);
        e.target.userGuess.value= '';
    }}>  
      <input 
        type='number'
        name='userGuess'
        id='guess'
        className='text'
        min='1'
        max='100'
        placeholder='Enter Your Guess'
        required
      />
      <button
        type='submit'
        name='submit'
        id='guessButton'
        className='button'
      >Guess
      </button>
    </form>
  );
};


        