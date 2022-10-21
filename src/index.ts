import {Letter, UserData} from "./Letter";

const api = new Letter('https://jsonplaceholder.typicode.com/')

const postsData = [] as UserData[]
// @ts-ignore
const beforeMount = (async function getData() {
    const { data } = await api.get()
    postsData.splice(0, postsData.length, ...data)
}())


window.onload = () => {
 const postsContainer = document.querySelector('#posts')
 const postsHTML = postsData.reduce((acc, author) => {
     acc += ` <article class="post">
      <header>
        <div class="author">
         
          <div class="authorInfo">
            <strong>${author.name}</strong>
            <span>${author.company}</div>
        </div>
      </header>

      <div class="content">
        
      </div>
      <div class="commentList">
        
      </div>
    </article>`
     return acc
 }, '')


 postsContainer.innerHTML = postsHTML

}