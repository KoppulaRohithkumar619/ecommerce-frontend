import { Link } from "react-router-dom";

export default function Products() {
  const dummyProducts = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Headphones" },
  ];

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {dummyProducts.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
