import React, { useEffect, useState } from "react";
import axios from "axios";

import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";

import "../index.css";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/posts");
      setPosts(response.data.posts);
      console.log(posts);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Wrapper>
      <Title />
      <Container posts={posts} />
    </Wrapper>
  );

}