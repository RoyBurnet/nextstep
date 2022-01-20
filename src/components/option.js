import React from "react";
import Button from './button';

function Option({ title, options }) {
  return (
    <div className='option-container'>
      <p className='text'>{title}</p>
      <div className='btn-container'>
        {options.map((item, index) => {
          return (
            <Button text={item.text} key={index} isActive={item.isActive} />
          );
        })}
      </div>
    </div>
  );
}

export default Option;
