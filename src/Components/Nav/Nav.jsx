import { Link } from 'react-router-dom';
import '../Nav/nav.css'

export default function Nav(){
    return (
        <nav className="nav-header">
            <Link to="/" className='nav-header__link'>Accueil</Link>
            <Link to="/" className='nav-header__link'>A propos</Link>
        </nav>
    )
}

 