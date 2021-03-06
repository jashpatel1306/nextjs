
const shopCategoriesInitialState = [
  {
    name: "T-shirts",
    image: "t-shirts-img.jpg",
  },
  {
    name: "Wallet",
    image: "wallet-img.jpg",
  },
  {
    name: "Shoes",
    image: "shirt-img.jpg",
  },
  {
    name: "Shirts",
    image: "shirt-img.jpg",
  },
  {
    name: "Bags",
    image: "women-bag-img.jpg",
  },
  {
    name: "Women Shows",
    image: "women-shoes-img.jpg",
  },
];

function ShopCategoriesReducer(
  state = shopCategoriesInitialState,
  action = {}
) {
  switch (action.type) {
    default:
      return state;
  }
}

export default ShopCategoriesReducer;