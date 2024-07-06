const BASE_URL = "https://dsfeq4-default-rtdb.firebaseio.com";

const getData = async () => {
  let response = await fetch(`${BASE_URL}/Post/.json`);
  let data = await response.json();
  let keysArray = Object.keys(data);
  let postArray = keysArray.map((key) => ({
    ...data[key],
    key,
  }));
  return postArray;
};

const createPost = async (postObject) => {
  let response = await fetch(`${BASE_URL}/Post/.json`, {
    method: "POST",
    body: JSON.stringify(postObject),
  });
  let data = await response.json();

  return data;
};

const getUser = async () => {
  let response = await fetch(`${BASE_URL}/Users/.json`);
  let data = await response.json();
  let keysArrays = Object.keys(data);
  let userArray = keysArrays.map((user) => ({ ...data[user], user }));

  return userArray;
};

const getPostById = async (postId) => {
  let response = await fetch(`${BASE_URL}/Post/${postId}.json`);
  let data = await response.json();
  return data;
};

export { getData, getPostById, getUser, createPost };
