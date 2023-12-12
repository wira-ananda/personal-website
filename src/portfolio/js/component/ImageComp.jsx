import React from "react";

export default function ToolsImage(props) {
  return (
    <div className="items-center">
      <img src={props.image} />
      <h1 className="text-center">{props.name}</h1>
    </div>
  );
}
