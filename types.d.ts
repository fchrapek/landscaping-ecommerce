export interface IProduct {
  id: number;
  name: string;
  photo: any;

}

export interface IProductProp {
  product: IProduct;
}

export interface IProducts {
  allProducts: IProduct[];
  className?: string,
}
