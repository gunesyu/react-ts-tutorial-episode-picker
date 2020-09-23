import React, { useContext, useEffect, lazy, Suspense } from 'react';

import { Store, endpoint } from './Store/Store'
import { IAction } from './interfaces'
import * as actions from './Store/actions'

import Header from './Components/Header'
import Loader from './Components/Loader'

import './App.css';

const EpisodeList = lazy(() => import('./Components/EpisodeList'))

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

  const toggleFavorite = (episode: any): IAction => {
    const actionType = state.favorites.includes(episode) ? actions.REMOVE_FAVORITE : actions.ADD_FAVORITE;
    return dispatch({
      type: actionType,
      payload: episode
    })
  }

  const changeList = (): IAction => dispatch({
    type: actions.CHANGE_LIST_TYPE
  })

  return (
    <>
      <Header count={state.favorites.length} clickHandler={changeList} />
      <section>
        <Suspense fallback={<Loader />}>
          <EpisodeList episodes={state[state.list]} favorites={state.favorites} toggleFav={toggleFavorite} />
        </Suspense>
      </section>
    </>
  );
}

export default App;
