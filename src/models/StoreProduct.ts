import { Product } from "./Product";
import { StoreProductPrice } from "./StoreProductPrice";

export class StoreProduct {
  uuid: string;
  count?: number;
  targetType: string;
  targetId: string;
  link: string;
  valid: boolean;
  productId: string;
}
