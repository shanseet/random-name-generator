import React from "react";

function Person(props) {
    return (
        <div>
            <span className="name-item">{props.name}</span>
            <span className="remove-name" onClick={() => { props.removeName(props.index) }}>-</span>
        </div>
    )
}

export default Person;