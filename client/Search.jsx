import React, { Component } from 'react';
import styled from 'styled-components';

const SearchReview = styled.input `
  border: thin solid gray;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 250px;
  height: 35px;
  font-size: 14px;
  padding-left: 10px;
  margin-top: 10px;
  margin-left: 5px;
`;
const SearchBotton = styled.button `
  background-color: #D32323;
  color: white;
  border: thin solid #D32323;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 14px;
  height: 40px;
  padding: 10px; 
  margin-top: 10px;
`;
const SearchDiv = styled.div`
  display: flex;
`;

const Search = (props) => {
  return (
    <SearchDiv>
      <SearchReview 
        value={props.input}
        placeholder="Search within the reviews" 
        type="text"
        onChange={props.handleSearchOnClick}>
      </SearchReview>
      <SearchBotton
        onClick={props.handleSearch}>
        <i className="fas fa-search"></i>
      </SearchBotton>
    </SearchDiv>
  );
};

export default Search;