const BASE_URL = "https://bcknd-chal.onrender.com";

const getData = async () => {
  let response = await fetch(`${BASE_URL}/post`);
  let data = await response.json();

  if (data.success) {
    let posts = data.data.posts;
    return posts.map((post) => ({
      id: post._id,
      title: post.title,
      image: post.image,
      body: post.body,
      user: post.user,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    }));
  } else {
    throw new Error("Failed to fetch posts");
  }
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
