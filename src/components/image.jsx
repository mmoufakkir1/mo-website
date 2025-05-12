import React from "react";

export const Image = ({ title, largeImage, smallImage, link }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {link ? (
          <a href={link} title={title} target="_blank" rel="noopener noreferrer">
            <div className="hover-text">
              <h4>{title}</h4>
            </div>
            <img src={smallImage} className="img-responsive" alt={title} />
          </a>
        ) : (
          <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
            <div className="hover-text">
              <h4>{title}</h4>
            </div>
            <img src={smallImage} className="img-responsive" alt={title} />
          </a>
        )}
      </div>
    </div>
  );
};
