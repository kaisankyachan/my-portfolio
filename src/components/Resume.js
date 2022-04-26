import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    return (
      <section id="resume">

         <div className="row skill">
               <h1 class="sectionh"><span>Resume</span></h1>
            <div className="nine columns main-col">
               <p>
                 Proficiencies: Javascript, HTML, CSS, React, JSON, Node.
               </p>
               <a href="https://docs.google.com/document/d/1MzYdGmdik24vrRNfTIASS7JYhk5lWpAi/edit?usp=sharing&ouid=112657016106639804271&rtpof=true&sd=true">My Resume</a>
   			</div>
         </div>
      </section>
    );
  }
}