export interface IState {
    episodes: any[],
    favorites: any[]
}

export interface IAction {
    type: string,
    payload: any
}