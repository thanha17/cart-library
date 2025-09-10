// src/components/Cart/CartItem.js
import React from "react";
import { Button, Input } from "../..";

export const CartItem = ({ id, name, price, quantity, onUpdate, onRemove }) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <div>
        <div>{name}</div>
        <div>${price}</div>
      </div>
      <div className="flex items-center">
        <Input
          type="number"
          value={quantity}
          onChange={(e) => onUpdate(id, Number(e.target.value))}
          className="w-16 mr-2"
        />
        <Button onClick={() => onRemove(id)} variant="secondary">Remove</Button>
      </div>
    </div>
  );
};
