import React, { createContext } from 'react'

import { IState } from '../interfaces'

export const initialState: IState = {}

export const Store = createContext<IState | any>(initialState);
