import { Component } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  state = {
    movies: ['The Showshank Redemption', 'Uncharted', 'Spider-man 3'],
    selectedMovie: null,
  };

  selectMovie = (movie = null) => {
    this.setState({ selectedMovie: movie });
  };

  render() {
    return (
      <>
        <Header
          movies={this.state.movies}
          onSelectMovie={this.selectMovie}
          clearSelectedMovie={this.clearSelectedMovie}
        />
        <div className='spacer'></div>
        <Main selectedMovie={this.state.selectedMovie} />
        <div className='spacer'></div>
        <Footer selectedMovie={this.state.selectedMovie} />
      </>
    );
  }
}

export default App;
