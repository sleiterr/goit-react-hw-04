// ImageCard.jsx
import 'react';
import styles from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => { 
  const handleClick = () => {
    openModal(image);
  };

  return (
    <li className={styles.imageCard} onClick={handleClick}>
        <img src={image.urls.small} alt={image.alt_description} />
    </li>
  );

}

export default ImageCard;