import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Yalp Reviews</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));