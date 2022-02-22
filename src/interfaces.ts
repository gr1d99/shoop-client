interface IProductMeta {
  meta: any;
}

interface IProductAttributes {
  slug: string;
  name: string;
  price: number;
  images: string;
  description: string;
  brand_id: number;
  meta?: IProductMeta;
}

export interface IProduct {
  id: number;
  attributes: IProductAttributes;
}
