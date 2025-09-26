import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  return <h2>Product Details for ID: {id}</h2>;
}
