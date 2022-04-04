import React from "react";
import "./imagesection.css";
import Image from "../Image/Image";

function ImageSection({ imageData }) {
  return (
    <div id="images-container">
      {imageData.map((element) => {
        return (
          <Image
            key={element.id}
            url={element.urls.raw}
            downloadLink={element.links.download}
          />
        );
      })}
    </div>
  );
}

export default ImageSection;
