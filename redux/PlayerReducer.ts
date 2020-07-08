import {authAPI, PlaylistType, PlaylistDetailsType} from '../api/Api';
import {Dispatch} from 'redux'

const player = new Audio();


const GET_PLAYLISTS = 'GET_PLAYLISTS'
const GET_PLAYLIST_ID = 'GET_PLAYLIST_ID'
const SET_PLAYLIST = 'SET_PLAYLIST'
const SET_STATUS = 'SET_STATUS'
const SET_PLAYER_TRACK = 'SET_PLAYER_TRACK'
const SET_SONG_URL = 'SET_PLAY_URL'

export type PlayerStatus = "PAUSED" | "PLAYING" | "NONE"



let initialState = {
    status: "PLAYING" as PlayerStatus,
    trackNAme: '' as string,
    artist: '' as string,
    songUrl:'' as string,
    playListId: '',
    playingStatus: false,
    tracks: null as null | PlaylistDetailsType
}

type StateType = typeof initialState

type ActionsType =
    ReturnType<typeof getPlaylistsAC> |
    ReturnType<typeof getPlaylistIdAC> |
    ReturnType<typeof playingStatusAC> |
    ReturnType<typeof setPlayerTrackAC> |
    ReturnType<typeof setSongUrlAC> |
    ReturnType<typeof setSongsItemAC>

const PlayerReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case GET_PLAYLISTS:
            return {
                ...state,
            };
        case GET_PLAYLIST_ID:
            return {
                ...state,
                playListId: action.id
            };
        case SET_STATUS:
            return {
                ...state,
                status:  action.status
            };
        case SET_PLAYLIST:
            return {
                ...state,
                tracks: action.details
            }
        case SET_PLAYER_TRACK:
            return {
                ...state,
                trackNAme: action.name,
                artist: action.artist
            }
        case SET_SONG_URL:
            return {
                ...state,
                songUrl: action.url
            }
        default:
            return state
    }
}

//action creators
export const getPlaylistsAC = () => ({type: GET_PLAYLISTS } as const);
export const getPlaylistIdAC = (id: string) => ({type: GET_PLAYLIST_ID, id} as const);
export const playingStatusAC = (status: PlayerStatus) => ({type: SET_STATUS,status} as const);
export const setSongsItemAC = (details: PlaylistDetailsType) => ({type: SET_PLAYLIST, details} as const);
export const setPlayerTrackAC = (name: string,artist: string) => ({type:SET_PLAYER_TRACK,name,artist} as const);
export const setSongUrlAC = (url: string) => ({type:SET_SONG_URL,url} as const);


//thunk creators
export const getPlayListTC = (id:string) => {
    return (dispatch: Dispatch) => {
        authAPI.getPlayList(id)
            .then(res => {
                console.log(res)
                dispatch(getPlaylistIdAC(id))
                dispatch(setSongsItemAC(res))
            })
            .catch(e => {

                }
            )
    }
}

export const playTC = (url: string) => {
    return (dispatch: Dispatch) => {
        if (player.src !== url) {
            player.src = url;
        }
        player.play();
        dispatch(playingStatusAC('PLAYING'))
        dispatch(setSongUrlAC(url))

    }
}
export const pauseTC = (url: string) => {
    return (dispatch: Dispatch) => {
        player.src = url;
        player.pause();
        dispatch(playingStatusAC('PAUSED'))
        dispatch(setSongUrlAC(url))
    }
}
export default PlayerReducer

