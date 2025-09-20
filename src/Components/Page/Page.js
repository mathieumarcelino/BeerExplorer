// ----- IMPORT -----
import React, { useState, useEffect} from 'react';
import './Page.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Return from '../Return/Return';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import loading from '../../Assets/Icons/loading.gif';
// ------------------

const Page = () => {

    const [state, setState] = useState({
        beer: [],
        loading: true,
    })

    const { id } = useParams();

    useEffect(() => {
        const url = `https://punkapi.online/v3/beers/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(
        (result) => {
            setState({
                beer: result,
                loading: false,
            });
        }
        )
    }, [id]);
    if (state.loading === true) {
        return (
            <div className='page'>
            <Header />
            <Return />
            <div className="loading">
                <img className="loading-img" src={loading} alt="loading"></img>
            </div>
            <Footer />
            </div>
        )
    } else {
        return(
            <div className='page'>
            <Header />
            <Return />
            <Content key={state.beer.id} id={state.beer.id} img={state.beer.image} name={state.beer.name} tagline={state.beer.tagline} description={state.beer.description} first_brewed={state.beer.first_brewed} volume={state.beer.volume} abv={state.beer.abv} hops={state.beer.ingredients.hops} malt={state.beer.ingredients.malt}/>
            <Footer />
            </div>
        )
    }
}

export default Page;