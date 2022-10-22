import { UsersProfile } from "./usersProfile";

export const SearchBar = () => {
  const headerContent = `
    <form id="searchForm" class="searchContainer">
        <input id="searchInput" placeholder="search user name..." class="search" type="text"/>
        <button class="buttonSearch" type="submit">Search</button>
    </form>
   
  `;

  const headerBar = document.querySelector("#headerBar");
  headerBar.innerHTML += headerContent;

  const searchForm = document.querySelector("#searchForm");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const search = (document.querySelector("#searchInput") as HTMLInputElement)
      ?.value;
    const postsContainer = document.querySelector("#posts");

    UsersProfile(search).then((res) => {
      postsContainer.innerHTML = res;
    });
  };
  searchForm.addEventListener("submit", handleSubmit);
};
