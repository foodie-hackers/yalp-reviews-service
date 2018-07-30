import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import $ from 'jquery';

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
  border: 1px solid white;
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
  font-size: 14px;
  margin-bottom: 5px;
`;
const ReviewCount = styled.div `
  color: gray;
  font-size: 14px;
  margin-bottom: 5px;
`;
const PhotoCount = styled.div `
  color: gray;
  font-size: 14px;
  margin-bottom: 5px;
`;
const ReviewDate = styled.span `
  color: gray;
`;
const Review = styled.p `
  line-height: 1.5em;
  color: #38393A;
  font-size: 17px;
`;
const rating = stars => ({
  backgroundColor: stars > 3 ? "red" : stars > 0 ? "orange" : "gray",
  color: "white",
  margin: "1px",
  padding: "2px",
  borderRadius: "2px"
});

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
    return (
      <div className="review-list">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <ul>
          {this.state.reviews.map((review, i) => 
          <Div key={i}>
            <ReviewSideBar>
              <UserAvatar avatar={review.avatar}></UserAvatar>
              <UserInfo>
                <UserName> {review.user} </UserName>
                <UserLocation> {review.city}, {review.state} </UserLocation>
                <FriendCount> 
                  <i className="fas fa-user-friends" style={{color: "#ED6E10"}}></i>
                  <strong> {review.friends} </strong> friends 
                </FriendCount>
                <ReviewCount> 
                  <i className="fa fa-star" style={{color: "white", backgroundColor: "#ED6E10", padding: "0.1em"}}></i>
                  <strong> {review.review_count} </strong> reviews 
                </ReviewCount>
                <PhotoCount> 
                  <i class="fas fa-camera" style={{color: "#ED6E10"}}></i>
                  <strong> {review.photos} </strong> photos 
                </PhotoCount>
              </UserInfo>
            </ReviewSideBar>
            <ReviewWrapper>
            {Array(5).fill().map((e, i) => <span key={i} className="fa fa-star" style={rating(i < review.stars ? review.stars : 0)} />)}
              <ReviewDate> {review.date.replace(/-/g, '/')} </ReviewDate>
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