import 'react';
import "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => { 
  const handleClick = () => {
    openModal(image);
  };

  return (
    <li className="image-card" onClick={handleClick}>
      <div>
        <img src={image.urls.small} alt={ image.alt_description} />
      </div>
    </li>
  );

}

export default ImageCard;