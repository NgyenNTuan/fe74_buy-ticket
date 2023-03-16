import React, { Component } from "react";
import { actDeleteSeat } from "./duck/action";
import { connect } from "react-redux";

class SeatCheckedItem extends Component {
   render() {
      const { item } = this.props;
      return (
         <tr>
            <td className="text-warning">{item.soGhe}</td>
            <td className="text-warning">
               {new Intl.NumberFormat().format(item.gia)}
            </td>
            <td>
               <button
                  className="btn btn-light btn-delete"
                  onClick={() => {
                     this.props.onDeleteSeat(item.soGhe);
                  }}
               >
                  X
               </button>
            </td>
         </tr>
      );
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onDeleteSeat: (numSeat) => {
         dispatch(actDeleteSeat(numSeat));
      },
   };
};

export default connect(null, mapDispatchToProps)(SeatCheckedItem);
