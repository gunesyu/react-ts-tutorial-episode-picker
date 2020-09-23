import React, { createContext } from 'react'

import { IState } from '../interfaces'

export const initialState: IState = {
    episodes: [],
    favorites: []
}

export const endpoint: string = 'https://api.tvmaze.com/singlesearch/shows?q=breaking-bad&embed=episodes'

export const Store = createContext<IState | any>(initialState);
