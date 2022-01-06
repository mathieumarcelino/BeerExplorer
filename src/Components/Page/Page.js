// ----- IMPORT -----
import React, { useState, useEffect} from 'react';
import './Page.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Return from '../Return/Return';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
// ------------------

const Page = () => {

    const [state, setState] = useState({
        beer: [],
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
            });
        }
        )
    }, [id]);

    return(
        <div>
        <Header />
        <Return />
        {state.beer.map((beer, index) => (
          <Content key={index} id={beer.id} img={beer.image_url} name={beer.name} tagline={beer.tagline} description={beer.description} first_brewed={beer.first_brewed} volume={beer.volume} abv={beer.abv} hops={beer.ingredients.hops} malt={beer.ingredients.malt}/>
        ))}
        <Footer />
        </div>
    )
}

export default Page;