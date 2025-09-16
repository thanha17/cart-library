import React from "react";
import styles from "./Button.module.css";

export const Button = ({ variant = "primary", ...props }) => {
  const className = `${styles.btn} ${variant === "primary" ? styles.primary : styles.secondary}`;
  return <button className={className} {...props} />;
};