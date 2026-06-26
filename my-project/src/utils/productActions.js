export const handleWishlist = (
  product,
  toggleWishlist,
  navigate,
  user
) => {
  if (!user) {
    navigate("/login", {
      state: {
        action: "wishlist",
        product,
        from: "/wishlist",
      },
    });
    return;
  }

  toggleWishlist(product);
  navigate("/wishlist");
};

export const handleCart = (
  product,
  addToCart,
  navigate,
  user
) => {
  if (!user) {
    navigate("/login", {
      state: {
        action: "cart",
        product,
        from: "/cart",
      },
    });
    return;
  }

  addToCart(product);
  navigate("/cart");
};