import {Ionicons} from '@expo/vector-icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import * as React from 'react'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import PlaylistsScreen from '../screens/PlaylistsScreen'
import PlaylistDetailsScreen from '../screens/PlaylistDetailsScreen'
import {RootParamList, PlaylistsParamList} from '../types'
import SettingsScreen from '../screens/SettingsScreen'

const Stack = createStackNavigator<RootParamList>()

export default function AppRootNavigator() {
    const colorScheme = useColorScheme()

    return (
        <Stack.Navigator
            initialRouteName="Playlists">
            <Stack.Screen
                name="Playlists"
                component={PlaylistsStackNavigator}
            />
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
            />
        </Stack.Navigator>
    )
}


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const PlaylistsStack = createStackNavigator<PlaylistsParamList>()

function PlaylistsStackNavigator() {
    return (
        <PlaylistsStack.Navigator>
            <PlaylistsStack.Screen
                name="Playlists"
                component={PlaylistsScreen}
                options={{headerTitle: 'Tab One Title'}}
            />
            <PlaylistsStack.Screen
                name="PlaylistDetails"
                component={PlaylistDetailsScreen}
                options={{headerTitle: 'Playlist Details'}}
            />
        </PlaylistsStack.Navigator>
    )
}

export type PlaylistsStackParamList = {
    Playlists: undefined;
    PlaylistDetails: { id: string };
};

