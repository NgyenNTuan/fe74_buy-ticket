import { SELECT_SEAT, DELETE_SEAT, PAYMENT_SEAT } from "./type";

export const actSelectSeat = (seatItem) => {
   return {
      type: SELECT_SEAT,
      payload: seatItem,
   };
};

export const actDeleteSeat = (numSeat) => {
   return {
      type: DELETE_SEAT,
      payload: numSeat,
   };
};

export const actPaymentSeat = (seatChecked) => {
   return {
      type: PAYMENT_SEAT,
      payload: seatChecked,
   };
};
