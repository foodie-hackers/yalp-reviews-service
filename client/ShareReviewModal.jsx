import React, { Component } from 'react';
import styled from 'styled-components';

const Overlay = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 5;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;
const Modal = styled.div `
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
  height: 500px;
  width: 500px;
  padding: 20px;
`;
const Title = styled.div `
  color: #D32323;
  font-family: arial;
  font-weight: bold;
  font-size: 23px;
  padding-top: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;
`;
const ShareBottons = styled.div `
  display: flex;
  align-items: center;
  font-family: arial;
  font-weight: bold;
  font-size: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const ShareOnFacebook = styled.div `
  width: 250px;
  height: 30px;
  background: #3b5998;
  color: white;
  border: 1px solid gray;
  border-radius: 5px;
  text-align: center;
  vertical-align: center;
  padding: 5px;
  margin: 10px;
`;
const ShareOnTwitter = styled.div `
  width: 250px;
  height: 30px;
  background: #00aced;
  color: white;
  border: 1px solid gray;
  border-radius: 5px;
  text-align: center;
  vertical-align: center;
  padding: 5px;
  margin: 10px;
`;

const ShareReviewModal = (props) => {
  return (
    <Overlay>
      <Modal>
        <Title> Share Review</Title>
        <ShareBottons>
          <ShareOnFacebook><i className="fab fa-facebook"></i>   Share on Facebook</ShareOnFacebook>
          <ShareOnTwitter><i className="fab fa-twitter"></i>  Share on Twitter</ShareOnTwitter>
        </ShareBottons>
        <input value={window.location.href}></input>
      </Modal>
    </Overlay>
  )
}

export default ShareReviewModal;