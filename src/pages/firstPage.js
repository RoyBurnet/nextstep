import React from 'react'
import Button from '../components/button'

function FirstPage() {
  return (
    <div>
      <div className='subtitle'>What is you ideal work environment today?</div>
      <div className='profile-text'>Profiles</div>
      <Button text='focussed work' />
      <Button text='focussed work' />
      <Button text='focussed work' />
      <div className='cta'>
        <div className='profile-text'>new</div>
        <Button text='make anew selection' isActive={true} />
      </div>
    </div>
  );
}

export default FirstPage