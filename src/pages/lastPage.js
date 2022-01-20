import React from "react";
import List from "../components/list";
import TextAreaField from "../components/textareafield";

function LastPage() {
  return (
    <div>
      <div className='subtitle'>Hooray! You found your spot.</div>
      <List cta={false} />
      <div className='subtitle'>
        Rate this suggestion and get a free Starbucks coffee!
      </div>

      <div className='profile-text'>This suggestion was</div>
      <div className='subtitle'>
       can you explain
      </div>
      <TextAreaField />
    </div>
  );
}

export default LastPage;
