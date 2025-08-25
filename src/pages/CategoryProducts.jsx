import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from '../data/Products';

export default function CategoryProducts() {
    const location = useLocation()
    console.log(location)
    const {id:categoryId,categoryName}= location.state.categoryData

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-6 animate-fade-in">Shop Our {categoryName} Products</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
{products
  .filter((product) => product.categoryId === categoryId)
  .map((product, index) => (
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
