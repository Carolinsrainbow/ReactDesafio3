import React, { useState } from "react";
import Producto from "../../components/producto/Producto";

const products = [
  { id: 1, name: "papaya", price: "100" },
  { id: 2, name: "palta", price: "50" },
];
const handlerOnAdd = (newProducto: any) => {
  setProductos([...productos, newProducto]);
};

const MiFeria = () => {
  const [productos, setProductos] = useState(products);
  return (
    <div className="container">
      <div className="row m-5">
        <div className="col-8">
          {productos.map((producto) => (
            <Producto
              id={producto.id}
              name={producto.name}
              price={producto.price}
            />
          ))}
        </div>
        <div className="col-4">
          <form>
            <input type="text"></input>
            <input type="number"></input>
            <input type="submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MiFeria;
