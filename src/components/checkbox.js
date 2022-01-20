import React from "react";

function CheckBox({ title }) {
  return (
    <div class='input-group'>
      <label class='checkbox-input'>
        {title}
        <input type='checkbox' />
        <span class='checkbox-text'></span>
      </label>
    </div>
  );
}

export default CheckBox;
