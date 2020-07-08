import React from 'react'
import {StyleSheet, TouchableOpacity, View,Image} from 'react-native'
import {ImageType, PlaylistType} from '../api/Api'

type PropsType = {
    onPress: (playlistId: string) => void
    playlist: PlaylistType
    image: ImageType
}

const Playlist: React.FC<PropsType> = ({onPress, playlist, image}) => {

    return (
        <TouchableOpacity style={styles.container} onPress={() => {
            onPress(playlist.id)
        }}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: image ? image.url : "https://via.placeholder.com/150"
                }}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 150,
        margin: 10,
        backgroundColor: 'rgba(255,111,0,0.99)',
    },
    tinyLogo:{
        width: 150,
        height: 150,
    }
})

export default Playlist


