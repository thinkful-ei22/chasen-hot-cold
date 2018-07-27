import {MAKE_GUESS, RESET_GAME, INFO_SECTION} from '../actions';

const initialState = {
  guesses: [],
  correctAnswer: Math.floor(Math.random()*100)+1,
  feedback: 'Make Your Guess',
  info: false
}

export const hotColdReducer = (state=initialState, action) => {
  if(action.type === MAKE_GUESS){

    let feedback;
    let guess = Number(action.guess);
    const diff = Math.abs(guess- state.correctAnswer)
    

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

    return Object.assign({}, state, {
      feedback,
      guesses: [...state.guesses, guess]
    });
  }

  if(action.type === RESET_GAME){
    return Object.assign({}, state, {
      guesses: [],
      correctAnswer: Math.floor(Math.random()*100)+1,
      feedback: 'Make Your Guess',
      info: false
    });
  }

  if(action.type===INFO_SECTION){
    return Object.assign({}, state, {
      info: !state.info
    });
  }

  return state;

}

