import React, { useContext } from 'react';

import { Store } from './Store/Store'

import Header from './Components/Header'

import './App.css';

function App(): JSX.Element {
  const { state, dispatch } = useContext(Store)

  console.log(state)

  return (
    <>
      <Header />
      <section>
        APP
      </section>
    </>
  );
}

export default App;
