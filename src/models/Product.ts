export class Product {
  uuid: string;
  name: string;
  description?: string;
  main_image_url?: string;
  ean?: string;
  technical_description?: string;
  external_id: string;
  unit?: string;
  valid: boolean;
  ts_vector: string;
}
