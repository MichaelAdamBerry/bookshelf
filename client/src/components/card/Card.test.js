import React from "react";
import renderer from "react-test-renderer";
import Card from "./Card";
import Stars from "./Stars";

const volume = {
  id: 1234,
  volumeInfo: {
    title: "a good title",
    authors: ["a good writer", "and another", "one more"],
    averageRating: 4
  },
  accessInfo: {
    viewability: "ALL_PAGES"
  }
};

test("Card matches snapshot", () => {
  const component = renderer.create(<Card volume={volume} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Stars matches Snapshot", () => {
  const component = renderer.create(<Stars averageRating={3.5} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
