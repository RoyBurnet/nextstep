import React from "react";
import CheckBox from "../components/checkbox";
import TextField from "../components/textfield";
import List from "../components/list";

function thirdPage() {
  return (
    <React.Fragment>
        <p className='text mt-10'>Here are the best options for you:</p>
        <List/>
        <List/>
        <CheckBox title='Save this to a new profile' />
        <TextField placeholder='Name a profile' />
    </React.Fragment>
  );
}

export default thirdPage;