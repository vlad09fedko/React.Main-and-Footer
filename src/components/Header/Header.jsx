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
              <div
                key={movie}
                className='card'
                onClick={() => onSelectMovie(movie)}>
                <img
                  src={`../../../assets/imgs/${movie.replaceAll(' ', '_')}.png`}
                  alt='poster'
                />
                <p>{movie}</p>
              </div>
            ))}
          </ul>
        </header>
      </>
    );
  }
}

export default Header;
