import { useState, useEffect } from "react";

const fetchPost = () => {
  const [posts, setPosts] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Fetching posts error: ", error));
  }, []);

  return { posts };
};

export default fetchPost;
