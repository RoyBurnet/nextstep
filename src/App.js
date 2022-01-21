import "./App.css";
import React from "react";
import Logo from "./components/logo";


import { render } from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import FirstPage from "./pages/firstPage";
import LastPage from './pages/lastPage';
import SecondPage from './pages/secondPage';
import ThirdPage from './pages/thirdPage';
import BetweenPage from './pages/betweenPage';

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
        <Logo/>
        <div className='intro'>
          Goodmorning
          <br /> welcome at EDGE Olympic!
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route index element={<FirstPage />} />
          <Route path='second-page' element={<SecondPage />} />
          <Route path='between-page' element={<BetweenPage />} />
          <Route path='third-page' element={<ThirdPage />} />
          <Route path='last-page' element={<LastPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
