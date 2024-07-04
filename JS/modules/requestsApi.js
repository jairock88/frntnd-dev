const BASE_URL = "https://dsfeq4-default-rtdb.firebaseio.com/Post/";

const getData = async () => {
  let response = await fetch(`${BASE_URL}/.json`);
  let data = await response.json();
  let keysArray = Object.keys(data);
  let postArray = keysArray.map((key) => ({
    ...data[key],
    key,
  }));
  return postArray;
};

export { getData };
