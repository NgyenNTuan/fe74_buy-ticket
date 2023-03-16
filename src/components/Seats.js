import React, { Component } from "react";
import SeatItem from "./SeatItem";
import { connect } from "react-redux";

class Seats extends Component {
   renderSeats = () => {
      const { seatList } = this.props;
      const { seatChecked } = this.props;

      return (
         <tbody>
            {seatList.map((seat) => {
               if (seat.hang === "") {
                  return <SeatItem key="0" seat={seat} />;
               } else {
                  if (seatChecked) {
                     return (
                        <SeatItem
                           key={seat.hang}
                           seat={seat}
                           seatChecked={seatChecked}
                        />
                     );
                  }
                  return <SeatItem key={seat.hang} seat={seat} />;
               }
            })}
         </tbody>
      );
   };

   render() {
      return (
         <div>
            <table className="table">{this.renderSeats()}</table>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      seatList: state.userReducer.seatList,
      seatChecked: state.userReducer.seatChecked,
   };
};

export default connect(mapStateToProps, null)(Seats);
