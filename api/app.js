const axios = require("axios");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

app.get("/posts", async (req, res) => {
  try {

    const [postsResponse, commentsResponse] = await Promise.all([
      axios.get("https://jsonplaceholder.typicode.com/posts"),
      axios.get("https://jsonplaceholder.typicode.com/comments"),
    ]);

    const posts = postsResponse.data.map(post => ({
      ...post, comments: commentsResponse.data.filter(comment => comment.postId === post.id)
    }));

    res.json({ posts });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`api funcionando na porta ${port}`);
});