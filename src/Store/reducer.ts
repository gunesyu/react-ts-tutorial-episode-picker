import { IState, IAction } from '../interfaces'
import * as actions from './actions'

function reducer(state: IState, action: IAction): IState {
    let newEpisodes: any[] = []

    switch (action.type) {
        case actions.FETCH_EPISODES:
            newEpisodes = action.payload
            return {...state, episodes: newEpisodes}
        default:
            return state
    }
}

export default reducer