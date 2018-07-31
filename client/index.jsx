import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import $ from 'jquery';
import Search from './Search.jsx';

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
const ReviewButtons = styled.button `
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 14px;
  padding-left: 12px;
  margin: 5px;
  font-size: 15px;
  color: #5D5C5B;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;
const rating = stars => ({
  backgroundColor: stars > 3 ? "#DA2110" : stars > 0 ? "orange" : "gray",
  color: "white",
  margin: "1px",
  padding: "2px",
  borderRadius: "2px"
});
const Header = styled.div `
  color: #DA2110;
  font-family: arial;
  font-size: 25px;
  padding: 10px;
`;
const RestaurantName = styled.span `
  color: #4A4444;
  font-family: arial;
  font-size: 23px;
`;
const FeedTrustBanner = styled.div `
  background-color: #EEEDED;
  height: 40px;
  padding: 10px;
  margin: 5px;
  font-family: arial;
  text-aligh: center;
`;
const LearnMore = styled.span `
  color: #2782B9;
  font-weight: bold;
  cursor: pointer;
`;
const DismissTrustBanner = styled.button `
  background-color: #EEEDED;
  color: gray;
  font-size: 10px;
  cursor: pointer;
  float: right;
  border: none;
`;
const YalpLogo = styled.i `
  color: #DA2110; 
  padding: 0.5em;
  height: 8px;
  width: 8px;
  margin: 0.5em;
`;

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: this.props.location.pathname.substr(1),
      reviews: [],
      input: '',
      filteredReviews: [],
      trustBanner: true
    }
    console.log(this.state.filteredReviews);
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
          reviews: data,
          filteredReviews: data
        });
      },
      error: (err) => {
        console.log('Ajax GET fails', err);
      }
    });
  }

  toggleTrustBanner() {
    this.setState({
      trustBanner: !this.state.trustBanner
    });
    console.log(this.state.trustBanner);
  }

  handleSearchOnClick(query) {
    this.setState({
      input: query
    });
    console.log(query);
  }

  handleSearch() {
    // console.log('handleSearch clicked!', this.state.input.toLowerCase());
    this.setState(prevState => {
      return {
        filteredReviews: this.state.reviews.filter(review => {
          if (review.text.toLowerCase().includes(this.state.input.toLowerCase())) {
            var query = new RegExp(this.state.input.toLowerCase(), "g");
            var boldedQuery = this.state.input.bold();
            // console.log('query', query);
            // console.log('bolded query', boldedQuery);
            // return review.text.replace(query, boldedQuery.bold());
            return review.text;
          }
          console.log(review.text)
        })
      }
    });
    // console.log('Filtered reviews', this.state.filteredReviews);
  }

  render() {
    return (
      <div className="review-list">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <ul>
          <Header><strong>Recommended Reviews</strong> {this.state.reviews.map((review, i) => {
              if (i === 0) { 
                return <RestaurantName key={i}> for {review.name}</RestaurantName>;
              }
             })}
          </Header>
          {this.state.trustBanner &&
            <FeedTrustBanner><YalpLogo className="fab fa-yelp"></YalpLogo>
              Your trust is our top concern, so businesses can't pay to alter or remove their reviews. <LearnMore> Learn more.</LearnMore>
              <DismissTrustBanner onClick={(event) => this.toggleTrustBanner(event)}>X</DismissTrustBanner>
            </FeedTrustBanner>}
          <Search
            handleSearchOnClick={(e) => this.handleSearchOnClick(e.target.value)}
            handleSearch={(e) => this.handleSearch(e.target.value)}>  
          </Search>
          { this.state.filteredReviews.length ? 
            this.state.filteredReviews.map((review, i) => 
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
                  <i className="fas fa-camera" style={{color: "#ED6E10"}}></i>
                  <strong> {review.photos} </strong> photos 
                </PhotoCount>
              </UserInfo>
            </ReviewSideBar>
            <ReviewWrapper>
            {Array(5).fill().map((e, i) => <span key={i} className="fa fa-star" style={rating(i < review.stars ? review.stars : 0)} />)}
              <ReviewDate> {review.date.replace(/-/g, '/')} </ReviewDate>
              <Review> {review.text} </Review>
              <ReviewButtons><i className="fas fa-lightbulb" style={{padding: "0.3em"}}></i>Useful</ReviewButtons>
              <ReviewButtons><i className="far fa-grin" style={{padding: "0.3em"}}></i>Funny</ReviewButtons>
              <ReviewButtons><i className="far fa-grin-hearts" style={{padding: "0.3em"}}></i>Cool</ReviewButtons>
              {/* <ReviewButtons><i className="fas fa-flag" style={{padding: "4px"}}></i></ReviewButtons> */}
            </ReviewWrapper>
          </Div>) : <p style={{fontFamily: "arial", marginLeft: "10px"}}>No reviews found</p>}
        </ul>
      </div>
    );
  }
}
const AppWithRouter = withRouter(props => <App {...props} />);

ReactDOM.render(<BrowserRouter>
  <AppWithRouter />
  </BrowserRouter>, document.getElementById('app'));