import React, {useState, useEffect} from 'react'

function EffectHook() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect( () => {
        console.log('useEffect update title');
        document.title = `You clicked ${count} times`
    }, [count])

    return(
        <div>
            <input type="text" value ={name} onChange={e =>{setName(e.target.value)}}></input>
            <button onClick={() =>setCount(prevCount => prevCount +1)}> Clicked {count} times</button>
        </div>
    )
}

export default EffectHook