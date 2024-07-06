const BASE_URL = "https://dsfeq4-default-rtdb.firebaseio.com";

import { getPostById } from "./modules/requestsApi.js";

const getAllPosts = async () => {
    let response = await fetch(`${BASE_URL}/Post/.json`);
    let data = await response.json();
    let dataKeys = Object.keys(data);
    let postArray = dataKeys.map((key) => ({...data[key], key}));
    return postArray;
};
console.log(getAllPosts);


// let searchByTitle = document.getElementById("search-by-title");

// searchByTitle.addEventListener("keyup",
//     (e) => {
//         let query = e.target.value;
//         let result = 
//     }