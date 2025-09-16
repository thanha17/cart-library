import React, { useState } from "react";
import styles from "./Cart.module.css";
import { CartItem } from "./CartItem";

export const Cart = ({ initialItems = [] }) => {
  const [items, setItems] = useState(initialItems);

  const handleUpdate = (id, quantity) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleRemove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Giỏ hàng</div>
      {items.map(item => (
        <CartItem
          key={item.id}
          {...item}
          onUpdate={handleUpdate}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
};