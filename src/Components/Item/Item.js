// ----- IMPORT -----
import React from 'react';
import './Item.css';

import { Link } from 'react-router-dom';

import notFound from '../../Assets/Icons/not-found.png';
// ------------------

const Item = ({id, img, name, tagline, abv, hops, malt}) => {

    function arrayToString(arr){
        let str = '';
        let exist = [];
        for(let i=0; i<arr.length; i++){
            if(!exist.includes(arr[i]['name'])){
                if(exist.length !== 0){
                    str += ', ';
                }
                str += arr[i]['name'];
                exist.push(arr[i]['name']);
            }
        }
        return str;
    }

    function validImage(e){
        console.log(e);
        if (e !== "" && e !== null) {
            return e
        } else {
            return notFound
        }
    }

    return(
        <Link to={`/page/${id}`} className="item">
                <div className="box-img-item">
                    <img className="img-item" src={validImage(img)} alt="beer"></img>
                </div>
                <div className="box-text-item">
                    <span className="title-text-item">{name}</span>
                    <span className="subtitle-text-item">{tagline}</span>

                    <div className="cont-sub-box-text-item">
                        <div className="sub-box-text-item">
                            <span className="subtext-text-item">{arrayToString(hops)}</span>
                            <span className="subtext-text-item">{arrayToString(malt)}</span>
                        </div>
                        <div className="sub-box-text-item">
                            <span className="subtext-text-item">ABV {abv}%</span>
                        </div>
                    </div>
                </div>
        </Link>
    )
}

export default Item;