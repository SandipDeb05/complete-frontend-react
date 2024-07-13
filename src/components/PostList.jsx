import React from "react";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { addPost, fetchComments, fetchPosts } from "../api/api";

const PostList = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const {
    data: comments,
    isLoading: isCommentLoading,
    isError: isCommentError,
    error: commentError,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: fetchComments,
  });

  const queryClient = useQueryClient();

  const {
    mutate,
    isError: isPostError,
    error: postError,
    isPending,
    reset,
  } = useMutation({
    mutationFn: addPost,
    onMutate: () => {
      return { contextData: 1 };
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
        exact: true,
        predicate: (query) =>
          query.queryKey(0) === "posts" && query.queryKey[1].page >= 2,
      });
    },
    onError: (error, variables, context) => {},
    onSettled: (data, error, variables, context) => {},
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    if (!title) return;
    mutate({ title: title });
    e.target.reset();
  };

  return (
    <div className="posts-root">
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="enter your post"
        />
        <button type="submit">Submit</button>
      </form>

      {(isLoading || isPending) && <p>Loading...</p>}
      {isError && <p>{error?.message}</p>}
      {isPostError && <p onClick={reset}>unable to post</p>}
      <div className="posts-list">
        <ul>
          {posts?.map((post) => {
            return (
              <li key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.views}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <br />

      <div className="posts-list">
        <ul>
          {comments?.map((comment) => {
            return (
              <li key={comment.id}>
                <h4>{comment.text}</h4>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PostList;
