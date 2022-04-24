import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <header>
         <nav id="nav-wrap">
            <ul id="nav" className="nav">
               <li className="current"><a href="#about">About</a></li>
             <li><a href="#resume">Resume</a></li>
               <li><a href="#portfolio">Portfolio</a></li>
               <li><a href="#contact">Contact</a></li>
            </ul>
         </nav>
      </header>
      </React.Fragment>
    );
  }
}