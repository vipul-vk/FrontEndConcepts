import React from 'react'

function NameList() {
    const names = ['a','v','c'];
    
  return (
    <div>
        {
            names.map((name, index) => <h2 key={index}>{name}</h2>)
        }
    </div>
  )
  // const nameList = names.map(name =><h2>{name}</h2>);
  // return <div>{nameList}</div>
}

export default NameList