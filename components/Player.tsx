import React from 'react'
import {Button, StyleSheet, View,Text} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../redux/Store";
import {pauseTC, playTC} from "../redux/PlayerReducer";


export const Player = () => {

    const dispatch = useDispatch();
    const playerStatus = useSelector((state: AppRootState) => state.player.status)
    const trackName = useSelector((state: AppRootState) => state.player.trackNAme)
    const artist = useSelector((state: AppRootState) => state.player.artist)
    const songUrl = useSelector((state: AppRootState) => state.player.songUrl)

    const playOnPress = () =>(dispatch(playTC(songUrl)))
    const pauseOnPress = () => (dispatch(pauseTC(songUrl)))






    return <View style={styles.container}>
        <View style={styles.text} >
                    <Text>{artist}-{trackName}</Text>
        </View>
        {
            playerStatus === 'PAUSED'
            ?<View style={styles.button}>
                    <Button  title={"play"} onPress={playOnPress} />
             </View>
            :<View style={styles.button}>
                    <Button  title={"pause"} onPress={pauseOnPress} />
                </View>
        }

    </View>
}

const styles = StyleSheet.create({
    container:{
        height: 90,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems:'center'
    },
    text:{
        width: 150
    },
    button:{
        height:40,
        width:50,
        flexDirection:'row',
        justifyContent:"flex-end"
    }
})