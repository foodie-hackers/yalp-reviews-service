import React, { Component } from 'react';
import styled from 'styled-components';

const SortByLanguageDropDown = styled.div `
  border: "white";
  padding: 0.9em;
  margin: 2px;
  text-align: center;
  font-family: arial;
  font-size: 18px;
  color: #5D5C5B;;
  cursor: pointer;
`;
const Dropdown = styled.span `
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
`;

const SortByLanguage = (props) => {
  return (
    <div>
    <SortByLanguageDropDown>
      Language <b>English ({props.reviewCount}) </b><i className="fas fa-caret-down"></i></SortByLanguageDropDown>
    <Dropdown>Yalp Sort</Dropdown>
    </div>
  );
}

export default SortByLanguage;