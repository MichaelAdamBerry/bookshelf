import React from "react";

const Button = ({ innerText = "Find Books", onClick }) => {
  return (
    <button data-testid="findBooksBtn" type="submit" onClick={onClick}>
      {innerText}
    </button>
  );
};

export default Button;
