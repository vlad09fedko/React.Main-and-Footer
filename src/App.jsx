import { Component } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  state = {
    count: 0,
    movies: ['The Shawshank Redemption', 'Uncharted', 'Spider-man'],
  };

  render() {
    return (
      <>
        <Header movies={this.state.movies} />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
