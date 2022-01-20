import React from 'react';

function TextAreaField({ title, placeholder }) {
  return (
    <div class='input-group'>
      <p className='text'>{title}</p>
      <textarea placeholder={placeholder} class='form-control-area' />
      <button class='small-btn float-right mt-10'>Send</button>
    </div>
  );
}

export default TextAreaField;