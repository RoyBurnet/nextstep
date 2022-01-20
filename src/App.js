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

import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/firstPage";

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
      <div className='header'>
        <Logo />
        <div className="intro">Goodmorning<br /> welcome at EDGE Olympic!</div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FirstPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}



      // <Button text='focussed work' />
      // <Button text='collaborate with team' isActive={true} />
      // <Button text='brainstorming' isDisabled={true} />
      // <Option title='Main objective' options={mainObjective} />
      // <RangeSlider title='Maintenance' minText='Cool' maxText='Warm' />
      // <CheckBox title='Save this to a new profile' />
      // <TextField placeholder='Name a profile' />
      // <TextAreaField
      //   title='Can you explain?'
      //   placeholder='Write your message to us here'
      // />
      // <List />