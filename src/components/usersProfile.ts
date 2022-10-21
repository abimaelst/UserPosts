import {Letter} from "../Letter";
import {User, UserData} from "../models";
import {Posts} from "./posts";

const api = new Letter('https://jsonplaceholder.typicode.com/')

// @ts-ignore
async function getData(): Promise<UserData[]>{
    const { data }: {data: UserData[]} = await api.get()
    return data
}

export const UsersProfile = async() => (await getData()).reduce((acc, author) => {
    acc += ` <article class="post">
      <header>
        <span class="author">
                 <img
      src='https://source.unsplash.com/420x200/?person'
      alt="avatar image"
      class="avatarWithBorder"
    />
 <div class="authorInfo">
            <strong>${author.username}</strong>
            <a href="mailto:${author.email}">${author.email}</a>
            <a href="tel:${author.phone}">${author.phone}</a>
            <a href="http://www.${author.website}" target="_blank">${author.website}</a>
        </div>
      </header>

      <div class="content">
         <title>Posts</title>
        ${Posts(author.posts)}
      </div>
    </article>`
    return acc
}, '')