import { Component } from 'react';

export class Main extends Component {
  render() {
    const { selectedMovie } = this.props;
    let plot = null;
    let listOfActors = null;
    let generalInformation = null;

    switch (selectedMovie) {
      case 'The Showshank Redemption':
        plot =
          'An innocent banker convicted of murder spends decades in a dark prison, where he wins the respect of the prisoners, secretly breaks through a tunnel and makes a legendary escape.';
        listOfActors = ['Morgan Freeman', 'Tim Robbins'];
        generalInformation = {
          country: 'USA',
          studio: 'Castle Rock Entertainment & Sony Pictures',
          genre: 'Drama',
          releaseYear: '1994',
        };
        break;
      case 'Uncharted':
        plot =
          'Young adventurer Nathan Drake teams up with a seasoned adventurer to search for dangerous and epic treasures, following in the footsteps of Ferdinand Magellan.';
        listOfActors = ['Tom Holland', 'Mark Wahlberg'];
        generalInformation = {
          country: 'USA',
          studio: 'Sony Pictures Entertainment',
          genre: 'Action, Adventure',
          releaseYear: '2022',
        };
        break;
      case 'Spider-man 3':
        plot =
          'Peter Parker faces new deadly enemies, the betrayal of his best friend, and the dark essence of an alien symbiote that is driving him mad.';
        listOfActors = ['Tobey Maguire', 'Kirsten Dunst'];
        generalInformation = {
          country: 'USA',
          studio: 'Columbia Pictures, Marvel Studios & Sony Pictures',
          genre: 'Action, Superhero, Adventure',
          releaseYear: '2007',
        };
        break;
      default:
        plot = '';
        listOfActors = [];
        generalInformation = {};
    }
    if (listOfActors.length > 0) {
      listOfActors.push('etc.');
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
