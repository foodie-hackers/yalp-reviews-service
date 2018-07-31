import React, { Component } from 'react';
import styled from 'styled-components';

const SortByLanguageDropDown  = styled.div `
  border: "white";
  padding: 0.9em;
  margin: 2px;
  text-align: center;
  font-family: arial;
  font-size: 18px;
  color: #5D5C5B;;
  cursor: pointer;
`;

const SortByLanguage = (props) => {
  return (
    <SortByLanguageDropDown>Language <b>English ({props.reviewCount}) </b><i className="fas fa-caret-down"></i></SortByLanguageDropDown>
  );
}

export default SortByLanguage;