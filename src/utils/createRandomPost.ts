import { faker } from "@faker-js/faker";
import { LocalPost } from "../models";

export const POSTS: LocalPost[] = [];

export const createRandomUser = (): LocalPost => {
  return {
    id: faker.datatype.number(),
    title: faker.lorem.paragraph(),
    body: faker.lorem.word({ length: 3 }),
  };
};

Array.from({ length: 5 }).forEach(() => {
  POSTS.push(createRandomUser());
});
