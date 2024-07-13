import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllComments,
  getAllPosts,
  postCommentById,
  postPost,
} from "../api/api";

const PostsList = () => {
  const queryClient = useQueryClient();

  const {
    data: posts,
    isLoading: isPostsLoading,
    isError: isPostsError,
  } = useQuery({
    queryKey: ["GET_ALL_POSTS"],
    queryFn: getAllPosts,
  });

  const { mutate: mutatePost } = useMutation({
    mutationKey: ["POST_POST"],
    mutationFn: postPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_ALL_POSTS"] });
    },
  });

  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useQuery({
    queryKey: ["GET_ALL_COMMENTS"],
    queryFn: getAllComments,
  });

  const {
    mutate: mutateComment,
    isPending: isCommentSubmitting,
    isError: isPostCommentError,
  } = useMutation({
    mutationKey: ["POST_COMMENT_BY_ID"],
    mutationFn: postCommentById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_ALL_COMMENTS"] });
    },
  });

  console.log(posts);

  const commentSubmit = (id) => (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const comment = formData.get("comment");
    if (!comment.trim()) return;
    const payload = { body: comment, postId: id };
    mutateComment(payload);
    e.target.reset();
  };

  const postSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const author = formData.get("author");
    const payload = {
      title: title,
      author: author,
    };
    mutatePost(payload);
    e.target.reset();
  };

  return (
    <div>
      {isPostsLoading && <p>Fetching all posts...</p>}
      {(isPostsError || isPostCommentError) && <p>Something went wrong!</p>}
      <form
        action="#"
        className="d-flex align-items-center gap-2"
        onSubmit={postSubmit}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter your post title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            placeholder="Enter author name"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-success btn-sm">
            Add
          </button>
        </div>
      </form>
      <ul>
        {posts?.map((post) => {
          return (
            <li key={post.id}>
              <p className="m-0">Title: {post.title}</p>
              <p className="m-0">Author: {post.author}</p>
              <div className="ms-4">
                <h6 className="m-0">Comments</h6>
                {comments
                  ?.filter((comment) => comment.postId === post.id)
                  .map((comment) => {
                    return (
                      <p key={comment.id} className="m-0">
                        -- {comment.body}
                      </p>
                    );
                  })}
                <form
                  action="#"
                  onSubmit={commentSubmit(post.id)}
                  className="d-flex align-items-center gap-2"
                >
                  {isCommentSubmitting ? (
                    "sending"
                  ) : (
                    <input
                      type="text"
                      name="comment"
                      id="comment"
                      placeholder="Enter your comment"
                    />
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary btn-sm"
                    disabled={isCommentSubmitting}
                  >
                    Send
                  </button>
                </form>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostsList;
