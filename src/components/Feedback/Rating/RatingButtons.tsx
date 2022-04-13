import React, { Dispatch, SetStateAction } from "react";

interface RatingButtonsProps {
  numButtons: number;
  setSelectedFeedback: Dispatch<SetStateAction<number | null>>;
  curSelectedFeedback: number | null;
}

const RatingButtons: React.FC<RatingButtonsProps> = ({
  numButtons,
  setSelectedFeedback,
  curSelectedFeedback,
}) => {
  const handleFeedbackClick = (i: number): void => {
    console.log(`selected ${i}`);
    setSelectedFeedback(i);
  };
  // todo- make rating button "disabled" if it's selected
  return (
    <ul className="rating-buttons">
      {Array.from({ length: numButtons }, (_, i) => i + 1).map((i) => {
        return (
          <li
            key={i}
            className={
              curSelectedFeedback === i
                ? "rating-button selected-rating"
                : "rating-button"
            }
            onClick={() => handleFeedbackClick(i)}
          >
            {i}
          </li>
        );
      })}
    </ul>
  );
};

export default RatingButtons;
