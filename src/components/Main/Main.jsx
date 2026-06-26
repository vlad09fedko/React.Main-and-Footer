import { Component } from 'react';
import styles from './main.module.css';

export class Main extends Component {
  render() {
    let plot = '';
    let listOfActors = [];
    let generalInformation = {};

    if (this.props.selectedMovie) {
      plot = this.props.selectedMovie.plot;
      listOfActors = [...this.props.selectedMovie.listOfActors];
      listOfActors.push('etc.');
      generalInformation = this.props.selectedMovie.generalInformation;
    }

    return (
      <>
        <main>
          <h3>Plot</h3>
          <p>{plot}</p>
          <h3>List of actors</h3>
          <ul>
            {listOfActors.map(actor => (
              <li key={actor}>{actor}</li>
            ))}
          </ul>
          <h3>General information</h3>
          <ul>
            {Object.entries(generalInformation).map(([key, value]) => (
              <li key={key}>{`${key}: ${value}`}</li>
            ))}
          </ul>
        </main>
      </>
    );
  }
}

export default Main;
