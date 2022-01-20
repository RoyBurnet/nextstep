import "./App.css";
import React from "react";
const mainObjective = [
  {
    text: "focussed",
    isActive: false,
  },
  {
    text: "my own space",
    isActive: false,
  },
];

export default function App() {
  return (
    <div className='App'>
      <Button text='focussed work' />
      <Button text='collaborate with team' isActive={true} />
      <Button text='brainstorming' isDisabled={true} />
      <Option title='Main objective' options={mainObjective} />
    </div>
  );
}

function Button({ text, isActive, isDisabled }) {
  return (
    <div
      className={`btn ${isActive ? "btn-active" : null} ${
        isDisabled ? "btn-disabled" : null
      }`}
      onClick={() => console.log(isActive)}>
      {text}
    </div>
  );
}

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
