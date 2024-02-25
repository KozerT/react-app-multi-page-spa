import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "product-1" },
  { id: "p2", title: "product-2" },
  { id: "p3", title: "product-3" },
];

const Product = () => {
  return (
    <>
      <h2>The Products Page</h2>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title} </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Product;
