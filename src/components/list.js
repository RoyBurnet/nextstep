import React from "react";
import Button from "./button";

function List({ cta }) {
  return (
    <>
      <div className='list-container'>
        <div className='list-summary'>
          <div className='list-summary-item'>
            <span className='subject'>Floor</span>{" "}
            <span className='value'>4</span>
          </div>
          <div className='list-summary-item'>
            <span className='subject'>Space</span>{" "}
            <span className='value'>c-suite</span>
          </div>
          <div className='list-summary-item'>
            <span className='subject'>Desk</span>{" "}
            <span className='value'>14</span>
          </div>
        </div>
        {cta ? (
          <div className='select-btn'>
            <Button text='select this spot' isActive={true} />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className='division'></div>
    </>
  );
}

export default List;
