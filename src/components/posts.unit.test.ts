import { POSTS } from "../utils/createRandomPost";
import { Posts } from "./posts";

describe("Letter", () => {
  test("Posts method should return array", async () => {
    Posts(POSTS);
    expect(Posts.length).toBe(1);
  });

  test("Posts method should return comments html", async () => {
    const htmlPosts = Posts(POSTS);

    const mockPosts = POSTS.reduce((acc, curr) => {
      acc += `
      <div class="posts">
        <div class="postsBox">
          <div class="postsContent">
            <header>
              <div class="authorAndTime">
                <strong>${curr.title}</strong>
              </div>
            </header>
            <p>${curr.body}</p>
          </div>
        </div>
      </div>
    `;
      return acc;
    }, "");

    expect(htmlPosts).toBe(mockPosts);
  });

  test("Posts should return string with html tags", async () => {
    const htmlPosts = Posts(POSTS);
    expect(htmlPosts).toContain("div");
    expect(htmlPosts).toContain("header");
    expect(htmlPosts).toContain("strong");
    expect(htmlPosts).toContain("p");
  });
});
