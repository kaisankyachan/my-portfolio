import React, { useState } from 'react';
function validateEmail(email) {
   var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}

export default function ContactMe() {
   const [formState, setFormState] = useState({ name: '', email: '', message: '' });
   const [errorMessage, setErrorMessage] = useState('');
   const { name, email, message } = formState;
   //SUBMITTING
   const handleSubmit = (e) => {
     e.preventDefault();
     if (!errorMessage) {
       console.log('Submit Form', formState);
     }
   };
   //ERRORS
   const handleChange = (e) => {
     if (e.target.name === 'email') {
       const isValid = validateEmail(e.target.value);
       if (!isValid) {
         setErrorMessage('Your email is invalid.');
       } else {
         setErrorMessage('');
       }
     } else {
       if (!e.target.value.length) {
         setErrorMessage(`${e.target.name} is required.`);
       } else {
         setErrorMessage('');
       }
     }
     if (!errorMessage) {
       setFormState({ ...formState, [e.target.name]: e.target.value });
       console.log('Handle Form', formState);
     }
   };
   //FORM
   return (
     <section id="contact">
       <h1 class="sectionh"><span>Contact Me</span></h1>
       <form id="contactForm" onSubmit={handleSubmit}>
         <div className="contacts">
            <span className="required">*</span>
            <label className="contactLabel" htmlFor="name">Name</label>
           <input type="text" className="contactInput" name="contactName" defaultValue={name} onBlur={handleChange} />
         </div>
         <div className="contacts">
            <span className="required">*</span>
            <label className="contactLabel" htmlFor="email">Email address</label>
           <input type="email" className="contactInput" name="contactEmail" defaultValue={email} onBlur={handleChange} />
         </div>
         <div className="contacts">
            <span className="required">*</span>
            <label className="contactLabel" htmlFor="message">Message</label>
           <textarea name="contactMessage" className="contactInput" rows="5" defaultValue={message} onBlur={handleChange} />
         </div>
         {/* ERRORS */}
         {errorMessage && (
           <div>
             <p className="error-text">{errorMessage}</p>
           </div>
         )}
         {/* SUBMIT */}
         <button type="submit" className="submit">Submit</button>
       </form>
     </section>
   );
 }