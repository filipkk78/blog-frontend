import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${id}`, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((json) => setPost(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [id]);
  console.log(post);
  if (loading) return <Loading></Loading>;
  if (error) return <p>A network error has occured</p>;

  return (
    <>
      <h1>Post {id}</h1>
    </>
  );
}

export default Post;
