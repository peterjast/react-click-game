import React from "react";

function Card({ clickHandler, id, image, name }) {
  return (
    <div className="card-holder">
      <img
        src={image}
        alt={name}
        className="card-select grow img-thumbnail m-2 pointer"
        onClick={() => clickHandler(id)}
      />
    </div>
  );
}

export default Card;