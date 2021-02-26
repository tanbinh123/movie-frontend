import React from "react"
import Card2 from './Card2.js'
import '../styles/Lane2.css';

export default function Cardwrapper2({ array }) {
    return (
        <div>
            <ul className="cards-wrapper2">
                {array.map((item) => (<Card2 item={item} />))
                }
            </ul>
        </div >
    );
};
