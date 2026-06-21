import { Component } from 'react';

export class Header extends Component {
  render() {
    const movies = this.props.movies;
    return (
      <>
        <h2>Header</h2>
        <p>Movies:</p>
        <ul>
          {movies.map(movie => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Header;
