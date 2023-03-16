import React, { Component } from "react";
import SeatCheckedList from "./SeatCheckedList";
import "./contentRight.css";

export default class ContentRight extends Component {
   render() {
      return (
         <div className="content-right">
            <h2>DANH SÁCH GHẾ BẠN CHỌN</h2>
            <div>
               <div className="item-color">
                  <div className="box-color color--orange"></div>
                  <p>Ghế đã đặt</p>
               </div>
               <div className="item-color">
                  <div className="box-color color--green"></div>
                  <p>Ghế đang chọn</p>
               </div>
               <div className="item-color">
                  <div className="box-color color--white"></div>
                  <p>Ghế chưa đặt</p>
               </div>

               <SeatCheckedList />
            </div>
         </div>
      );
   }
}
