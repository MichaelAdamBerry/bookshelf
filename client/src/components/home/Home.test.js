import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import HomeSearchView from "./HomeSearchView";
import { Simulate } from "react-dom/test-utils";
import Button from "../Button";

afterEach(cleanup);

it('calls "onClick" prop on button click', () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick} />);
  fireEvent.click(getByText(/Find Books/i));
  expect(onClick).toHaveBeenCalled();
});

test("form renders is submitted with search input value", () => {
  const data = {
    query: "testtest",
    actions: { submitQuery: jest.fn(), typeLetter: jest.fn() }
  };

  const { container, getByText, getByLabelText } = render(
    <HomeSearchView {...data} />
  );
  const searchInputNode = getByLabelText("Title:");
  const formNode = container.querySelector("form");
  const submitButtonNode = getByText("Find Books");
  searchInputNode.value = "hello input";
  Simulate.submit(formNode);

  expect(data.actions.submitQuery).toBeCalledTimes(1);
  expect(submitButtonNode.type).toBe("submit");
  expect(searchInputNode.value).toBe("hello input");
});
