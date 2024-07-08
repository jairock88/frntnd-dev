const BASE_URL = "https://dsfeq4-default-rtdb.firebaseio.com";

/* Valores iniciales */
let postsArray = [];

/* Selección de DOM */
let searchBar = document.getElementById("searchBar");

/* Funciones */
const createPostElement = (post) => {
    const postElement = document.createElement('div');
    postElement.classList.add('main-post', 'card', 'text-start', 'p-3', 'mb-2');

    const userInfo = document.createElement('div');
    userInfo.classList.add('d-flex', 'justify-content-start', 'align-items-center', 'mb-2');
    
    const avatarImg = document.createElement('img');
    avatarImg.src = post.Avatar;
    avatarImg.alt = "Avatar";
    avatarImg.classList.add('rounded-circle', 'me-2');
    avatarImg.width = 45; 
    avatarImg.height = 45;

    const authorInfo = document.createElement('div');
    authorInfo.classList.add('d-flex', 'flex-column', 'ms-2');

    const authorName = document.createElement('p');
    authorName.classList.add('mb-0');
    authorName.textContent = post.Author;

    const postDate = document.createElement('p');
    postDate.classList.add('text-muted', 'mb-0'); 
    postDate.style.fontSize = '0.8rem'; 
    postDate.textContent = post.Date; 

    authorInfo.appendChild(authorName);
    authorInfo.appendChild(postDate);

    const userContainer = document.createElement('div');
    userContainer.classList.add('d-flex', 'align-items-center'); 

    userContainer.appendChild(avatarImg);
    userContainer.appendChild(authorInfo);

    userInfo.appendChild(userContainer);

    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper', 'ms-3', 'mt-2'); 

    const title = document.createElement('h2');
    title.textContent = post.Title;

    const tagsContainer = document.createElement('div');
    tagsContainer.classList.add('list-tags', 'd-flex', 'gap-3');

    post.Tags.forEach(tag => {
        const tagLink = document.createElement('a');
        tagLink.classList.add('text-decoration-none');
        tagLink.href = "#";
        tagLink.style.color = 'black'; 
        tagLink.innerHTML = `<span></span>${tag}`;
        tagsContainer.appendChild(tagLink);
    });

    const reactionsContainer = document.createElement('div');
    const reactionsImg = document.createElement('img');
    reactionsImg.src = "./IMG/icons8-flame-30.png";
    reactionsImg.alt = "";
    reactionsImg.width = 20;

    const reactionsLink = document.createElement('a');
    reactionsLink.classList.add('text-decoration-none');
    reactionsLink.href = "#";
    reactionsLink.textContent = `Reactions: ${post.Reactions}`;
    reactionsLink.style.color = 'black'; // Color de texto de reacciones en negro

    const commentsImg = document.createElement('img');
    commentsImg.src = "./IMG/icons8-comments-30.png";
    commentsImg.alt = "";
    commentsImg.width = 20;

    const commentsLink = document.createElement('a');
    commentsLink.classList.add('text-decoration-none');
    commentsLink.href = "#";
    commentsLink.textContent = "Comments";
    commentsLink.style.color = 'black';

    reactionsContainer.appendChild(reactionsImg);
    reactionsContainer.appendChild(reactionsLink);
    reactionsContainer.appendChild(commentsImg);
    reactionsContainer.appendChild(commentsLink);

    contentWrapper.appendChild(title);
    contentWrapper.appendChild(tagsContainer);
    contentWrapper.appendChild(reactionsContainer);

    postElement.appendChild(userInfo);
    postElement.appendChild(contentWrapper);

    return postElement;
};

const printPosts = async (postsArray) => {
    let postsContainer = document.getElementById("posts-container");
    postsContainer.innerHTML = "";

    postsArray.forEach((post) => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
    });
};

const getAllPosts = async () => {
    try {
        let response = await fetch(`${BASE_URL}/Post.json`);
        let data = await response.json();
        let dataKeys = Object.keys(data);
        let postArray = dataKeys.map((key) => ({ ...data[key], key }));
        return postArray;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
};

const getPosts = async () => {
    postsArray = await getAllPosts();
    printPosts(postsArray);
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
document.addEventListener('DOMContentLoaded', getPosts);
