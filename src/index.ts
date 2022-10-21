import {UsersProfile} from "./components/usersProfile";

import './css/global.scss'
import './css/loading.scss'


window.onload = () => {
 const postsContainer = document.querySelector('#posts')

  postsContainer.innerHTML = `
    <div class="loadingContainer">
    <figure class="customLoading">
     <div>
     
    </div>
    <div>
    
</div>
<div>

</div>
    </figure>
    </div>
  `
UsersProfile().then((res) => {
        setTimeout(() => {
            postsContainer.innerHTML = res
        }, 1000)


  })
}