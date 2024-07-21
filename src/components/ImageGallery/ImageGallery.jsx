import 'react';
import ImageCard from "../ImageCard/ImageCard";
import "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => { 
  return (
    <ul className='image-gallery'>
      {images.map(image => (
        <ImageCard key={image.id} image={image} openModal={ openModal} />
      ))}
    </ul>
  );
};

export default ImageGallery;