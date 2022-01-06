// ----- IMPORT -----
import React, { useEffect, useState, useContext } from 'react';
import './List.css';
import Item from '../Item/Item';
import { AppContext } from "../../Context/AppContext";
// ------------------


const List = () => {

  const [context] = useContext(AppContext);

  const [state, setState] = useState({
    beers: [],
  })

  useEffect(() => {

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
          });
        },
        (error) => {
          // setContext({
          //   country: context.country,
          // });
        }
      )
  }, [context.page, context.selected, context.search]);

    return (
      <section className="list">
        {state.beers.map((beer, index) => (
          <Item key={index} id={beer.id} img={beer.image_url} name={beer.name} tagline={beer.tagline} abv={beer.abv} hops={beer.ingredients.hops} malt={beer.ingredients.malt}/>
        ))}
      </section>
    )
  }

export default List;