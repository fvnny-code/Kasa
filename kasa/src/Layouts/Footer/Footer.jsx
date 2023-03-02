import logo from '../../Assets/logo-footer.svg'
import './footer.css';

export default function Footer() {
    return(
        <footer className='footer-container'>
            <img  src={logo} alt="logo de l'agence Kasa"/>
            <p className='footer-container__text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

