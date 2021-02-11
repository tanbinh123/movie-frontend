import React from "react"
import Card from './Card.js'
import '../styles/Lane.css';

function Cardwrapper({ logo, title }) {

    // const vierkantsWortels = title.map(function(name){
    //     console.log(name)
    // })
                
    return (
        <div>
            <ul className="cards-wrapper">
                {logo.map((item) => (<Card item={item} />))
                }
            </ul>
        </div >
    );
};
export default Cardwrapper;