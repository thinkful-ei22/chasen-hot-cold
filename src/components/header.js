import React from 'react';
import Nav from './nav';
import Info from './info';

export default function Header(props){
  return (
    <header>
      <Nav newGame={()=>props.newGame()} handleInfo={() =>props.handleInfo()}/>
      <Info handleInfo={() =>props.handleInfo()} visible= {props.visiblity}/>
      <h1>HOT or COLD</h1>
    </header>
  );
};