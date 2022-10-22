import { UsersProfile } from "./usersProfile";

describe("UsersProfile", () => {
  test("usersProfile method should return array", async () => {
    const usersProfile = await UsersProfile();
    expect(usersProfile).toBeTruthy();
  });

  test("usersProfile method should return string with html tags", async () => {
    const usersProfile = await UsersProfile();
    expect(usersProfile).toContain("img");
    expect(usersProfile).toContain("article");
    expect(usersProfile).toContain("header");
    expect(usersProfile).toContain("span");
    expect(usersProfile).toContain("strong");
    expect(usersProfile).toContain("span");
    expect(usersProfile).toContain("title");
  });
});
