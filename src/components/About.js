import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <section id="about">
         <div className="row">
            <div className="nine columns main-col">
            <h1>Kai Whitney</h1>
               <p>I have been programming for many years now, and I mostly program 
                  in CSS, HTML, and Javascript. I like front end and design the best.
               </p>
            </div>
            <div className="three columns">
               <img className="profile-image" alt="" />
            </div>
         </div>
      </section>
    );
  }
}