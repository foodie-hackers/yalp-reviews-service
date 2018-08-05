import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import $ from 'jquery';
import Search from './Search.jsx';
import Sort from './Sort.jsx';
import SortByLanguage from './SortByLanguage.jsx';
import ShareReviewModal from './ShareReviewModal.jsx';

const Div = styled.div `
  background-color: white;
  display: flex;
  border-top: 1px solid lightgray;
  padding: 20px;
  font-family: arial;
  width: 660px;
`;
const ReviewSideBar = styled.div `
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-right: 70px;
`;
const User = styled.div `
  display: flex;
`;
const Action = styled.div `
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 250px;
  padding: 10px;
`;
const ActionDiv = styled.div `
  display: flex;
  cursor: pointer;
  color: #0073BB;
`;
const ActionButtons = styled.div `
  height: 20px;
  width: 200px;
  font-size: 12px;
  font-weight: bold;
  padding-top: 3px;
  border-bottom: 1px solid lightgray;
`;
const ActionIcons = styled.i `
  height: 9px !important;
  padding: 1px !important;
  text-align: center;
  margin-right: 15px;
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
  width: 60px;
  height: 60px;
`;
const UserInfo = styled.div `
  display: flex;
  flex-direction: column;
`;
const UserLocation = styled.div `
  color: black;
  font-size: 12px;
  font-weight: bold;
`;
const UserName = styled.div `
  color: #0073BB;
  font-size: 14px;
  font-weight: bold;
`;
const FriendCount = styled.div `
  color: gray;
  font-size: 11px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const ReviewCount = styled.div `
  color: gray;
  font-size: 11px;
  margin-bottom: 5px;
`;
const PhotoCount = styled.div `
  color: gray;
  font-size: 11px;
  margin-bottom: 5px;
`;
const ReviewDate = styled.span `
  color: gray;
  font-size: 14px;
`;
const Review = styled.p `
  line-height: 1.5em;
  color: #38393A;
  font-size: 14px;
`;
const ReviewButtons = styled.button `
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 14px;
  padding-left: 12px;
  margin: 5px;
  font-size: 14px;
  color: #5D5C5B;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
