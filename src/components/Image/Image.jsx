import React from "react";
import styles from  "./image.module.css";

function Image({ url, downloadLink }) {
  return (
    <div className={styles.image}>
      <img
        src={url}
        alt="photos"
        onDoubleClick={() => window.open(downloadLink, "_blank")}
      />
    </div>
  );
}

export default Image;
