
/*Actions  

guessAction
FeedbackAction
NewGameAction

infoAction
*/

export const MAKE_GUESS = 'MAKE_GUESS';
export const RESET_GAME = 'RESET_GAME';
export const INFO_SECTION = 'INFO_SECTION';

export const makeGuess = guess => ({
  type: MAKE_GUESS,
  guess
})

export const resetGame = correctAnswer => ({
  type: RESET_GAME,
  correctAnswer
})

export const infoSection = info => ({
  type: INFO_SECTION,
  info
})