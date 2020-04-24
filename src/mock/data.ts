import { Product } from "models/Product";
import { StoreProduct } from "models/StoreProduct";
import { StoreProductPrice } from "models/StoreProductPrice";

const url = "https://game-engine-git-master.lopliok.now.sh/";

const products: Product[] = [
  {
    uuid: "brick1",
    name: "Brick 1",
    description: "Brick 1",
    main_image_url: url + "brick1/test.jps",
    ean: "5354250245345",
    external_id: "00-023234",
    valid: true,
    ts_vector: "FDS3423",
  },
  {
    uuid: "brick2",
    name: "Brick 2",
    description: "Brick 2",
    main_image_url: url + "brick2/test.jps",
    ean: "5354202245345",
    external_id: "00-023232",
    valid: true,
    ts_vector: "FDS3423",
  },
];

const storeProductPrices: StoreProductPrice[] = [
  {
    uuid: "price1",
    price: 2000,
    vat: 1000,
    discount: 100,
    currency_iso_id: "03239",
    valid: true,
    storeProductId: "stbrick1",
  },
  {
    uuid: "price2",
    price: 3000,
    vat: 500,
    discount: 50,
    currency_iso_id: "03232",
    valid: true,
    storeProductId: "stbrick2",
  },
  {
    uuid: "price1",
    price: 4000,
    vat: 200,
    discount: 10,
    currency_iso_id: "03231",
    valid: true,
    storeProductId: "stbrick2",
  },
];

const storeProducts: StoreProduct[] = [
  {
    uuid: "stbrick1",
    count: 1,
    targetType: "metal",
    targetId: "43232",
    link: url + "stbrick1",
    valid: true,
    productId: "brick1",
  },
  {
    uuid: "stbrick2",
    count: 1,
    targetType: "metal",
    targetId: "43232",
    link: url + "stbrick2",
    valid: true,
    productId: "brick2",
  },
  {
    uuid: "stbrick3",
    count: 1,
    targetType: "metal",
    targetId: "43232",
    link: url + "stbrick3",
    valid: true,
    productId: "brick1",
  },
];

export const mockData = {
  products,
  storeProducts,
  storeProductPrices,
};
