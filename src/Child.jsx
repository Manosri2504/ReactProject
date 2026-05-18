import React from "react";

function Child(props) {
  return (
    <div>
      <h3>
        {props.user} → {props.name}, {props.age}, {props.city}
      </h3>
    </div>
  );
}

export default Child;