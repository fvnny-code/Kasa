import React, { useState } from 'react';

import Left from '../../Assets/chevron-left.svg'
import Right from '../../Assets/chevron-right.svg'

import './Slider.css';

export default function Slider({ pictures }) {


    // Index du premier slide initialisé à 0
    const [current, setCurrent] = useState(0);

    // Si on est au dernier slide (pictures.length-1), le suivant sera le premier
    const nextSlide = () => {
        setCurrent(current === pictures.length - 1 ? 0 : current + 1)
    }
    //Si on est eu premier slide, le précédent sera le dernier de la liste  
    const prevSlide = () => {
        setCurrent(current === 0 ? pictures.length - 1 : current - 1)
    }



    return (
        <section id='slide-container'>
            {/* Affichage des flèches de défilement uniquement s'il y a plus d'une photo */}
            {pictures.length > 1 && (
                <img src={Left}
                    alt="chevron vers la gauche"
                    onClick={prevSlide}
                    className="chevronLeft" />
            )}
            {pictures.length > 1 && (
                <img src={Right}
                    alt="chevron vers la droite"
                    onClick={nextSlide}
                    className="chevronRight" />
            )}


            {/* récupération et affichage des images */}

            <div>
                <img
                    src={pictures[current]}
                    alt=" Photos de logement en location"
                    className='slider-image'
                />
                <strong className='image-number'>
                    {current + 1}/{pictures.length}
                </strong>

            </div>
        </section>
    )

}