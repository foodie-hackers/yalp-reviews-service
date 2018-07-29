import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: this.props.location.pathname.substr(1),
      reviews: []
    }
  }

  componentDidMount() {
    this.getAllReviews(this.state.id);
  }

  getAllReviews(restaurantId) {
    $.ajax({
      url: 'http://localhost:3003/restaurants/' + restaurantId + '/reviews',
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log('Ajax GET works', data);
        this.setState({
          reviews: data
        });
      },
      error: (err) => {
        console.log('Ajax GET fails', err);
      }
    });
  }

  render() {
    const Div = styled.div `
      background-color: white;
      display: flex;
      border-top: 1px solid lightgray;
      padding: 20px;
      font-family: arial;
    `;
    const ReviewSideBar = styled.div `
      display: flex;
      width: 30%;
    `;
    const ReviewWrapper = styled.div `
      width: 80%;
    `;
    const UserAvatar = styled.div `
      background-image: ${props => `url("http://d25r1qoh5v6oq4.cloudfront.net/${props.avatar}.jpg")`};
      background-size: cover;
      border: 1px solid black;
      border-radius: 10px;
      margin: 5px;
      width: 80px;
      height: 80px;
    `;
    const UserInfo = styled.div `
      display: flex;
      flex-direction: column;
    `;
    const UserLocation = styled.div `
      color: black;
      font-weight: bold;
    `;
    const UserName = styled.div `
      color: #2782B9;
      font-size: 18px;
      font-weight: bold;
    `;
    const FriendCount = styled.div `
      color: gray;
    `;
    const ReviewCount = styled.div `
      color: gray;
    `;
    const PhotoCount = styled.div `
    color: gray;
  `;
    const ReviewDate = styled.span `
      color: gray;
    `;
    const Review = styled.p `
      line-height: 1.5em;
      color: #38393A;
      font-size: 17px;
    `;

    return (
      <div className="review-list">
        <ul>
          {this.state.reviews.map((review, i) => 
          <Div key={i}>
            <ReviewSideBar>
              <UserAvatar avatar={review.avatar}></UserAvatar>
              <UserInfo>
                <UserName> {review.user} </UserName>
                <UserLocation> {review.city}, {review.state} </UserLocation>
                <FriendCount> {review.friends} friends </FriendCount>
                <ReviewCount> {review.review_count} reviews </ReviewCount>
                <PhotoCount> {review.photos} photos </PhotoCount>
              </UserInfo>
            </ReviewSideBar>
            <ReviewWrapper>
              <ReviewDate> {review.date} </ReviewDate>
              <Review> {review.text} </Review>
            </ReviewWrapper>
          </Div>)}
        </ul>
      </div>
    );
  }
}
const AppWithRouter = withRouter(props => <App {...props} />);

ReactDOM.render(<BrowserRouter>
  <AppWithRouter />
  </BrowserRouter>, document.getElementById('app'));