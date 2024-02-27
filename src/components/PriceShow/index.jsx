import React from 'react';
import { FaRegStar, FaRupeeSign } from "react-icons/fa";
import './style.scss';

const PriceShow = ({data}) => {
    return (
        <div>
            <h6><FaRegStar color="yellow" /> {data.rating}</h6>
            <FaRupeeSign /> {Math.floor(data.price)}
            {/* <ul>
                <li><h6><FaRegStar color="yellow" /> {data.rating}</h6></li>
                <li><FaRupeeSign /> {Math.floor(data.price)}</li>
            </ul> */}
        </div>
    )

}



export default PriceShow