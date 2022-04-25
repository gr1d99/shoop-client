export interface IImage {
  images:
    | {
        id: number;
        url: string;
        name?: string;
        alt?: string;
      }[]
    | [];
}

interface IProductMeta {
  meta: any;
}

export interface IProductAttributes extends IImage {
  slug: string;
  name: string;
  description: string;
  brand_id?: number;
  meta?: IProductMeta;
}

export interface IProduct {
  id: string | number;
  attributes: IProductAttributes;
}

export interface IAdminMenuItem {
  label: string;
  key: React.Key;
  icon?: React.ReactNode;
  children?: { label: string; key: string; icon?: React.ReactNode }[];
}
