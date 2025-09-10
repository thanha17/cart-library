// src/components/Cart/Cart.js
import React, { useState } from "react";
import { CartItem } from "./CartItem";
import { Button } from "../..";

export const Cart = ({ initialItems = [] }) => {
  const [items, setItems] = useState(initialItems);

  const handleUpdate = (id, quantity) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const handleRemove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      {items.map(item => (
        <CartItem
          key={item.id}
          {...item}
          onUpdate={handleUpdate}
          onRemove={handleRemove}
        />
      ))}
      <div className="mt-4">
        <Button onClick={() => alert("Checkout!")}>Checkout</Button>
      </div>
    </div>
  );
};
