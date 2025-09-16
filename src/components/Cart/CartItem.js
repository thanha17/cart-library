import React from "react";
import styles from "./CartItem.module.css";
import { Button } from "../Button";
import { Input } from "../Input";

export const CartItem = ({ id, name, price, quantity, onUpdate, onRemove }) => {
  return (
    <div className={styles.item}>
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>{price}₫</span>
      <div className={styles.actions}>
        <Input
          type="number"
          value={quantity}
          min={1}
          onChange={e => onUpdate(id, Number(e.target.value))}
          style={{ width: "60px" }}
        />
        <Button variant="secondary" onClick={() => onRemove(id)}>
          Xóa
        </Button>
      </div>
    </div>
  );
};