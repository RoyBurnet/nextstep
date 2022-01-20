import React from "react";
import Button from "../components/button";
import { Link } from "react-router-dom";

function FirstPage() {
  return (
    <div>
      <div className='subtitle'>What is you ideal work environment today?</div>
      <div className='profile-text'>Profiles</div>
      <Button text='focussed work' hasNavigation={true} path={"/second-page"} />
      <Button
        text='Collaborate with team'
        hasNavigation={true}
        path={"/second-page"}
      />
      <Button text='Brainstorming' hasNavigation={true} path={"/second-page"} />
      <div className='cta'>
        <div className='profile-text'>new</div>
        <Button
          text='make a new selection'
          isActive={true}
          hasNavigation={true}
          path={"/between-page"}
        />
      </div>
    </div>
  );
}

export default FirstPage;
