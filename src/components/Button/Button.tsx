import React from "react";
import styles from './Button.module.css';

export default function ButtonForm({ onClick, TitleButton, className }) {
  return (
    <div className={className}>

    <button
      onClick={onClick}
      className={styles.button}
      >
      {TitleButton}
    </button>
      </div>
  );
}
