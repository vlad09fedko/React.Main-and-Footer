import { Component } from 'react';
import styles from './header.module.css'

export class Header extends Component {
  movies = this.props.movies
  onSelectMovie = this.props.onSelectMovie

  render() {
    return (
      <>
        <header>
          <h3>Movies:</h3>
          <ul>
            {this.movies.map(movie => (
              <li
                key={movie.id}
                className={styles.card}
                onClick={() => this.onSelectMovie(movie)}>
                <img
                  src={movie.imgPath}
                  alt='poster'
                />
                <p>{movie.title}</p>
              </li>
            ))}
          </ul>
          <button className={styles.clearBtn} onClick={() => this.onSelectMovie()}>
            Clear
          </button>
        </header>
      </>
    );
  }
}

export default Header;
