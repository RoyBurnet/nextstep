import React from "react";
import { useNavigate } from "react-router-dom";
function Button({ text, isActive, isDisabled, hasNavigation, path }) {
  let navigate = useNavigate()
  const [checked, setChecked] = React.useState(isActive);
  const [disabled, setDisabled] = React.useState(isDisabled);
  const toggleBtn = () => {
    if (disabled) return;
    setChecked(!checked);
    if (hasNavigation) {
      navigate(path)
    }
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
