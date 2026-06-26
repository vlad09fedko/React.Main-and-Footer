import { v4 as uuidv4 } from 'uuid';

class Movie {
  constructor(
    title,
    plot,
    listOfActors,
    generalInformation,
    adress,
    email,
    phoneNum,
  ) {
    this.id = uuidv4();
    this.title = title;
    this.imgPath = `../../../public/imgs/${this.title.replaceAll(' ', '_')}.png`;
    this.plot = plot;
    this.listOfActors = listOfActors;
    this.generalInformation = generalInformation;
    this.adress = adress;
    this.email = email;
    this.phoneNum = phoneNum;
  }
}

const movies = [
  new Movie(
    'The Showshank Redemption',
    'An innocent banker convicted of murder spends decades in a dark prison, where he wins the respect of the prisoners, secretly breaks through a tunnel and makes a legendary escape.',
    ['Morgan Freeman', 'Tim Robbins'],
    {
      country: 'USA',
      studio: 'Castle Rock Entertainment & Sony Pictures',
      genre: 'Drama',
      'release year': '1994',
    },
    'adress for Showshank',
    'showshank@email.com',
    '+1 111 11 11',
  ),
  new Movie(
    'Uncharted',
    'Young adventurer Nathan Drake teams up with a seasoned adventurer to search for dangerous and epic treasures, following in the footsteps of Ferdinand Magellan.',
    ['Tom Holland', 'Mark Wahlberg'],
    {
      country: 'USA',
      studio: 'Sony Pictures Entertainment',
      genre: 'Action, Adventure',
      'release year': '2022',
    },
    'adress for Uncharted',
    'uncharted@email.com',
    '+2 222 22 22',
  ),
  new Movie(
    'Spider-man 3',
    'Peter Parker faces new deadly enemies, the betrayal of his best friend, and the dark essence of an alien symbiote that is driving him mad.',
    ['Tobey Maguire', 'Kirsten Dunst'],
    {
      country: 'USA',
      studio: 'Columbia Pictures, Marvel Studios & Sony Pictures',
      genre: 'Action, Superhero, Adventure',
      'release year': '2007',
    },
    'adress for Spider-man',
    'spider@email.com',
    '+3 333 33 33',
  ),
];

export default movies;
