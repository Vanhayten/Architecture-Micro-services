export interface ProductItem {
  id: number;
  productId: number;
  price: number;
  quantity: number;
}

export interface Bill {
  id: number;
  billingDate: Date;
  customerId: number;
  productItems: ProductItem[];
}
