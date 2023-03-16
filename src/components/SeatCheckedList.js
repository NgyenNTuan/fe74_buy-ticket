import React, { Component } from "react";
import SeatCheckedItem from "./SeatCheckedItem";
import { actPaymentSeat } from "./duck/action";
import { connect } from "react-redux";

class SeatCheckedList extends Component {
   renderChecked = () => {
      const { seatChecked } = this.props;
      return seatChecked.map((item) => {
         return <SeatCheckedItem key={item.soGhe} item={item} />;
      });
   };

   totalPrice = () => {
      const { seatChecked } = this.props;
      return seatChecked.reduce((acc, item) => {
         return (acc += item.gia);
      }, 0);
   };

   render() {
      return (
         <div>
            <table className="table table-bordered">
               <thead>
                  <tr>
                     <th className="text-white">Số ghế</th>
                     <th className="text-white">Giá</th>
                     <th className="text-white">Hủy</th>
                  </tr>
               </thead>
               <tbody>
                  {this.renderChecked()}
                  <tr>
                     <td className="text-white">Tổng tiền</td>
                     <td className="text-warning">
                        {new Intl.NumberFormat().format(this.totalPrice())}
                     </td>
                     <td>
                        <button
                           className="btn btn-success"
                           onClick={() => {
                              this.props.onPayment(this.props.seatChecked);
                           }}
                        >
                           Thanh toán
                        </button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      seatChecked: state.userReducer.seatChecked,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onPayment: (seatChecked) => {
         dispatch(actPaymentSeat(seatChecked));
      },
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatCheckedList);
