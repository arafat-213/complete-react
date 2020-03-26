import React from 'react'

const person = (props) => {
    return (
    <div>
    <p>I am {props.name} and my age is {props.age}</p>
    <p>{props.children}</p>
    </div>
    )
    
}

export default person