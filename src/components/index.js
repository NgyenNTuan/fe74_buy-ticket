import React, { Component } from "react";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";
import "./bookingTicket.css";

export default class Home extends Component {
   render() {
      return (
         <div className="booking-ticket">
            <div className="container content--body">
               <div className="row justify-content-between">
                  <div className="col-7">
                     <ContentLeft />
                  </div>
                  <div className="col-4">
                     <ContentRight />
                  </div>
               </div>
            </div>
            <div className="cover"></div>
         </div>
      );
   }
}
