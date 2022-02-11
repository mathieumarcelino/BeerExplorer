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
        const url = `https://api.punkapi.com/v2/beers/${id}`;
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
            {state.beer.map((beer, index) => (
            <Content key={index} id={beer.id} img={beer.image_url} name={beer.name} tagline={beer.tagline} description={beer.description} first_brewed={beer.first_brewed} volume={beer.volume} abv={beer.abv} hops={beer.ingredients.hops} malt={beer.ingredients.malt}/>
            ))}
            <Footer />
            </div>
        )
    }
}

export default Page;