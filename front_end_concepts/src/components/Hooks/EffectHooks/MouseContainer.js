import React, {useState} from 'react'
import HookMouse from './HookMouse';

function MouseContainer() {

    const [display, setsffDisplay]= useState(true);
  return (
    <div>
        <h1>MouseContainer</h1>
        <button onClick={ () => setDisplay(!display)}>
        Toggle display
        </button>
        {display && <HookMouse/>}
    </div>
  )
}

export default MouseContainer