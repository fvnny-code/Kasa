import { useLocation } from "react-router-dom";
import products from "../../Data/accommodations.json";

import Error from '../Error/Error';


export default function Accommodation() {


    return
    //main container
    <main className="product-container">
    {/* <Slider /> */}
    <div className="product-content">
        <div className="product-content-left">
            <h1 className="product-content-left__title">{title}</h1>

        </div>

    </div>
    </main>

    //product-content
        // product-content-left
            //<h1> {title}</h1>
            //<p>{location}</p>
            //<ul>tags</ul>
        // product-content-right
            //<Host />
            //<Rating />
        // products-informations 
            //<Collapse  categorie="product" title="Description" content= {description}"/>   
            //<Collapse  categorie="product" title="Equipements" content= {equipements}"/>   


        }