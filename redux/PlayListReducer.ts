import {authAPI, PlaylistType} from '../api/Api'
import {Dispatch} from 'redux'

const GET_PLAYLISTS = 'GET_PLAYLISTS'

let initialState = {
    message: '',
    items: [] as Array<PlaylistType>
};

type StateType = typeof initialState
type ActionsType = ReturnType<typeof getPlaylistsAC>

const PlayListReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case GET_PLAYLISTS:
            return {
                ...state,
                message: action.message,
                items: action.playlists.map(pl => ({...pl, items: []}))
            };
        default:
            return state
    }
}

//action creators
export const getPlaylistsAC = (playlists: Array<PlaylistType>, message: string) => ({type: GET_PLAYLISTS, playlists, message});

//thunk creators
export const getPlayListsTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.getPlayLists()
            .then(res => {
                let playlists = res.playlists.items;
                let message = res.message;
                dispatch(getPlaylistsAC(playlists, message))
            })
            .catch(e => {
                debugger
                    //dispatch(e)
                }
            )
    }
}


export default PlayListReducer

