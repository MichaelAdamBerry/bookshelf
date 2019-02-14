import { getSrc, handleBadSrc } from "./CoverImg";

test("getSrc returns the correct string", () => {
  const imgObj = {
    thumb: "http://image/1.png",
    mid: "https://image/2.png",
    max: "http://image/3.png"
  };

  const thumb = getSrc(imgObj, false);
  const max = getSrc(imgObj, true);
  expect(thumb.key).toBe("http://image/1.png");
  expect(max.key).toBe("http://image/3.png");
});

test("handleBadSrc converts http to https", () => {
  const insecureImg = "http://img.png";

  const secure = "https://img.png";

  expect(handleBadSrc(insecureImg)).toBe("https://img.png");
  expect(handleBadSrc(secure)).toBe("https://img.png");
});
