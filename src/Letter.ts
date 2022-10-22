import axios, { AxiosError, AxiosInstance } from "axios";
import { Post, User, UserData } from "./models";
import { handlerErrors } from "./utils/HandlerErrors";

export class Letter {
  clientHTTP: AxiosInstance;
  baseURL: string;
  UsersData: UserData[];
  constructor(baseURL) {
    this.clientHTTP = axios.create({
      baseURL,
    });
  }

  async get() {
    try {
      const { data: UsersData }: { data: User[] } = await this.clientHTTP.get(
        "users"
      );
      const { data: PostsData }: { data: Post[] } = await this.clientHTTP.get(
        "posts"
      );

      const addPostsInUsers = UsersData.map((user): UserData => {
        return {
          ...user,
          phone: user.phone.replace(/ +.*$/, ""),
          company: user.company.name,
          address: `${user.address.street}, ${user.address.suite}, ${user.address.zipcode}, ${user.address.city}`,
          posts: PostsData.filter((post) => post.userId === user.id).map(
            (post) => {
              return {
                id: post.id,
                title: post.title,
                body: post.body,
              };
            }
          ),
        };
      });

      return {
        data: addPostsInUsers,
      };
    } catch (e: any) {
      window.alert(handlerErrors(e?.response?.status));
      return {
        data: [],
        error: handlerErrors(e?.response?.status),
      };
    }
  }
}
