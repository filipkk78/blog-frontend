import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

function Home() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((json) => setPosts(json.posts))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <Loading></Loading>;
  if (error) return <p>A network error has occured</p>;
  return (
    <>
      <h1>Home</h1>
      <div className={styles.posts}>
        {posts.map((post) => (
          <article key={post.id} className={styles.post}>
            <Link to={`posts/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <img
              src="https://placehold.co/600x400/212121/f5f5f7?text=Blog+post&font=roboto"
              alt="blog post placeholder image"
            />
          </article>
        ))}
      </div>
    </>
  );
}

export default Home;
