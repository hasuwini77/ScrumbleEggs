import React from "react";
import PropTypes from "prop-types";

const HighlightedFeature = ({ title, text, images }) => {
  return (
    <div className="max-w-4xl mx-auto p-5 text-center">
      <h2 className="mb-2 text-2xl font-bold text-gray-800">{title}</h2>
      <p className="mb-4 text-gray-600">{text}</p>
      <div
        className={`flex ${
          images.length > 1 ? "justify-between space-x-4" : "justify-center"
        }`}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Featured ${index + 1}`}
            className={`w-full max-h-200 h-auto object-cover rounded-lg shadow-md ${
              images.length > 1 ? "flex-1" : "max-w-md"
            }`}
          />
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
