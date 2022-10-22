/* istanbul ignore file */

export interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface Address {
  city: string;
  geo: { lat: number; lng: number };
  street: string;
  suite: string;
  zipcode: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface LocalPost {
  id: number;
  title: string;
  body: string;
}

export type newUser = Omit<User, "company" | "address">;

export interface UserData extends newUser {
  company: string;
  address: string;
  posts: LocalPost[];
}

export enum MESSAGE_ERROR {
  "unavailable" = "We can not respond this request, please try again.",
  "notFound" = "The server not response, please try again.",
  "general" = "The server or application has some issues, please try again later.",
}
