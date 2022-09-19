import React from "react";

function Person(props) {
  return (
    <div className="flexBox">
      <div className="imageBox">
        <img src={props.user.avatar}></img>
      </div>

      <span>
        <h3>{props.user.name}</h3>
        <p>{props.user.id}</p>
        <p>{props.user.email}</p>
      </span>
    </div>
  );
}

export default Person;