import { SearchBar } from "./components/searchBar";
import { UsersProfile } from "./components/usersProfile";

import "./css/global.scss";
import "./css/loading.scss";
import { scrollTrigger } from "./utils/scrolltrigger";

window.onload = () => {
  const postsContainer = document.querySelector("#posts");

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
  `;
  UsersProfile().then((res) => {
    setTimeout(() => {
      SearchBar();
      postsContainer.innerHTML = res;
      scrollTrigger(".scroll-reveal", { rootMargin: "-126px" });
    }, 600);
  });
};
