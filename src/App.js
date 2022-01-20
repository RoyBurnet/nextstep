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
      <Logo/>
      <Button text='focussed work' />
      <Button text='collaborate with team' isActive={true} />
      <Button text='brainstorming' isDisabled={true} />
      <Option title='Main objective' options={mainObjective} />
      <RangeSlider title='Maintenance' minText='Cool' maxText='Warm' />
      <CheckBox title='Save this to a new profile'/>
      <TextField placeholder='Name a profile'/>
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

function RangeSlider({ title, minText, maxText }) {
  return (
    <div class="row">
      <div class="col-100 mt-3">
        <p className='text'>
            {title}
        </p>
      </div>
      <div class="col-20">
          {minText}
      </div>
      <div class="col-50 pr-20">
          <input type="range" min="1" max="100" class="form-range" id="customRange1"/>
      </div> 
      <div class="col-20">
          {maxText}
      </div>
  </div>
  );
}

function Logo(){
  return (
    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.5008 49C24.4155 49 24.3319 48.9984 24.2482 48.9984H24.222C24.1416 48.9984 24.0612 48.9967 23.9825 48.9951L23.9414 48.9934C17.5144 48.8491 11.4958 46.2377 6.99461 41.6398C2.48355 37.0321 0 30.9465 0 24.5C0 10.9902 10.9906 0 24.5008 0C24.5943 0 24.6878 0.00163651 24.7813 0.00163651C24.8748 0.00327682 24.9683 0.00492096 25.0602 0.00656128C31.4856 0.150909 37.5042 2.76232 42.007 7.36017C46.5165 11.9662 49 18.0519 49 24.4984C49.0016 38.0081 38.0094 49 24.5008 49ZM23.9546 48.3767L23.9939 48.3783C24.071 48.38 24.1481 48.3816 24.2269 48.3816H24.2548C24.3368 48.3832 24.4188 48.3832 24.5008 48.3832C37.6715 48.3832 48.3865 37.6686 48.3865 24.4984C48.3865 18.2142 45.9653 12.2795 41.569 7.78994C40.7046 6.90744 39.7827 6.09875 38.8099 5.36881C39.2381 5.74444 39.6547 6.13976 40.0582 6.55148C44.046 10.6359 46.2425 16.031 46.2425 21.7393C46.2425 27.4624 44.0378 32.8641 40.0336 36.9518C36.036 41.0329 30.6933 43.3491 24.9897 43.4754H24.988C24.906 43.477 24.824 43.4786 24.7403 43.4786C24.6649 43.4803 24.5828 43.4803 24.4992 43.4803C14.0319 43.4803 5.51498 34.9637 5.51498 24.4967C5.51498 19.5117 7.43259 14.8024 10.9151 11.2346C11.2432 10.8984 11.5828 10.5752 11.9305 10.2668C11.2957 10.7376 10.6855 11.2461 10.0999 11.7923C9.86365 12.0121 9.63071 12.2385 9.40434 12.4714C5.51334 16.4427 3.371 21.6934 3.371 27.2541C3.371 32.8017 5.50514 38.0442 9.38137 42.0122C13.2527 45.9785 18.4265 48.2372 23.9546 48.3767ZM24.5008 0.615124C11.3302 0.615124 0.615145 11.3298 0.615145 24.5C0.615145 30.7841 3.03636 36.7188 7.43259 41.2084C8.29708 42.0909 9.22061 42.8996 10.1917 43.6296C9.8538 43.3343 9.52409 43.0259 9.20257 42.7077C9.11563 42.6224 9.03033 42.5355 8.94339 42.4469C4.95561 38.3624 2.75913 32.969 2.75913 27.259C2.75913 21.5359 4.96381 16.1343 8.968 12.0466C12.9656 7.96545 18.3084 5.6493 24.012 5.523H24.0136H24.0481C24.1186 5.52136 24.1891 5.51972 24.2613 5.51972C24.3368 5.51808 24.4188 5.51807 24.5025 5.51807C34.9698 5.51807 43.4867 14.0347 43.4867 24.5016C43.4867 29.4866 41.569 34.196 38.0865 37.7621C37.7584 38.0984 37.4189 38.4215 37.0711 38.7299C37.8339 38.164 38.5622 37.5423 39.2528 36.8697C39.3693 36.7566 39.4841 36.6417 39.5973 36.5253C43.4883 32.554 45.6306 27.3033 45.6306 21.7426C45.6306 16.195 43.4965 10.9525 39.6203 6.98454C35.7522 3.02313 30.5768 0.762753 25.0487 0.623325C24.9585 0.621685 24.8683 0.620045 24.7764 0.618404C24.6829 0.616764 24.5927 0.615124 24.5008 0.615124ZM24.0267 6.13648C19.2204 6.25787 14.7208 8.22298 11.3564 11.6677C7.98704 15.1189 6.13177 19.6758 6.13177 24.5C6.13177 34.6291 14.3714 42.8684 24.5008 42.8684C24.5779 42.8684 24.6567 42.8684 24.7338 42.8668C24.8191 42.8668 24.8962 42.8652 24.9749 42.8635C24.9749 42.8635 24.9749 42.8635 24.9765 42.8635C29.7829 42.7421 34.2824 40.777 37.6452 37.3323C41.0146 33.8811 42.8699 29.3242 42.8699 24.5016C42.8699 14.3726 34.6302 6.1332 24.5008 6.1332C24.4221 6.1332 24.345 6.1332 24.2679 6.13484C24.1941 6.13484 24.1285 6.13648 24.0612 6.13812L24.0267 6.13648Z" fill="#FF7D70"/>
    </svg>
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

function CheckBox({ title }){
  return (
    <div class="input-group">
      <label class="checkbox-input">{title}
          <input type="checkbox"/>
          <span class="checkbox-text"></span>
      </label>
    </div>   
  );
}

function TextField({ placeholder }){
 return (
  <div class="input-group">
    <input type="text" placeholder={placeholder} class="form-control"/>
    <button class="small-btn">Save</button>
  </div>
 );
}
