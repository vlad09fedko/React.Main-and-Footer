import { Component } from 'react';

export class Header extends Component {
  render() {
    const movies = this.props.movies;
    return (
      <>
        <h2>Header</h2>
        <p>Movies:</p>
        <ul>
          {movies.map(movie => {
            const path = `../../../../../assets/imgs/${movie.replaceAll(' ', '_')}.png`;
            return (
              <div className='card'>
                <img src={path} alt='poster' />
                <p>{movie}</p>
              </div>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Header;
