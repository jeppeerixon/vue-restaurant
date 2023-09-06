import type { ICustomer } from "./ICustomer";

export interface INewBooking {
    restaurantId: string;
    date: string;
    time: string;
    numberOfGuests: number;
    customer: ICustomer
  }