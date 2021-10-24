import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div key={product.id} className="border rounded hover:shadow">
      <img src={process.env.PUBLIC_URL + '/img/' + product.image} alt={product.title} />
      <div className="p-3">
        <span className="text-xs text-primary">{product.brand}</span>
        <Link to={`/watch/product/${product.id}`}>
          <h2 className="hover:text-primary transition-colors">
            {product.title}
          </h2>
        </Link>

        <p>Rp {product.price}</p>
      </div>
    </div>
  );
}
