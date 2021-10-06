import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function Contact() {
  const [state, handleSubmit] = useForm("mqkwjdye");
  if (state.succeeded) {
      return <p>Comment has been submitted.</p>;
  }
  return (
      <form className='contactForm' onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        placeholder="john@podunk.edu"
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">Message</label>
      <textarea
        placeholder="Message"
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default Contact;