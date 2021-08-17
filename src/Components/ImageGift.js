import React from "react";

function ImageGift({ title, url, id }) {
  console.log({ title, url, id });
  return (
    <div className="card animate__animated animate__shakeY">
      <h4 className="title_image">{title}</h4>
      <img src={url} alt={title} />
    </div>
  );
}

export default ImageGift;
