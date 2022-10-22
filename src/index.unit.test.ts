import { JSDOM } from "jsdom";
import * as fs from "fs";
import * as path from "path";

let dom;
let container;

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

beforeAll(() => {
  dom = new JSDOM(html, { runScripts: "dangerously" });
  container = dom.window.document.body;
});

describe("index.ts", () => {
  test("should be exist the tag html with the id posts ", async () => {
    expect(container.querySelector("#posts")).not.toBeNull();
  });

  test("should have script tag to import index.ts", async () => {
    expect(container.innerHTML).toContain(
      '<script type="module" src="./index.ts"></script>'
    );
  });
});
