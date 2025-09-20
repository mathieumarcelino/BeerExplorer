// ----- IMPORT -----
import React from 'react';
import './Content.css';
import notFound from '../../Assets/Icons/not-found.png';
// ------------------


const Content = ({img, name, tagline, description, first_brewed, volume, abv, hops, malt}) => {

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
        if (e !== "" && e !== null) {
            return '/images/' + e
        } else {
            return notFound
        }
    }

    return(
        <div className="content">
            <div className="cont-img-content">
                <img className="img-content" src={validImage(img)} alt="beer"></img>
                <div className="bg-img-content"></div>
            </div>
            <div className="cont-text-content">
                <div className="cont-center-content">
                    <div className="subtitle-content">{tagline}</div>
                    <div className="title-content">{name}</div>
                    <div className="description-content">{description}</div>
                    <div className="sub-cont-description-content">
                        <div className="title-description-content">ABV</div>
                        <div className="text-description-content">{abv}%</div>
                    </div>
                    <div className="sub-cont-description-content">
                        <div className="title-description-content">Released</div>
                        <div className="text-description-content">{first_brewed}</div>
                    </div>
                    <div className="sub-cont-description-content">
                        <div className="title-description-content">Volume</div>
                        <div className="text-description-content">{volume.value} {volume.unit}</div>
                    </div>
                    <div className="sub-cont-description-content">
                        <div className="title-description-content">Hops</div>
                        <div className="text-description-content">{arrayToString(hops)}</div>
                    </div>
                    <div className="sub-cont-description-content">
                        <div className="title-description-content">Malt</div>
                        <div className="text-description-content">{arrayToString(malt)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;