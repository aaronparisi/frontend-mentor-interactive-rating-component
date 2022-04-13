// @format
import React, { Dispatch, SetStateAction, useState } from "react";
import RatingButtons from "./RatingButtons";
import Star from "../../../images/icon-star.svg";

interface RatingProps {
  setFbSubmitted: Dispatch<SetStateAction<number | null>>;
}

const Rating: React.FC<RatingProps> = ({ setFbSubmitted }) => {
  const [selectedFeedback, setSelectedFeedback] = useState<number | null>(null);

  return (
    <div className="rating">
      <div className="star-icon">
        <img src={Star} alt="icon of a star" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <RatingButtons
        numButtons={7}
        setSelectedFeedback={setSelectedFeedback}
        curSelectedFeedback={selectedFeedback}
      />

      <button
        className="feedback-submit"
        onClick={() => setFbSubmitted(selectedFeedback)}
      >
        Submit!
      </button>
    </div>
  );
};

export default Rating;
