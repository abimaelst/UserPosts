import {Letter, LocalPost, UserData} from "./Letter";

const api = new Letter('https://jsonplaceholder.typicode.com/')

const postsData = [] as UserData[]
// @ts-ignore
const beforeMount = (async function getData() {
    const { data } = await api.get()
    postsData.splice(0, postsData.length, ...data)
}())


window.onload = () => {
 const postsContainer = document.querySelector('#posts')

 const posts = (posts: LocalPost[]) => {
    return posts.reduce((acc, post) => {
        acc += `
            <div class="comment">
      <div class="commentBox">
        <div class="commentContent">
          <header>
            <div class="authorAndTime">
              <strong>${post.title}</strong>
            </div>
          </header>
          <p>${post.body}</p>
        </div>
      </div>
    </div>
        `
        return acc
     }, '')
 }

 const UsersHTML = postsData.reduce((acc, author) => {
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
        ${posts(author.posts)}
      </div>
    </article>`
     return acc
 }, '')


 postsContainer.innerHTML = UsersHTML

}