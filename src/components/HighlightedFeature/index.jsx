import React from "react";
import PropTypes from "prop-types";
import styles from "./HighlightedFeature.module.css";

const HighlightedFeature = ({ title, text, images }) => {
  return (
    <div className={styles.feature}>
      <h2>{title}</h2>
      <p>{text}</p>
      <div
        className={`${styles.image} ${
          images.length > 1 ? styles.multiple : styles.single
        }`}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Featured ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

HighlightedFeature.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HighlightedFeature;
