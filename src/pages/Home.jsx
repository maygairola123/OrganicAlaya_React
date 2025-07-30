import TestimonialSection from "../components/TestimonialSection";
import Banner from '../components/Banner';
import { products } from '../data/Products'; // Adjust path if needed
import ProductCard from '../components/ProductCard'; // You already use this





export default function Home() {
  const newLaunches = products.filter(product => product.isNewArrival);

  return (
    
    <>
  
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-100 via-white to-green-50 py-20 px-4 md:px-10 animate-fade-in overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700 leading-tight tracking-tight">
              Agricultural & Farming Fresh Products
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Welcome to <span className="font-semibold">OrganicAlaya</span> — your trusted source for healthy, farm-fresh produce delivered to your doorstep.
            </p>
           <a
  href="/shop"
  className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-lg shadow hover:bg-green-700 transition transform hover:scale-105 animate-fade-in"
>
  Shop Now
</a>

          </div>

          {/* Hero Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://image.shutterstock.com/image-photo/modern-tractor-machinery-plowing-agricultural-260nw-2449909949.jpg"
              alt="Hero"
              className="w-full max-w-md rounded-xl shadow-xl object-cover aspect-video"
            />
          </div>
        </div>

        {/* Optional Decorative Element */}
        <div className="absolute top-0 right-0 opacity-10 hidden md:block">
          <img
            src="https://www.transparenttextures.com/patterns/asfalt-light.png"
            alt="pattern"
            className="w-48"
          />
        </div>
      </section>

      {/* Category Navigation Section */}
<section className="bg-white py-10 px-4 border-t border-b">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6 text-center text-sm text-brown-800">
      {[
        { icon: "🏷️", label: "Combos & Deals" },
        { icon: "🌾", label: "Flours & Suji" },
        { icon: "🍚", label: "Rice & Rice Products" },
        { icon: "🥣", label: "Pulses & Dal" },
        { icon: "🧴", label: "Oil & Ghee" },
        { icon: "🧂", label: "Salts, Sugar & Jaggery" },
        { icon: "🧄", label: "Spices & Masalas" },
        { icon: "🥜", label: "Dry Fruits & Nuts" },
        { icon: "🩺", label: "Health Foods" },
  
      ].map(({ icon, label }) => (
        <div key={label} className="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform">
          <div className="text-3xl">{icon}</div>
          <span className="text-xs font-medium text-center">{label}</span>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-10">
            Why Choose OrganicAlaya?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🚚', title: 'Fast Delivery' },
              { icon: '🥬', title: 'Farm Fresh' },
              { icon: '🔁', title: 'Easy Returns' },
              { icon: '🌱', title: 'Sustainably Grown' },
            ].map(({ icon, title }, index) => (
              <div
                key={title}
                     style={{ animationDelay: `${index * 150}ms` }}
                     className="bg-green-50 rounded-lg p-6 shadow hover:shadow-md transition text-center animate-fade-in"
              >
                <div className="text-4xl mb-2">{icon}</div>
                <h3 className="font-semibold text-lg text-green-800">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
        <Banner />
{/* Newly Launched Products Section */}
<section className="bg-green-50 py-16 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
      🆕 Newly Launched Products
    </h2>

    {newLaunches.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {newLaunches.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-500">No new products available right now.</p>
    )}
  </div>
</section>

      <TestimonialSection />
    </>
  );
}
