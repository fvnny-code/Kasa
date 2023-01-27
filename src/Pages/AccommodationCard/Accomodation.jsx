
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import products from "../../Data/accommodations.json";
import Ratings from "../../Components/Ratings/Ratings"
import Collapse from '../../Components/Collapse/Collapse';
import Error from '../Error/Error';

import './Accommodation.css'

export default function Accommodation() {
    const { id } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        const foundProduct = products.find((p) => p.id === id);
        setProduct(foundProduct);
    }, [id]);

    if (product === undefined) {
        return (
            <Error />
        );
    }

    const listEquipments = product.equipments.map((e) => <li key={e}>{e}</li>);
    return (

        <div className="product">
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
                        <Ratings score={product.rating}/>
                    </div>
                </div>
                <div className="product-informations">
                    <Collapse  texte={product.description} title="Description" />
                    <Collapse texte={listEquipments} title="Equipements" className="equipments"/>
                </div>
            </div>
        </div>
    );

}



