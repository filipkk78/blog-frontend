import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import styles from "./Post.module.css";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");
  const [pending, setPending] = useState(false);

  useEffect(() => {
    fetch(`https://blog-api-production-3d1f.up.railway.app/api/posts/${id}`, {
      mode: "cors",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((json) => setPost(json.post))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [post]);
  if (loading) return <Loading></Loading>;
  if (error) return <h1>Post not found</h1>;

  const postId = post.id;

  function handleSubmit(e) {
    e.preventDefault();
    const comment = { authorName, content, postId };
    setPending(true);
    fetch("https://blog-api-production-3d1f.up.railway.app/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    }).then(() => {
      setPending(false);
    });
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p className={styles.content}>{post.content}</p>
      <h2>Comments</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="authorName">Name</label>
        <input
          type="text"
          name="authorName"
          id="authorName"
          required
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        {!pending && <button type="submit">Add comment</button>}
        {pending && <button disabled>Pending...</button>}
      </form>
      {post.comments.map((comment) => (
        <article key={comment.id}>
          <div className={styles.commentheader}>
            <span className={styles.commentAuthor}>{comment.authorName}</span> @
            {new Date(comment.createdAt).toLocaleString()}
          </div>
          <p>{comment.content}</p>
        </article>
      ))}
    </>
  );
}

export default Post;
