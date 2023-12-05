import React from "react";
import styled from "styled-components";

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap');
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: "Syne Mono", monospace;
  height: 100vh;
  justify-content: center;
`

export default function Wrapper(props) {
  return <Container>{props.children}</Container>
}