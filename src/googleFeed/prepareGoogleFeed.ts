import { Product } from "models/Product";
import { StoreProduct } from "models/StoreProduct";
import { StoreProductPrice } from "models/StoreProductPrice";
import { getCompleteProduct } from "../api/product";
const currency = "CZK";

type StoreProductFeed = {
  [k: string]: any;
}[];

export default (data: {
  products: Product[];
  storeProducts: StoreProduct[];
  storeProductPrices: StoreProductPrice[];
}): { custom_elements: StoreProductFeed }[] => {
  let list = [];

  data.storeProductPrices.forEach((priceProduct) => {
    const product = getCompleteProduct(
      data.products,
      data.storeProducts,
      priceProduct
    );

    if (product) {
      list.push({
        title: product.product.uuid,
        custom_elements: [
          { "g:id": product.product.uuid },
          { "g:title": product.product.name },
          { "g:description": product.product.description },
          { "g:link": product.storeProduct.link },
          { "g:image_link": product.product.main_image_url },
          { "g:availability": "in stock" },
          { "g:price": product.storeProductPrice.price + " " + currency },
          { "g:sale_price": "" },
        ],
      });
    }
  });

  return list;
};
