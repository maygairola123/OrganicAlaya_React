// import React from "react";

// const HeroBanner = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src="/videos/farm-background.mp4" type="video/mp4" />
//         {/* Fallback for older browsers */}
//         Your browser does not support the video tag.
//       </video>

//       {/* Fallback Banner Image */}
//       <img
//         src="/banner.png"
//         alt="Organic Farm"
//         className="absolute top-0 left-0 w-full h-full object-cover z-0 hidden"
//         onError={(e) => {
//           e.target.style.display = "block";
//           e.target.previousSibling.style.display = "none";
//         }}
//       />

//       {/* Overlay Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 bg-black/50">
//         <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md">Welcome to OrganicAlaya</h1>
//         <p className="mt-4 text-lg md:text-2xl max-w-2xl drop-shadow-sm">
//           100% Fresh, Handpicked, and Delivered to Your Doorstep.
//         </p>
//         <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white text-lg transition">
//           Shop Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroBanner;
