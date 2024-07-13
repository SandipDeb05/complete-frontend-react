export const getAllPosts = async () => {
  const response = await fetch("http://localhost:3000/posts");
  const posts = response.json();
  return posts;
};

export const postPost = async (payload) => {
  const response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return response.json();
};

export const getAllComments = async () => {
  const response = await fetch(`http://localhost:3000/comments`);
  const comments = response.json();
  return comments;
};

export const postCommentById = async (payload) => {
  const response = await fetch(`http://localhost:3000/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return response.json();
};
