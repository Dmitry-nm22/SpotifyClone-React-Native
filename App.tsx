import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import {Provider, useSelector} from 'react-redux'
import {AppRootState, store} from './redux/Store'
import {Player} from './components/Player'

export function App() {
    const isLoadingComplete = useCachedResources()
    const colorScheme = useColorScheme()
    const status = useSelector((state: AppRootState) => state.player.status)

    if (!isLoadingComplete) {
        return null
    } else {
        return (
            <SafeAreaProvider>
                <Navigation colorScheme={colorScheme}/>
                {/* <StatusBar/>*/}
                {status !== 'NONE' && <Player/>}
            </SafeAreaProvider>
        )
    }
}

export default function AppContainer() {

    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

