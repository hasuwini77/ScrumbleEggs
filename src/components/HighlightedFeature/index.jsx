import React from "react";

const HighlightedFeature = ({ title, text, images }) => {
  return (
    <div className="max-w-4xl mx-auto p-5 text-center">
      <h2 className="mb-2 text-2xl font-bold">{title}</h2>
      <p className="mb-4">{text}</p>
      <div
        className={`flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 ${
          images.length > 1 ? "md:justify-between" : "justify-center"
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



export default HighlightedFeature;
