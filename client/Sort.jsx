import React, { Component } from 'react';
import styled from 'styled-components';

const SortButton = styled.div `
  border: white;
  background-color: white;
  padding: 0.9em;
  margin: 2px;
  text-align: center;
  font-family: arial;
  font-size: 14px;
  color: #5D5C5B;
  cursor: pointer;
  width: 150px;
`;


class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: ['Yelp Sort', 'Newest First', 'Oldest First', 'Highest Rated', 'Lowest Rated', 'Elites']
    };
  }

  render() {
    return (
      <SortButton>Sort by <b>Yalp Sort</b> <i className="fas fa-caret-down"></i>
      </SortButton>
    );
  }
}

export default Sort;