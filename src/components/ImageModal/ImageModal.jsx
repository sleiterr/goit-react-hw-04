import { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./ImageModal.module.css";

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

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={handleClickOutside}>
      <div className={styles.modal}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <img src={image.urls.regular} alt={image.alt_description} />
        {/*
        <p>{image.description || image.alt_description}</p>
        <p>By: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
         */}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ImageModal;
