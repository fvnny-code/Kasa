import LOGO from '../../Assets/LOGO.svg';

export default function Header (){
    return(
        <header className='header-container'>
            <figure className='header-container__figure'>
                <img className='logo' src={LOGO} alt="Logo de l'agence Kasa" />
            </figure>
        </header>
    );
}