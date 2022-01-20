import React from 'react';

function RangeSlider({ title, minText, maxText }) {
  return (
    <div class='row'>
      <div class='col-100 mt-3'>
        <p className='text'>{title}</p>
      </div>
      <div class='col-20'>{minText}</div>
      <div class='col-50 pr-20'>
        <input
          type='range'
          min='1'
          max='100'
          class='form-range'
          id='customRange1'
        />
      </div>
      <div class='col-20'>{maxText}</div>
    </div>
  );
}

export default RangeSlider;