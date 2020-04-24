import { Product } from "models/Product";
import { StoreProduct } from "models/StoreProduct";
import { StoreProductPrice } from "models/StoreProductPrice";

export const getCompleteProduct = (
  products: Product[],
  storeProducts: StoreProduct[],
  storeProductPrice: StoreProductPrice
) => {
  let productId;
  let storeProduct;
  let product;

  if (storeProductPrice) {
    productId = storeProductPrice.storeProductId;

    storeProduct = storeProducts.find((it) => it.uuid === productId);
    if (storeProduct) {
      product = products.find((it) => it.uuid === storeProduct.productId);
    }
  }

  return product && storeProduct && storeProductPrice
    ? { product, storeProduct, storeProductPrice }
    : undefined;
};
