import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      affiche: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ affiche: false });
    }, 3000);
  }

  render() {
    return (
      <div>
        {this.state.affiche ? (
          <p>Welcome to Our Competition World </p>
        ) : (
          <p></p>
        )}
      </div>
    );
  }
}

export default Home;
