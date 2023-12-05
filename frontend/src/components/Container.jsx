import styled from "styled-components";

const Model = styled.div`
  max-height: 864px;
`

const Acordion = styled.div`
  max-width: 1800px;
  width: 1000px;
  padding: 64px;
`

const Post = styled.div`
  background-color: #1E1E1E;
`

const PostContainer = styled.div`
  padding: 40px;
`

const PostName = styled.p`
  color: #7594ea;
  font-size: 1.3em;
  padding: 8px;
`

const PostBody = styled.p`
  color: #ddd;
  padding: 24px;
`

const DetailsContainer = styled.details`
  background-color: #1E1E1E;
  filter: drop-shadow(0px 0px 0px #0A0A0A);
  margin-bottom: 20px;
  padding: 8px;

  :hover{
    filter: drop-shadow(5px 5px 4px #0A0A0A);
  }
`

const CommentTitle = styled.summary`
  color: #7594ea;
  cursor: pointer;
  font-size: 1.3em;
  padding: 5px 10px;
`

const CommentName = styled.p`
  color: #f98181;
  font-weight: bold;
  margin-left: 32px;
  margin-top: 16px;
`

const CommentBody = styled.p`
  color: #ddd;
  padding: 24px;
`

export default function Container({ posts }) {
  return (
    <Model>
      <Acordion>
        {posts && posts.map((post) => (
          <Post key={post.id}>
            <PostContainer>
              <PostName>{post.title}</PostName>
              <PostBody>{post.body}</PostBody>
            </PostContainer>

            <DetailsContainer>
              <CommentTitle>Comments</CommentTitle>

              {post.comments.map((comment) => (

                <div key={comment.id}>
                  <CommentName>{comment.name}</CommentName>
                  <CommentBody>{comment.body}</CommentBody>
                </div>
              ))};
            </DetailsContainer>
          </Post>
        ))};
      </Acordion>
    </Model>);
};