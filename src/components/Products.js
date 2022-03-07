import Product from "./Product";
import { useState, useEffect } from "react";
import productList from "../ProductList";

const Products = () => {
  // const myproducts = products

  //   const [products, setProducts] = useState([]);
  //   useEffect(() => {
  //     fetch("/api/products")
  //       .then((response) => response.json())
  //       .then((pd) => {
  //         setProducts(productList);
  //       });
  //   }, []);

  console.log("ProductList== ", productList);

  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-24">
        {productList.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
