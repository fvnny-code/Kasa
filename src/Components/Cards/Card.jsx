import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
// import { AccommodationList } from '../../Data/AccommodationList';
import './card.css'

export default function Card({ cover, title }) { // on récupère les couvertures et titres des card depuis les data
   const [data, setData] = useState([]);
   
   useEffect(()=>{
    axios.get("/accommodations.json").then((res)=> setData(res.data));
   }, []);

    return (
        <main className="accommodation-section">
            <div className="accommodation-container">
                {data.map(({ id, cover, title }) =>
                    <article key={id} className="card-accommodation__content">
                        <Link to={`/location/${id}`}>
                            <div className="card-accommodation__bg"></div>
                            <img src={cover} alt="logement en location" className="card-accommodation__cover"/>
                            <p className="card-accommodation__title">{title}</p>
                        </Link>
                    </article>
                )}
            </div>

        </main>

    )
}