import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Text} from "./Themed";
import {SongType} from "../api/Api";
import {useDispatch} from "react-redux";
import {playingStatusAC, playTC, setPlayerTrackAC, setPlayUrlAC} from "../redux/PlayerReducer";


type PropsType = {
    track: SongType
}

const Song: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch();
    const isDisabled = props.track.track.preview_url ? {} : {'color':'rgba(255,255,255,0.55)'}
    const onPressForPlay = props.track.track.preview_url
        ? () => {
            dispatch(playTC(props.track.track.preview_url))
            dispatch(playingStatusAC('PLAYING'))
            dispatch(setPlayerTrackAC(props.track.track.album.artists[0].name, props.track.track.name))
        }
        : () =>{}


    return (
        <View style={styles.container}>
            <Text style={isDisabled} onPress={onPressForPlay}>{props.track.track.album.artists[0].name} - {props.track.track.name} </Text>
        </View>
    )
}
export default Song

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        padding:10,
        marginTop: 10,
        backgroundColor:'#a39696',
        borderStyle:'solid',
        borderColor:'#1c1a1a'
    },
})
