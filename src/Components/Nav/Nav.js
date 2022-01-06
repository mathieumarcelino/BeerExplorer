// ----- IMPORT -----
import React, { useContext } from 'react';
import './Nav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

import { AppContext } from "../../Context/AppContext";
// ------------------


const Nav = () => {

    const [context, setContext] = useContext(AppContext);

    function displayNumber(num, current){
        if(current > 7){
            return (current - 7) + num;
        } else {
            return num;
        }
    }

    function displaySelected(num, current){
        if((current > 7 && num === 7) || current === num){
            return "text-nav selected";
        } else {
            return "text-nav";
        }
    }

    const changePage = value => () => {
        let val = value;
        if(value <= 1){
            val = 1;
        }
        setContext({
            page: val,
            selected: context.selected,
            search: context.search,
            loading: false,
        });
    };

    return(
        <div className="nav">
            <div className="cont-button-nav" onClick={changePage(context.page - 1)}>
                <FontAwesomeIcon icon={faChevronCircleLeft} size="lg" />
            </div>
            <div className="cont-text-nav" onClick={changePage(displayNumber(1, context.page))}>
                <span className={displaySelected(1, context.page)}>{displayNumber(1, context.page)}</span>
            </div>
            <div className="cont-text-nav" onClick={changePage(displayNumber(2, context.page))}>
                <span className={displaySelected(2, context.page)}>{displayNumber(2, context.page)}</span>
            </div>
            <div className="cont-text-nav" onClick={changePage(displayNumber(3, context.page))}>
                <span className={displaySelected(3, context.page)}>{displayNumber(3, context.page)}</span>
            </div>
            <div className="cont-text-nav" onClick={changePage(displayNumber(4, context.page))}>
                <span className={displaySelected(4, context.page)}>{displayNumber(4, context.page)}</span>
            </div>
            <div className="cont-text-nav" onClick={changePage(displayNumber(5, context.page))}>
                <span className={displaySelected(5, context.page)}>{displayNumber(5, context.page)}</span>
            </div>
            <div className="cont-text-nav" onClick={changePage(displayNumber(6, context.page))}>
                <span className={displaySelected(6, context.page)}>{displayNumber(6, context.page)}</span>
            </div>
            <div className="cont-text-nav" onClick={changePage(displayNumber(7, context.page))}>
                <span className={displaySelected(7, context.page)}>{displayNumber(7, context.page)}</span>
            </div>
            <div className="cont-button-nav" onClick={changePage(context.page + 1)}>
                <FontAwesomeIcon icon={faChevronCircleRight} size="lg" />
            </div>
        </div>
    )
}

export default Nav;