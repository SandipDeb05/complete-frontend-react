const fetchPosts = async () => {
  const response = await fetch("http://localhost:3000/posts?_short=-id");
  const posts = response.json();
  return posts;
};

const fetchComments = async () => {
  const response = await fetch("http://localhost:3000/comments");
  const comments = response.json();
  return comments;
};

const fetchProfile = async () => {
  const response = await fetch("http://localhost:3000/profile");
  const profile = response.json();
  return profile;
};

const addPost = async (post) => {
  const response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  return response.json();
};

export { fetchPosts, fetchComments, fetchProfile, addPost };
