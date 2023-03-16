import data from "./../seatsList.json";
import { SELECT_SEAT, DELETE_SEAT, PAYMENT_SEAT } from "./type";

const initialState = {
   seatList: data,
   seatChecked: [],
};

const userReducer = (state = initialState, action) => {
   const deepCopyFunction = (inObject) => {
      let outObject, value, key;

      if (typeof inObject !== "object" || inObject === null) {
         return inObject; // Return the value if inObject is not an object
      }

      // Create an array or object to hold the values
      outObject = Array.isArray(inObject) ? [] : {};

      for (key in inObject) {
         value = inObject[key];

         // Recursively (deep) copy for nested objects, including arrays
         outObject[key] = deepCopyFunction(value);
      }

      return outObject;
   };

   switch (action.type) {
      case SELECT_SEAT: {
         const seatChecked = deepCopyFunction(state.seatChecked);

         const foundSeat = seatChecked.find((item) => {
            return item.soGhe === action.payload.soGhe;
         });

         if (!foundSeat && !action.payload.daDat) {
            seatChecked.push(action.payload);
            state.seatChecked = seatChecked;
         }

         return { ...state };
      }

      case DELETE_SEAT: {
         const seatChecked = deepCopyFunction(state.seatChecked);

         const foundIndex = seatChecked.findIndex((item) => {
            return item.soGhe === action.payload;
         });

         if (foundIndex !== -1) {
            seatChecked.splice(foundIndex, 1);
         }

         state.seatChecked = seatChecked;

         return { ...state };
      }

      case PAYMENT_SEAT: {
         let seatChecked = deepCopyFunction(state.seatChecked);
         const seatList = deepCopyFunction(state.seatList);

         seatChecked.forEach((item) => {
            seatList.forEach((row) => {
               if (row.hang !== "") {
                  row.danhSachGhe.forEach((seat) => {
                     if (seat.soGhe === item.soGhe) {
                        seat.daDat = true;
                     }
                  });
               }
            });
         });

         seatChecked = [];

         // update state
         state.seatChecked = seatChecked;
         state.seatList = seatList;

         return { ...state };
      }

      default:
         return { ...state };
   }
};

export default userReducer;
