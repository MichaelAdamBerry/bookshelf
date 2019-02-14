import React from "react";
import renderer from "react-test-renderer";
import BookFlipper from "./BookFlipper";
import Volume from "./Volume";
import VolumeCardView from "./VolumeCardView";

const description =
  "There is a road no simple highway and if you go then you go alone";
const imageLinks = "https://i.ytimg.com/vi/671AgW9xSiA/hqdefault.jpg//";
const previewLinks = "https://google.com";

test("BookFlipper renders correct view when clicked", () => {
  const component = renderer.create(
    <BookFlipper
      description={description}
      imageLinks={imageLinks}
      previewLink={previewLinks}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  //flip card manually
  component.getInstance().handleClick();
  //rerender
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Volume Component Matches Snapshot", () => {
  const component = renderer.create(<Volume />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("VolumeCardView matches snapshot", () => {
  const component = renderer.create(<VolumeCardView />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
