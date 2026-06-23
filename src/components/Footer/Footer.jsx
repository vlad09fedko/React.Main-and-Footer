import { Component } from 'react';

export class Footer extends Component {
  render() {
    const { selectedMovie } = this.props;
    let adress = null;
    let email = null;
    let phoneNum = null;

    switch (selectedMovie) {
      case 'The Showshank Redemption':
        adress = 'adress for Showshank';
        email = 'showshank@email.com';
        phoneNum = '+1 111 11 11';
        break;
      case 'Uncharted':
        adress = 'adress for Uncharted';
        email = 'uncharted@email.com';
        phoneNum = '+2 222 22 22';
        break;
      case 'Spider-man 3':
        adress = 'adress for Spider-man';
        email = 'spider@email.com';
        phoneNum = '+3 333 33 33';
        break;
      default:
        adress = '';
        email = '';
        phoneNum = '';
    }
    return (
      <>
        <footer>
          <ul>
            <li>{adress}</li>
            <li>{email}</li>
            <li>{phoneNum}</li>
          </ul>
        </footer>
      </>
    );
  }
}

export default Footer;
