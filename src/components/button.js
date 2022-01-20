import React from "react";

function Button({ text, isActive, isDisabled }) {
  const [checked, setChecked] = React.useState(isActive);
  const [disabled, setDisabled] = React.useState(isDisabled);
  const toggleBtn = () => {
    if (disabled) return;
    setChecked(!checked);
  };

  return (
    <div
      className={`btn ${checked ? "btn-active" : null} ${
        disabled ? "btn-disabled" : null
      }`}
      onClick={() => toggleBtn()}>
      {text}
    </div>
  );
}

export default Button;
