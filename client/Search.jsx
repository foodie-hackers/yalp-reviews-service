import React, { Component } from 'react';
import styled from 'styled-components';

const SearchReview = styled.input `
  border: thin solid gray;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 35%;
  height: 40px;
  font-size: 16px;
  padding: 0.9em;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
`;
const SearchBotton = styled.button `
  background-color: #DA2110;
  color: white;
  border: thin solid #DA2110;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 14px;
  height: 40px;
  padding: 0.9em;
  margin-bottom: 5px;
`;

const Search = (props) => {
  return (
    <div>
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
    </div>
  );
};

export default Search;