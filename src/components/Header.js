import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
         <nav id="nav-wrap">
            <ul id="nav">
               <li><a id="aboutl" href="#about">About</a></li>
             <li><a id="resumel" href="#resume">Resume</a></li>
               <li><a id="portfoliol" href="#portfolio">Portfolio</a></li>
               <li><a id="contactl" href="#contact">Contact</a></li>
            </ul>
         </nav>
      </header>
    );
  }
}