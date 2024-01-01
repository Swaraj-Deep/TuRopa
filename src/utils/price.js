export const getDiscountedPrice = (discountPercentage, price) => {
  const discount = (discountPercentage / 100) * price;
  const discountedPrice =
    Math.round((price - discount + Number.EPSILON) * 100) / 100;
  return discountedPrice;
};
