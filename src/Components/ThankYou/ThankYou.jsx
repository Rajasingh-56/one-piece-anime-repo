import React from "react";
import { FcApproval } from "react-icons/fc";

import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="container">
      <div className="sub-container">
        <div className="thankyou-info">
          <span>
            <FcApproval />
          </span>
          <h1 className="greetings">
            Thank you for <br />
            Participating!
          </h1>
          <img src="./Assets/luffy-group.png" alt="" />
          <p>
            If you are a Lucky winner, you <br />
            will recieve SMS Communitication <br />
            with a unique reward code & a staw hat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
