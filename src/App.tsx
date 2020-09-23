import React, { useContext, useEffect } from 'react';

import { Store, endpoint } from './Store/Store'
import * as actions from './Store/actions'

import Header from './Components/Header'
import EpisodeList from './Components/EpisodeList'

import './App.css';

function App(): JSX.Element {
  const { state, dispatch } = useContext(Store)

  useEffect(() => {
    state.episodes.length === 0 && fetchEpisodes()
  })

  const fetchEpisodes = async () => {
    const data = await fetch(endpoint)
    const dataJSON = await data.json()
    return dispatch({
      type: actions.FETCH_EPISODES,
      payload: dataJSON._embedded.episodes
    })
  }

  console.log(state)

  return (
    <>
      <Header />
      <section>
        <EpisodeList episodes={state.episodes} favorites={state.favorites} />
      </section>
    </>
  );
}

export default App;
