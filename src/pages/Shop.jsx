import products from "../data/Products";
import ProductCard from "../components/ProductCard";

export default function Shop() {

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-6 animate-fade-in">Shop Our Products</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={product.id}
            style={{ animationDelay: `${index * 100}ms` }}
            className="animate-fade-in"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
