export interface DataItem {
  customer_name: string;
  customer_email: string;
  country: string;
  gender: Gender;
  age: number;
  net_worth: number;
  annual_salary: number;
  credit_card_debt: number;
  car_purchase_amount: number;
}

export enum Gender {
  female = 0,
  male = 1
}