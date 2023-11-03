import React, { Component } from 'react';

class DataFetchingExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    // Simulate a network request delay for 2 seconds
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            data,
            isLoading: false,
          });
        });
    }, 2000);
  }

  render() {
    const { data, isLoading } = this.state;
    return (
      <div>
        <h2>Data Fetching Example</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h3>Title: {data.title}</h3>
            <p>Body: {data.body}</p>
          </div>
        )}
      </div>
    );
  }
}

export default DataFetchingExample;