`;
const rating = stars => ({
  backgroundColor: stars > 3 ? "#D32323" : stars > 0 ? "orange" : "gray",
  color: "white",
  margin: "1px",
  padding: "3px",
  borderRadius: "2px",
});
const Header = styled.div `
  color: #D32323;
  font-family: arial;
  font-size: 23px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 660px;
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
  font-family: arial;
  text-align: center;
  width: 660px;
  font-size: 13px;
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
const SearchAndSort = styled.div `
  background-color: white;
  display: flex;
  font-family: arial;
  width: 660px;
`;
const YalpReview = styled.div `
  display: flex;
  flex-direction: row;
  width: 960px;
`;
const Sidebar = styled.div `
  display: flex;
  flex-direction: column;
`;
const YalpApp = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    const path = this.props.location.pathname.substr(1).split('/')[0];
    
    this.state = {
      id: path,
      reviews: [],
      input: '',
      filteredReviews: [],
      trustBanner: true,
      showAction: false,
      shareReview: false
    }
    console.log(this.state.filteredReviews);
  }

  componentDidMount() {
    this.getAllReviews(this.state.id);
  }

  getAllReviews(restaurantId) {
    $.ajax({
      url: 'http://yalp-reviews-service-dev.us-west-1.elasticbeanstalk.com/restaurants/' + restaurantId + '/reviews',
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

  toggleActionOn() {
    this.setState({
      showAction: true
    })
  }

  toggleActionOff() {
    this.setState({
      showAction: false
    })
  }

  toggleShareReview() {
    this.setState({
      shareReview: true
    })
  }

  render() {
    return (
      <YalpApp>
      <YalpReview>
      <div className="review-list" width="660px">
        <img width="660px" src="https://s3-us-west-1.amazonaws.com/yalp-reviews/AskCommunity.png"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
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
          <SearchAndSort>
          <Search
            handleSearchOnClick={(e) => this.handleSearchOnClick(e.target.value)}
            handleSearch={(e) => this.handleSearch(e.target.value)}>  
          </Search>
          <Sort></Sort>
          <SortByLanguage 
            reviewCount={this.state.filteredReviews.length}
            ></SortByLanguage>
          </SearchAndSort>
          { this.state.filteredReviews.length ? 
            this.state.filteredReviews.map((review, i) => 
          <Div>
            <ReviewSideBar
              onMouseEnter={(e) => this.toggleActionOn(e)}
              onMouseLeave={(e) => this.toggleActionOff(e)}>
              <User key={i}>
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
              </User>
              <Action>
              {this.state.showAction ?  
                <div>
                <ActionDiv>
                  <ActionIcons className="fas fa-share-square"></ActionIcons>
                  <ActionButtons onClick={(e)=> this.toggleShareReview(e.target.value)}>Share review</ActionButtons>
                </ActionDiv>
                <ActionDiv>
                  <ActionIcons className="fas fa-link"></ActionIcons>
                  <ActionButtons>Embed review</ActionButtons>
                </ActionDiv>
                <ActionDiv>
                  <ActionIcons className="fas fa-medal"></ActionIcons>
                  <ActionButtons>Compliment</ActionButtons>
                </ActionDiv>
                <ActionDiv>
                  <ActionIcons className="fas fa-comment-alt"></ActionIcons>
                  <ActionButtons>Send message</ActionButtons>
                </ActionDiv>
                <ActionDiv>
                  <ActionIcons className="fas fa-user-alt"></ActionIcons>
                  <ActionButtons>Follow {review.user}</ActionButtons>
                  </ActionDiv>
                  </div>
              : null }
              </Action>
            </ReviewSideBar>
            <ReviewWrapper 
              onMouseEnter={(e) => this.toggleActionOn(e)}
              onMouseLeave={(e) => this.toggleActionOff(e)}>
            {Array(5).fill().map((e, i) => <span key={i} className="fa fa-star" style={rating(i < review.stars ? review.stars : 0)} />)}
              <ReviewDate> {review.date.replace(/-/g, '/')} </ReviewDate>
              <Review> {review.text} </Review>
              <ReviewButtons><i className="fas fa-lightbulb" style={{padding: "0.3em"}}></i><b>Useful</b> {review.useful}</ReviewButtons>
              <ReviewButtons><i className="far fa-grin" style={{padding: "0.3em"}}></i><b>Funny</b> {review.funny}</ReviewButtons>
              <ReviewButtons><i className="far fa-grin-hearts" style={{padding: "0.3em"}}></i><b>Cool</b> {review.cool}</ReviewButtons>
              <ReviewButtons style={{float: "right"}}><i className="fas fa-flag" style={{padding: "0.3em"}}></i></ReviewButtons>
            </ReviewWrapper>
          </Div>) : <p style={{fontFamily: "arial", marginLeft: "10px"}}>No reviews found</p>}    
      </div>
      {this.state.shareReview ? <ShareReviewModal /> : null}
      <Sidebar>
        <img width="281px" src="https://s3-us-west-1.amazonaws.com/yalp-reviews/ReviewSidebar1.png"/>
        <img width="281px" src="https://s3-us-west-1.amazonaws.com/yalp-reviews/ReviewSidebar2.png"/>
        <img width="281px" src="https://s3-us-west-1.amazonaws.com/yalp-reviews/ReviewSidebar3.png"/>
        <img width="281px" src="https://s3-us-west-1.amazonaws.com/yalp-reviews/ReviewSidebar4.png"/>
        <img width="281px" src="https://s3-us-west-1.amazonaws.com/yalp-reviews/ReviewSidebar4.png"/>
      </Sidebar>
      </YalpReview>
      <img width="660px" src="https://s3-us-west-1.amazonaws.com/yalp-reviews/ReviewBottom.png"/>
    </YalpApp>
    );
  }
}
const AppWithRouter = withRouter(props => <App {...props} />);

ReactDOM.render(<BrowserRouter>
  <AppWithRouter />
  </BrowserRouter>, document.getElementById('Reviews'));