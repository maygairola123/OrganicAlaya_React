export const products = [
  {
    id: 1,
    name: "Organic Apples",
    categoryId: 7,
    image: "https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg",
    pricePerUnit:[ 
    {quantity :"250g",
     price: 90,
     discount :10,
     mrp: 100},
    {quantity :"500g",
     price: 160,
     discount :20,
     mrp: 200},
    {quantity :"1kg",
     price: 280,
     discount :30,
     mrp: 400},
    {quantity :"2kg",
     price: 480,
     discount :40,
     mrp: 800},
    ],
    frontPrice:{
      quantity :"2kg",
     price: 480,
     discount :40,
     mrp: 800
    },frequentlyBought:true
  },
  {
    id: 2,
    name: "Organic Kashmiri Apple",
    categoryId: 7,
    image: "https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg",
    pricePerUnit:[ 
    {quantity :"250g",
     price: 90,
     discount :10,
     mrp: 100},
    {quantity :"500g",
     price: 160,
     discount :20,
     mrp: 200},
    {quantity :"1kg",
     price: 280,
     discount :30,
     mrp: 400},
    {quantity :"2kg",
     price: 480,
     discount :40,
     mrp: 800},
    ],
    frontPrice:{
      quantity :"2kg",
     price: 480,
     discount :40,
     mrp: 800
    }
  },
  // {
  //   id: 2,
  //   name: "Fresh Bananas",
  //   image: "https://www.shutterstock.com/image-photo/bunch-bananas-isolated-on-white-600nw-1722111529.jpg",
  //   price: 80,
  //     pricePerUnit: {
  //   "250g": 50,
  //   "500g": 90,
  //   "1kg": 170
  // },

  //   rating: 4, // out of 5
  //   categoryId: 7,
  //   discount: 20, // optional
  //   isBestSeller: true, // 👈 Add this field
  // },
  // {
  //   id: 3,
  //   name: "organic Millets",
  //   image: "https://vibrantliving.in/cdn/shop/files/FoxtailMillet.png?v=1731059360",
  //   price: 160,
  //     pricePerUnit: {
  //   "250g": 50,
  //   "500g": 90,
  //   "1kg": 170
  // },

  //   categoryId: 1,
  //   rating: 4, // out of 5
  //   discount: 20, // optional
  //   nutrition: { Calories: "350 kcal", Protein: "25g" },
  // },

  // {
  //   id: 4,
  //   name: "Organic Red Rice",
  //   image: "https://m.media-amazon.com/images/I/61m-Y7IHJ1L._UF1000,1000_QL80_.jpg",
  //   price: 170,
  //        pricePerUnit: {
  //   "250g": 50,
  //   "500g": 90,
  //   "1kg": 170
  // },
  //   rating: 4, // out of 5
  //   discount: 20, // optional
  //   categoryId: 2,
  //   isBestSeller: true, // 👈 Add this field
  //   nutrition: { Calories: "350 kcal", Protein: "25g" },
  //   description: "Red rice is typically eaten unpolished, meaning the bran layer is still intact. This layer is rich in fiber, vitamins, and minerals, making red rice more nutritious than polished white rice",
  //   related: [
  //     {
  //       id: 3,
  //       name: "Organic Millets",
  //       image: "/images/walnuts.jpg",
  //       originalPrice: 300,
  //       discountedPrice: 285,
  //       defaultSize: "100 g",
  //     },
  //     {
  //       id: 1,
  //       name: "Organic Apples",
  //       image: "/images/cashews.jpg",
  //       originalPrice: 220,
  //       discountedPrice: 209,
  //       defaultSize: "100 g",
  //     },
  //   ]

  // },
  // {
  //   id: 5,
  //   name: "Fresh Rajma",
  //   image: "https://media.istockphoto.com/id/1305426147/photo/close-up-of-organic-rajma-or-red-kidney-beans-dal-on-a-ceramic-white-bowl.jpg?s=612x612&w=0&k=20&c=FV56HcD42ixeWb6IwEqCZPAWGcp_mkETr_h17Toe8Dw=",
  //   price: 170,
  //        pricePerUnit: {
  //   "250g": 50,
  //   "500g": 90,
  //   "1kg": 170
  // },
  //   rating: 4, // out of 5
  //   categoryId: 3,
  //   discount: 20, // optional
  //   related: [
  //     {
  //       id: 3,
  //       name: "Organic Millets",
  //       image: "/images/walnuts.jpg",
  //       originalPrice: 300,
  //       discountedPrice: 285,
  //       defaultSize: "100 g",
  //     },
  //     {
  //       id: 1,
  //       name: "Organic Apples",
  //       image: "/images/cashews.jpg",
  //       originalPrice: 220,
  //       discountedPrice: 209,
  //       defaultSize: "100 g",
  //     },
  //   ]

  // },
  // {
  //   id: 6,
  //   name: "organic Spices",
  //   image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpY2VzfGVufDB8fDB8fHww",
  //   price: 260,
  //        pricePerUnit: {
  //   "250g": 50,
  //   "500g": 90,
  //   "1kg": 260
  // },
  //   rating: 4, // out of 5
  //   categoryId: 4,
  //   discount: 20, // optional
  //   isNewArrival: true // 👈 Add this!

  // },
  // {
  //   id: 7,
  //   name: "organic Salt",
  //   image: "https://images.unsplash.com/photo-1649509857227-f63b234545f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1peCUyMGhlcmIlMjBzYWx0fGVufDB8fDB8fHww",
  //   price: 160,
  //        pricePerUnit: {
  //   "250g": 50,
  //   "500g": 90,
  //   "1kg": 160
  // },
  //   rating: 4, // out of 5
  //   categoryId: 6,
  //   discount: 20, // optional
  // },
  // {
  //   id: 8,
  //   name: "organic Kulthi Dal ",
  //   image: "https://media.istockphoto.com/id/2220502298/photo/horse-gram-in-white-spoon-isolated-in-white-background-kulthi-dal-or-horse-gram-is-widely.webp?a=1&b=1&s=612x612&w=0&k=20&c=BGMaKNxIF8fXuqK_rNq0-WEknm74h9v3AeQ5uzBj490=",
  //   price: 360,
  //        pricePerUnit: {
  //   "250g": 50,
  //   "500g": 90,
  //   "1kg": 360
  // },
  //   rating: 4, // out of 5
  //   categoryId: 3,
  //   discount: 20, // optional
  //   related: [
  //     {
  //       id: 3,
  //       name: "Organic Millets",
  //       image: "/images/walnuts.jpg",
  //       originalPrice: 300,
  //       discountedPrice: 285,
  //       defaultSize: "100 g",
  //     },
  //     {
  //       id: 1,
  //       name: "Organic Apples",
  //       image: "/images/cashews.jpg",
  //       originalPrice: 220,
  //       discountedPrice: 209,
  //       defaultSize: "100 g",
  //     },
  //   ]
  // },

];

export default products;
