// ----- IMPORT -----
import React, { useContext } from 'react';
import './Search.css';

import beer from '../../Assets/Icons/beer.png';

import { AppContext } from "../../Context/AppContext";
// ------------------

const Search = () => {

    const [context, setContext] = useContext(AppContext);

    function handleChange(event) {
        setContext({
            page: 1,
            selected: context.selected,
            search: event.target.value,
            loading: false,
        });
    }

    return(
        <section className="search">
            <div className="sub-search">
                <img className="img-search" src={beer} alt="beer ilustration"></img>
            </div>
            <div className="sub-search">
                <div className="box-text-search">
                    <div className="sub-box-text-search">
                        <span className="big-text-search">Discover <span className="orange">beers</span> from</span>
                        <span className="big-text-search">around the <span className="orange">world</span></span>
                    </div>
                    <div className="sub-box-text-search">
                        <span className="small-text-search">Find a beer and discover all its characteristics</span>
                    </div>
                    <div className="sub-box-search">
                        <input type="text" placeholder="search" className="input-search" onChange={handleChange}></input>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Search;