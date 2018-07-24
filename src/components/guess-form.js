import React from 'react';

export default function GuessForm(props){
  return (
    <form>  
      <input 
        type='number'
        name='guess'
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


        