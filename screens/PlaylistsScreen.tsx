import * as React from 'react'
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native'
import {Text, View} from '../components/Themed'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getPlayListsTC} from '../redux/PlayListReducer'
import {AppRootState} from '../redux/Store'
import Playlist from '../components/Playlist'
import {PlaylistsStackParamList} from '../navigation/RootNavigator'
import {StackNavigationProp} from '@react-navigation/stack'

type PropsType = {
    navigation: StackNavigationProp<PlaylistsStackParamList, 'Playlists'>;
};

export default function PlaylistsScreen({navigation}: PropsType) {
    const dispatch = useDispatch()
    const playlists = useSelector((state: AppRootState) => state.playLists.items)
    const header = useSelector((state: AppRootState) => state.playLists.message)
    useEffect(() => {
        dispatch(getPlayListsTC())
    }, [])




    // @ts-ignore
    //todo: check url for images
    const playlistsElements = playlists.map((el, i) => (<>
        <Text>{el.name}</Text>
        <Playlist key={i} playlist={el} image={el.images[0]} onPress={(playlistId)=>{
            navigation.navigate("PlaylistDetails", {id: playlistId,})
        }} /></>))

    return (
        <SafeAreaView style={styles.scrollArea}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <Text>{header}</Text>
                    <View>
                        {playlistsElements}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    scrollArea:{
        flex: 1,
    },
    scrollView:{

    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})
