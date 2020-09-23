import { IState, IAction } from '../interfaces'
import * as actions from './actions'

function reducer(state: IState, action: IAction): IState {
    let newEpisodes: any[] = []
    let newFavorites: any[] = []
    let newList: string = ''

    switch (action.type) {
        case actions.FETCH_EPISODES:
            newEpisodes = action.payload
            return {...state, episodes: newEpisodes}
        case actions.ADD_FAVORITE:
            newFavorites = [...state.favorites, action.payload]
            return {...state, favorites: newFavorites}
        case actions.REMOVE_FAVORITE:
            newFavorites = [...state.favorites.filter((fav: any) => fav.id !== action.payload.id)]
            return {...state, favorites: newFavorites}
        case actions.CHANGE_LIST_TYPE:
            newList = state.list === "episodes" ? "favorites" : "episodes"
            return {...state, list: newList}
        default:
            return state
    }
}

export default reducer