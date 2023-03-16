import React, { Component } from "react";
import Seats from "./Seats";
import "./contentLeft.css";

export default class ContentLeft extends Component {
   render() {
      return (
         <div className="content-left">
            <h1>Đặt vé xem phim Cyberlearn.vn</h1>
            <p className="screen">Màn hình</p>
            <Seats />
         </div>
      );
   }
}
