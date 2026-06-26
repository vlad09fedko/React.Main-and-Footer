import { Component } from 'react';
import styles from './footer.module.css'


export class Footer extends Component {
  render() {
    let adress = '';
    let email = '';
    let phoneNum = '';

    if (this.props.selectedMovie) {
      adress = this.props.selectedMovie.adress;
      email = this.props.selectedMovie.email;
      phoneNum = this.props.selectedMovie.phoneNum;
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
