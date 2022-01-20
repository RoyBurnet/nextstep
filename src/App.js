import "./App.css";
import React from "react";
import Button from "./components/button";
import RangeSlider from "./components/rangeslider";
import Logo from "./components/logo";
import Option from "./components/option";
import CheckBox from "./components/checkbox";
import TextField from "./components/textfield";
import TextAreaField from "./components/textareafield";
import List from "./components/list";

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
      <Logo />
      <Button text='focussed work' />
      <Button text='collaborate with team' isActive={true} />
      <Button text='brainstorming' isDisabled={true} />
      <Option title='Main objective' options={mainObjective} />
      <RangeSlider title='Maintenance' minText='Cool' maxText='Warm' />
      <CheckBox title='Save this to a new profile' />
      <TextField placeholder='Name a profile' />
      <TextAreaField
        title='Can you explain?'
        placeholder='Write your message to us here'
      />
      <List />
    </div>
  );
}
