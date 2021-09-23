export interface OrderModel {
  totalPrice: number;
  paid: boolean;
  items:[];
  user: string;
  address1: string;
  notes: string;
}
