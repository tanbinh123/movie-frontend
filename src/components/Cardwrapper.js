import React from "react"
import Card from './Card.js'
import '../styles/Lane.css';

function Cardwrapper({ array }) {


                
    return (
        <div>
            <ul className="cards-wrapper">
            
                {array.map((item) => (<Card item={item} />))
                }
            </ul>
        </div >
    );
};
export default Cardwrapper;