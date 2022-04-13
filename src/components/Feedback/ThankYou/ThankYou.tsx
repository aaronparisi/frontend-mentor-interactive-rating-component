// @format
import React from "react";
import ThankYouIcon from "../../../images/illustration-thank-you.svg";

interface ThankYouProps {
  fbSubmitted: number | null;
}

const ThankYou: React.FC<ThankYouProps> = ({ fbSubmitted }) => {
  return (
    <div>
      <img src={ThankYouIcon} alt="Thank you icon" />
      Thank You! You selected {fbSubmitted}!
    </div>
  );
};

export default ThankYou;
