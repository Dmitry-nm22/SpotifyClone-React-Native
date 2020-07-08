import * as React from 'react'
import {Image, SafeAreaView, ScrollView, StyleSheet} from 'react-native'
import {Text, View} from '../components/Themed'
import {useEffect} from 'react'
import {StackNavigationProp} from '@react-navigation/stack'
import {RouteProp} from '@react-navigation/native'
import {PlaylistsStackParamList} from '../navigation/RootNavigator'
import {useDispatch, useSelector} from 'react-redux'
import Song from "../components/Song";
import {AppRootState} from "../redux/Store";
import {getPlayListTC} from "../redux/PlayerReducer";



type PlaylistsDetailsScreenRouteProp = RouteProp<PlaylistsStackParamList, 'PlaylistDetails'>;

type PlaylistsDetailsScreenNavigationProp = StackNavigationProp<PlaylistsStackParamList, 'PlaylistDetails'>;

type PropsType = {
    route: PlaylistsDetailsScreenRouteProp;
    navigation: PlaylistsDetailsScreenNavigationProp;
};

export default function PlaylistDetailsScreen({route}: PropsType) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlayListTC(route.params.id))
    }, [])

    const playlist = useSelector((state: AppRootState) => state.player.tracks)

    const playlistDescr = playlist ? <>
        <Image
            style={styles.imgPlaylist}
            //todo: add placeholder if image doesnt present
            source={{ uri: playlist? playlist.images[0].url : 'https://via.placeholder.com/150' }}

        />
        <View>
            <Text >{playlist.name}</Text>
            <Text >{playlist.description}</Text>
        </View>
       </> : <Text>Loading....</Text>

    const songs = playlist ? playlist.tracks.items.map( (track, index) =>  (
        <>
                <Song key={index} track={track} />
            </>
    )) : <Text>Loading...</Text>


    return (
        <SafeAreaView  style={styles.container}>
            <View style={styles.header}>
                {playlistDescr}
            </View>
            <ScrollView>
                {songs}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        height:100,
        width: '100%',
        flexDirection:'row'
    },
    name:{
        color:'#000'
    },
    descr:{
        justifyContent:'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    imgPlaylist:{
        margin:10,
        height:80,
        width: 150
    },
    descrPlaylist:{
        color:'#000'
    },
})
