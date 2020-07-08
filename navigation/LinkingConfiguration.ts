import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Playlists: {
            screens: {
              Playlists: 'Playlists',
              PlaylistDetails: 'PlaylistDetails',
            },
          },
          Settings: {
            screens: {
              Settings: 'Settings',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
