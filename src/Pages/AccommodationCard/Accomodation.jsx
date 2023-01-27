
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Ratings from "../../Components/Ratings/Ratings"
import Collapse from '../../Components/Collapse/Collapse';
import Error from '../Error/Error';

import './Accommodation.css'
import { getAccommodationById } from '../../Api/Accommodations.api';

export default function Accommodation() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [hasLoaded, setHasLoaded] = useState(false); // vérifier si le produit a été loadé

    async function loadAccommodation() {
        const accommodation = await getAccommodationById(id)
        setProduct(accommodation);
        setHasLoaded(true);

    }
    useEffect(() => {
        loadAccommodation();
    }, [id]);


    if (hasLoaded && !product) {
        return (
            <Error />
        );
    }


    return (

        <div className="product">
            {(hasLoaded && product) && (
                <>
                    {/* <Slider /> */}
                    <div className="product-content">
                        <div className="product-content-left">
                            <h1 className="product-content-left__title">{product.title}</h1>
                            <p className="product-content-left__location">{product.location}</p>
                            <ul className="product-content-left__tags">
                                {product.tags.map((tag) => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="product-content-right">

                            <div className='host'>
                                <p>{product.host.name}</p>
                                <img src={product.host.picture} alt="host avatar" />
                            </div>
                            <div className='ratings'>
                                <Ratings score={product.rating} />
                            </div>
                        </div>
                        <div className="product-informations">
                            <Collapse texte={product.description} title="Description" />
                            <Collapse texte={product.equipments.map((e) => <li key={e}>{e}</li>)} title="Equipements" className="equipments" />
                        </div>
                    </div>
                </>
            )}


        </div>
    );

}



