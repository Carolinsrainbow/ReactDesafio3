import React, { useState } from "react";

const products = [
  { id: 1, name: "papaya", price: 100 },
  { id: 2, name: "pera", price: 50 },
];

const MiFeria = () => {
  const [productos, setProductos] = useState(products);
  return (
    <div className="container">
      {
        <ul>
          {productos.map((producto) => {
            <li key={producto.id}>{producto.name}</li>;
          })}
        </ul>
      }
    </div>
  );
};

export default MiFeria;
