import "react";
import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, openModal }) => (
  <ul className={styles.gallery}>
    {images.map((image) => (
      <ImageCard 
        key={image.id} 
        image={image} 
        openModal={openModal} 
      />
    ))}
  </ul>
);

export default ImageGallery;
