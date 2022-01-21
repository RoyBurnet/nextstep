import React from "react";

function RangeSlider({ title, minText, maxText }) {
  return (
    <div className='range-container'>
      <p className='text'>{title}</p>
      <div className='range-buttons'>
        <div className='small-text'>{minText}</div>
        <div className="slide-container">
          <input
            type='range'
            min='1'
            max='100'
            class='form-range'
            id='customRange1'
          />
        </div>
        <div className='small-text'>{maxText}</div>
      </div>
    </div>
  );
}

export default RangeSlider;
