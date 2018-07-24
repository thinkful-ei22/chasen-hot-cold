import React from 'react';

export default function Nav(props){
  return (
    <nav role='navigation'> 
      <ul>
        <li><a href='#what' className='what'>What?</a></li>
        <li><a href='#' className='new'>+New Game</a></li>
      </ul>
    </nav>
  )
}
