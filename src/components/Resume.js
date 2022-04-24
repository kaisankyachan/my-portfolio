import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row skill">
               <h1 class="sectionh"><span>Resume</span></h1>
            <div className="nine columns main-col">
               <p>
               {resumeData.skillsDescription}
               </p>
   			</div>
         </div>
      </section>
    );
  }
}