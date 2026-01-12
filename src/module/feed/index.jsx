import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchComments, addComment } from "../../store/action/postAction";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./feeds.css";

const Feeds = () => {
  const dispatch = useDispatch();
  const { posts, comments, loading } = useSelector((state) => state.post);

  const [commentInputs, setCommentInputs] = useState({});

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchComments());
  }, [dispatch]);

  const handleCommentChange = (postId, text) => {
    setCommentInputs({ ...commentInputs, [postId]: text });
  };

  const handleAddComment = (postId) => {
    const text = commentInputs[postId];
    if (text) {
      const newComment = {
        postId: postId,
        userId: 1,
        username: "Current User",
        comment: text,
        timestamp: new Date().toISOString()
      };
      dispatch(addComment(newComment));
      setCommentInputs({ ...commentInputs, [postId]: "" });
    }
  };

  if (loading && posts.length === 0) {
    return <div className="text-center mt-5">Loading Feeds...</div>;
  }

  return (
    <div className="feeds-container">
      {posts.map((post) => (
        <div className="feed-card" key={post.id}>
          <div className="feed-header">
            <div className="feed-user-info">
              <div className="avatar-circle-small">
                <img src={"assest/avatar/photo-men.jpg"} alt="User" />
              </div>
              <div className="user-details">
                <h6 className="user-name">{post.userId}</h6>
                <span className="user-role">Developer</span>
              </div>
            </div>
            <i className="bi bi-three-dots"></i>
          </div>

          <div className="feed-content">
            {post.img && (
              <div className="post-image-container">
                <img src={post.img} alt={post.imgName || "Post"} className="post-img" />
              </div>
            )}
            <p className="post-text">{post.post}</p>
          </div>

          <hr className="feed-divider" />

          <div className="feed-actions">
            <span><i className="bi bi-hand-thumbs-up"></i> 4</span>
            <span><i className="bi bi-chat-left-text"></i> {comments.filter(c => c.postId === post.id).length}</span>
            <span><i className="bi bi-share"></i> Share</span>
          </div>

          <hr className="feed-divider" />

          <div className="add-comment">
            <div className="avatar-circle-vsmall">
              <img src={"assest/avatar/photo-men.jpg"} alt="User" />
            </div>
            <div className="comment-input-wrapper">
              <input
                type="text"
                placeholder="Write something..."
                value={commentInputs[post.id] || ""}
                onChange={(e) => handleCommentChange(post.id, e.target.value)}
              />
              <button className="send-btn" onClick={() => handleAddComment(post.id)}>
                <i className="bi bi-send-fill"></i>
              </button>
            </div>
          </div>

          <div className="comments-list">
            {comments
              .filter(comment => comment.postId === post.id)
              .map((comment, index) => (
                <div className="comment-item" key={comment.id || index}>
                  <div className="avatar-circle-vsmall">
                    <img src="assest/avatar/photo-men.jpg" alt="User" />
                  </div>
                  <div className="comment-content">
                    <h6 className="comment-user">{comment.username || "User"}</h6>
                    <p className="comment-text">{comment.comment}</p>
                    <div className="comment-footer">
                      <span>Like</span> | <span>Reply</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feeds;