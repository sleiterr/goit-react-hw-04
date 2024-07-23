import { useEffect } from "react";
import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";

// Обов'язково встановіть елемент для модального вікна
ReactModal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    document.body.classList.add(styles.noScroll);

    return () => {
      window.removeEventListener("keydown", handleEsc);

      document.body.classList.remove(styles.noScroll);
    };
  }, [onClose]);

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ReactModal
      isOpen={!!image}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      onClick={handleClickOutside}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      {/* Закоментуйте інформацію про зображення */}
      {/* <p>{image.description || image.alt_description}</p>
      <p>By: {image.user.name}</p>
      <p>Likes: {image.likes}</p> */}
    </ReactModal>
  );
};

export default ImageModal;
