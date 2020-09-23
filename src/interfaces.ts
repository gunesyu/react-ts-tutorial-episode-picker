export interface IState {
    episodes: any[],
    favorites: any[],
    list: string
}

export interface IAction {
    type: string,
    payload: any
}