import { Letter } from "./Letter";

describe("Letter", () => {
  test("GET method should return array", async () => {
    const letter = new Letter("https://jsonplaceholder.typicode.com/");
    const posts = await letter.get();
    expect(posts.data.length).toBeTruthy();
  });
});
