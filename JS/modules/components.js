import { formatDate } from "./utils.js";

const renderPost = (post) => {
  let { Author, Avatar, Date, Image, Reactions, Tags, Title, Content, Img } =
    post;
  let newDate = formatDate(Date);

  let postContent = document.getElementById("content-post");

  let divImage = document.createElement("div");
  divImage.classList.add("content-image");

  let imagePost = document.createElement("img");
  imagePost.classList.add("image-post-detail");
  imagePost.setAttribute("src", Image);

  let divContentPost = document.createElement("div");
  divContentPost.classList.add("content");

  let divWrapperUser = document.createElement("div");
  divWrapperUser.classList.add("content-user");

  let imageUser = document.createElement("img");
  imageUser.classList.add("image-user");
  imageUser.setAttribute("src", Avatar);

  let divWrapperDataUser = document.createElement("div");
  divWrapperDataUser.classList.add("content-info-user");

  let nameUser = document.createElement("p");
  nameUser.classList.add("text-user");
  nameUser.textContent = Author;

  let datePost = document.createElement("p");
  datePost.classList.add("date-post");
  datePost.textContent = `Posted on ${newDate}`;

  let wrapperReactions = document.createElement("div");
  wrapperReactions.classList.add("content-reactions");

  let iconReactions = document.createElement("img");
  iconReactions.classList.add("icon-reactions");
  iconReactions.setAttribute("src", "../IMG/icon-heart.svg");

  let numberReactions = document.createElement("span");
  numberReactions.classList.add("number-reactions");
  numberReactions.textContent = Reactions;

  let title = document.createElement("h3");
  title.classList.add("post-title");
  title.textContent = Title;

  let divWrapperTags = document.createElement("div");
  divWrapperTags.classList.add("content-tag");

  let postExt = document.createElement("div");
  postExt.classList.add("post-text");

  let paragraph = document.createElement("p");
  paragraph.classList.add("text");
  paragraph.textContent = Content;

  let imageDetail = document.createElement("img");
  imageDetail.classList.add("image-datail");
  imageDetail.setAttribute("src", Img);

  postExt.append(paragraph);
  wrapperReactions.append(iconReactions, numberReactions);
  divWrapperDataUser.append(nameUser, datePost);
  divWrapperUser.append(imageUser, divWrapperDataUser);
  divContentPost.append(
    divWrapperUser,
    wrapperReactions,
    title,
    divWrapperTags,
    postExt,
    imageDetail
  );
  divImage.append(imagePost);
  postContent.append(divImage, divContentPost);

  let author = document.getElementById("card-author");

  let wrapperAuthor = document.createElement("div");
  wrapperAuthor.classList.add("content-info-author");
  let nameAuthor = document.createElement("p");
  nameAuthor.classList.add("text");
  nameAuthor.textContent = Author;

  let imageUser2 = document.createElement("img");
  imageUser2.classList.add("image-user");
  imageUser2.setAttribute("src", Avatar);

  let follow = document.createElement("button");
  follow.classList.add(..."btn btn-primary".split(" "));
  follow.textContent = "Follow";

  wrapperAuthor.append(imageUser2, nameAuthor);
  author.append(wrapperAuthor, follow);

  Tags.forEach((tag) => {
    let tagContent = document.createElement("div");
    tagContent.classList.add("tag");
    tagContent.textContent = tag;
    divWrapperTags.append(tagContent);
  });

  return postContent, author;
};

const renderAllPosts = (post) => {
  let { Author, Avatar, Date, Image, Reactions, Title, Tags } = post;
  let newDate = formatDate(Date);

  let postContent = document.createElement("a");
  postContent.setAttribute("href", `VIEWS/post-detail.html?postId=${post.key}`);
  postContent.classList.add(..."main-post card text-start mb-2".split(" "));

  let divImage = document.createElement("div");
  divImage.classList.add("content-image");

  let imagePost = document.createElement("img");
  imagePost.classList.add("image-post");
  imagePost.setAttribute("src", Image);

  let divContentPost = document.createElement("div");
  divContentPost.classList.add("content");

  let divWrapperUser = document.createElement("div");
  divWrapperUser.classList.add("content-user");

  let imageUser = document.createElement("img");
  imageUser.classList.add("image-user");
  imageUser.setAttribute("src", Avatar);

  let divWrapperDataUser = document.createElement("div");
  divWrapperDataUser.classList.add("content-info-user");

  let nameUser = document.createElement("p");
  nameUser.classList.add("text-user");
  nameUser.textContent = Author;

  let datePost = document.createElement("p");
  datePost.classList.add("date-post");
  datePost.textContent = `Posted on ${newDate}`;

  let wrapperReactions = document.createElement("div");
  wrapperReactions.classList.add("content-reactions");

  let iconReactions = document.createElement("img");
  iconReactions.classList.add("icon-reactions");
  iconReactions.setAttribute("src", "../IMG/icon-heart.svg");

  let numberReactions = document.createElement("span");
  numberReactions.classList.add("number-reactions");
  numberReactions.textContent = `${Reactions} Reactions`;

  let title = document.createElement("h3");
  title.classList.add("post-title");
  title.textContent = Title;

  let divWrapperTags = document.createElement("div");
  divWrapperTags.classList.add("content-tag");

  Tags.forEach((tag) => {
    let tagContent = document.createElement("div");
    tagContent.classList.add("tag");
    tagContent.textContent = tag;
    divWrapperTags.append(tagContent);
  });

  wrapperReactions.append(iconReactions, numberReactions);
  divWrapperDataUser.append(nameUser, datePost);
  divWrapperUser.append(imageUser, divWrapperDataUser);
  divContentPost.append(
    divWrapperUser,
    title,
    divWrapperTags,
    wrapperReactions
  );
  divImage.append(imagePost);
  postContent.append(divImage, divContentPost);

  return postContent;
};

export { renderPost, renderAllPosts };
