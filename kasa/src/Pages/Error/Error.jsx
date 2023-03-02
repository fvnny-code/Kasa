import { Link } from "react-router-dom";
import './error.css';

export default function Error() {
    return (
        <div className="error-container">
            <h1 className="error-number">404</h1>
            <p className="error-text">
                Oups ! La page que vous demandez n'existe pas.
            </p>
            <Link to="/" className="error-link-home">
                Retournez sur la page d'accueil
            </Link>
        </div>
    )
}