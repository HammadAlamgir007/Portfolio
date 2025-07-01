import React from "react";

const Card = ({ imageUrl, altText, title, description, explore, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col h-full transition-transform hover:scale-105">
      {/* Only render image if imageUrl is provided */}
      {imageUrl && (
        <img
          className="w-full h-48 object-cover"
          src={imageUrl}
          alt={altText}
          loading="lazy"
        />
      )}
      <div className="p-6 flex flex-col flex-1 items-center">
        {/* Render icon if provided */}
        {icon && (
          <div className="mb-2 text-3xl text-blue-600 dark:text-blue-300">
            {icon}
          </div>
        )}
        <h1 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2 text-center">
          {title}
        </h1>
        <p className="text-gray-700 dark:text-gray-200 flex-1 mb-4 text-center">
          {description}
        </p>
        {explore && (
          <button
            className="mt-auto px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition font-semibold flex items-center gap-2"
            onClick={() => window.open(explore, "_blank")}
          >
            Explore <span>&rarr;</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
