import { Letter } from "./Letter";
import { MESSAGE_ERROR } from "./models";

beforeAll(() => {
  console.error = jest.fn();
  console.error("you cant see me");
});

describe("Letter", () => {
  test("GET method should return array", async () => {
    const letter = new Letter("https://jsonplaceholder.typicode.com/");
    const posts = await letter.get();
    expect(posts.data.length).toBeTruthy();
  });

  test("GET method should return false when some error returns", async () => {
    const letter = new Letter("https://jsonplaceholder.typicode.om/");
    const posts = await letter.get();
    expect(posts.data.length).toBeFalsy();
  });

  test("GET method should return false when some error returns", async () => {
    const letter = new Letter("https://jsonplaceholder.typicode.om/");
    const data = await letter.get();
    expect(data.error).toBe(MESSAGE_ERROR.general);
  });

  test("GET method should return message error unavailable when error 400 happen", async () => {
    const letter = new Letter("https://jsonplaceholder.typicode.com/postt");
    const data = await letter.get();
    expect(data.error).toBe(MESSAGE_ERROR.unavailable);
  });

  test("GET should dispatch 'window.alert' when get methods return an error", async () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    const letter = new Letter("https://jsonplaceholder.typicode.com/postt");
    await letter.get();
    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});
