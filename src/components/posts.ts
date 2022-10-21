import {LocalPost} from "../models";
import '../css/post.scss'

export const Posts = (posts: LocalPost[]) => {
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