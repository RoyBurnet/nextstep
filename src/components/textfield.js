import React from 'react'

function TextField({ placeholder }) {
  return (
    <div class='input-group'>
      <input type='text' placeholder={placeholder} class='form-control' />
      <button class='small-btn'>Save</button>
    </div>
  );
}

export default TextField;