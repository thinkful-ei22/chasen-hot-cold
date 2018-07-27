import React from 'react';

export default function Nav(props){
  return (
    <nav> 
      <ul>
        <li><a href='#what' className='what' onClick={() => props.handleInfo()}>What?</a></li>
        <li><a href='' className='new' onClick={() => props.newGame()}>+New Game</a></li>
        
      </ul>
    </nav>
  )
}
