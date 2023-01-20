import LOGO from '../../Assets/LOGO.svg';
import Nav from '../../Components/Nav/Nav'
import './header.css';

;
export default function Header (){
    return(
        <header className='header-container'>
            <figure className='header-container__figure'>
                <img className='logo' src={LOGO} alt="Logo de l'agence Kasa" />
            </figure>
            <Nav className="nav-header" />
        </header>
    );
}