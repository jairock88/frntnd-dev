import { getData } from "./modules/requestsApi.js";
import { renderAllPosts } from "./modules/components.js";

let posts = [];

const getListPost = async () => {
  posts = await getData();
  let reorderPost = posts.reduce((accum, current) => {
    let tags = current.Tags;
    if (Array.isArray(tags)) {
      tags.forEach((tag) => {
        accum[tag]
          ? (accum[tag] = [...accum[tag], current])
          : (accum[tag] = [current]);
      });
    }
    return accum;
  }, {});

  for (const tag in reorderPost) {
    renderPostsByTag(tag, reorderPost[tag].slice(0, 5));
  }
};

getListPost();

const renderPostsByTag = (tag, posts) => {
  let postWrapper = document.getElementById("list-post-tags");
  const contentDiv = document.createElement("div");
  contentDiv.classList.add(
    ..."card mb-4 border-light-subtle shadow-sm".split(" ")
  );

  const tagHeader = document.createElement("h3");
  tagHeader.classList.add("title-tag");
  tagHeader.textContent = tag;

  let list = document.createElement("ul");
  list.classList.add("list-tags-aside");

  contentDiv.append(tagHeader, list);
  postWrapper.append(contentDiv);

  posts.forEach((post) => {
    const dataTag = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", `VIEWS/post-detail.html?postId=${post.key}`);
    link.textContent = post.Title;
    dataTag.append(link);
    list.append(dataTag);
  });
};

const getUsers = async () => {
  let containerListPost = document.getElementById("main-post");
  posts = await getData();
  posts.forEach((post) => {
    let postCard = renderAllPosts(post);
    containerListPost.append(postCard);
  });
};

getUsers();

//array de objetos
let postsArray = [];

// Función para obtener datos y almacenarlos en postsArray
const loadData = async () => {
  postsArray = await getData();
  renderPosts(postsArray); // Renderiza todos los posts al cargar los datos
};

// Función para renderizar los posts
const renderPosts = (posts) => {
  const container = document.getElementById("main-post");
  container.textContent = "";

  posts.forEach((post) => {
    let postElement = renderAllPosts(post);
    container.append(postElement);
  });
};

// Filtrar por reacciones
const filterPostByReaction = () => {
  let sortedPosts = [...postsArray].sort(
    (min, max) => max.Reactions - min.Reactions
  );
  renderPosts(sortedPosts);
};

// Filtrar por fecha
const filterPostByDate = () => {
  let sortedPosts = [...postsArray].sort(
    (min, max) => new Date(max.Date) - new Date(min.Date)
  );
  renderPosts(sortedPosts);
};

// Filtrar por relevancia
const filterPostByRelevant = () => {
  let sortedPosts = [...postsArray].sort(
    (min, max) => max.Relevant - min.Relevant
  );
  renderPosts(sortedPosts);
};

// Listener de los botones, al dar click en un boton activa su funcion correspondiente
document
  .getElementById("filter-relevant")
  .addEventListener("click", filterPostByRelevant);
document
  .getElementById("filter-latest")
  .addEventListener("click", filterPostByDate);
document
  .getElementById("filter-top")
  .addEventListener("click", filterPostByReaction);

// Cargar datos al cargar la página
window.onload = loadData;

/* Selección de DOM */
let searchBar = document.getElementById("searchBar");

const printPosts = async (postsArray) => {
  let postsContainer = document.getElementById("main-post");
  postsContainer.textContent = "";

  postsArray.forEach((post) => {
    const postElement = renderAllPosts(post);
    postsContainer.append(postElement);
  });
};

/* Listeners */
searchBar.addEventListener("keyup", (event) => {
  let query = event.target.value.toLowerCase();
  let result = postsArray.filter((post) =>
    `${post.Title}`.toLowerCase().includes(query)
  );
  printPosts(result);
});

/* Inicialización */
document.addEventListener("DOMContentLoaded", loadData);
