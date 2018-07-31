import React, { Component } from 'react';
import styled from 'styled-components';

const SortButton = styled.div `
  border: "white";
  padding: 0.9em;
  margin: 2px;
  text-align: center;
  font-family: arial;
  font-size: 18px;
  color: #5D5C5B;;
  cursor: pointer;
`;

const Sort = (props) => {
  return (
    <SortButton>Sort by <b>Yalp Sort</b> <i className="fas fa-caret-down"></i></SortButton>
  );
}

export default Sort;