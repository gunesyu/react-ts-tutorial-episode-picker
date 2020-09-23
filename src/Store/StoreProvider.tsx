import React, { useReducer } from 'react'

import { Store, initialState } from './Store'
import reducer from './reducer'

export default function StoreProvider(props: any): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
}
