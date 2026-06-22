import { Component } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  state = {
    movies: ['The Showshank Redemption', 'Uncharted', 'Spider-man 3'],
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
