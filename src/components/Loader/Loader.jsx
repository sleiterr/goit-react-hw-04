//Loader.jsx
import "react";
import { TailSpin } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => (
  <div className={styles.loader}>
    <TailSpin height="80" width="80" color="grey" ariaLabel="loading" />
  </div>
);

export default Loader;
