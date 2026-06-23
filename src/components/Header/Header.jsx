import { Component } from 'react';

export class Header extends Component {
  render() {
    const { movies, onSelectMovie } = this.props;
    return (
      <>
        <header>
          <h3>Movies:</h3>
          <ul>
            {movies.map(movie => (
              <li
                key={movie}
                className='card'
                onClick={() => onSelectMovie(movie)}>
                <img
                  src={`../../../assets/imgs/${movie.replaceAll(' ', '_')}.png`}
                  alt='poster'
                />
                <p>{movie}</p>
              </li>
            ))}
          </ul>
          <button className='clearBtn' onClick={() => onSelectMovie()}>
            Clear
          </button>
        </header>
      </>
    );
  }
}

export default Header;
