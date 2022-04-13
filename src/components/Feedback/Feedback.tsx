// @format
import React, { useState } from "react";
import ThankYou from "./ThankYou/ThankYou";
import Rating from "./Rating/Rating";

interface FeedbackProps {}

const Feedback: React.FC<FeedbackProps> = () => {
  const [fbSubmitted, setFbSubmitted] = useState<number | null>(null);

  return (
    <div className="feedback">
      {fbSubmitted ? (
        <ThankYou fbSubmitted={fbSubmitted} />
      ) : (
        <Rating setFbSubmitted={setFbSubmitted} />
      )}
    </div>
  );
};

export default Feedback;
