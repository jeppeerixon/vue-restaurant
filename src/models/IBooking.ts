export interface IBooking {
    _id: string;
    id: string;
    restaurantId: string;
    date: string;
    time: string;
    numberOfGuests: number;
    customerId: string;
    editMode: boolean;
  }