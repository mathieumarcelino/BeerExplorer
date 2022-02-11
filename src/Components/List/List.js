// ----- IMPORT -----
import React, { useEffect, useState, useContext } from 'react';
import './List.css';
import Item from '../Item/Item';
import { AppContext } from "../../Context/AppContext";
import loading from '../../Assets/Icons/loading.gif';
// ------------------


const List = () => {

  const [context] = useContext(AppContext);

  const [state, setState] = useState({
    beers: [],
    loading: true,
  })

  useEffect(() => {

    setState({
      loading: true
    });

    let url = `https://api.punkapi.com/v2/beers?beer_name=${context.search}&per_page=6`;
    if (context.search !== ''){
      let name = context.search.replace(" ", "_");
      url = `https://api.punkapi.com/v2/beers?beer_name=${name}&page=${context.page}&per_page=6`;
    } else {
      url = `https://api.punkapi.com/v2/beers?page=${context.page}&per_page=6`;
    }

    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setState({
            beers: Array.from(result),
            loading: false,
          });
        }
      )
  }, [context.page, context.selected, context.search]);

  if (state.loading === true) {
    return (
      <section className="list">
        <div className="loading">
          <img className="loading-img" src={loading} alt="loading"></img>
        </div>
      </section>
    )
  } else if (state.beers.length === 0) {
    return (
      <section className="list">
        <div className="not-found">
          <span className="not-found-text">Unfortunately, we did not find any results ...</span>
        </div>
      </section>
    )
  } else {
    return (
      <section className="list">
        <div className="all-item-list">
          {state.beers.map((beer, index) => (
            <Item key={index} id={beer.id} img={beer.image_url} name={beer.name} tagline={beer.tagline} abv={beer.abv} hops={beer.ingredients.hops} malt={beer.ingredients.malt}/>
          ))}
        </div>
      </section>
    )
  }
}

export default List;