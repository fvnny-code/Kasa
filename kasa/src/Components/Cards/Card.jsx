import { Link } from "react-router-dom";

import Data from '../../Data/accommodations.json'
import './card.css'

export default function Card() {

    return (
        <main className="accommodation-section">
            <div className="accommodation-container">

                {Data.map(({ id, cover, title }) =>
                    <article key={id} className="card-accommodation__content">
                        <Link to={`/location/${id}`}>
                            <div className="card-accommodation__bg"></div>
                            <img src={cover} alt="logement en location" className="card-accommodation__cover" />
                            <p className="card-accommodation__title">{title}</p>
                        </Link>

                    </article>
                )}
            </div>

        </main>

    )
}