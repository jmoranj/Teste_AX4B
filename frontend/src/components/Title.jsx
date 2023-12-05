import React from "react";
import styled from "styled-components"

const ModelTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap');
  color: #fff;
  font-size: 2.6em;
  letter-spacing: 5px;
  margin-bottom: 30px;
  padding: 0px 15px;
`

export default function Title() {
  return <ModelTitle>Timeline</ModelTitle>

}