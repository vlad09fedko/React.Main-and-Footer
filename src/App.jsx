import { Component } from 'react';

import movies from './data/movies.js';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import styles from './App.module.css';

class App extends Component {
  state = {
    movies: movies,
    selectedMovie: null,
  };

  selectMovie = (movie = null) => {
    this.setState({ selectedMovie: movie });
  };

  render() {
    return (
      <>
        <Header movies={this.state.movies} onSelectMovie={this.selectMovie} />
        <div className={styles.spacer}></div>
        <Main selectedMovie={this.state.selectedMovie} />
        <div className={styles.spacer}></div>
        <Footer selectedMovie={this.state.selectedMovie} />
      </>
    );
  }
}

export default App;
