import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://afternoon-waters-49321.herokuapp.com/v1/'
})

type PlaylistTypes = 'playlist'

export type ImageType = {
    'height': null | number
    'url': string
    'width': null | number
}
export type PlaylistType = {
    'collaborative': boolean
    'description': string
    'external_urls': {
        'spotify': string
    }
    'href': string
    'id': string
    'images': Array<ImageType>
    'name': string
    'owner': {
        'display_name': string,
        'external_urls': {
            'spotify': string
        },
        'href': string,
        'id': string,
        'type': string,
        'uri': string
    }
    'primary_color': null | string
    'public': null | string
    'snapshot_id': string
    'tracks': {
        'href': string
        'total': number
    },
    'type': PlaylistTypes
    'uri': string

}

export type PlaylistDetailsType = {
    'collaborative': boolean,
    'description': string,
    'external_urls': {
        'spotify': string
    },
    'followers': {
        'href': null,
        'total': number
    },
    'href': string,
    'id': string,
    'images': Array<ImageType>,
    'name': string,
    'owner': {
        'display_name': string,
        'external_urls': {
            'spotify': string
        },
        'href': string,
        'id': string,
        'type': string,
        'uri': string
    },
    'primary_color': null,
    'public': true,
    'snapshot_id': string,
    'tracks': {
        'href': string,
        'items': Array<SongType>,
        'limit': number,
        'next': string,
        'offset': number,
        'previous': null,
        'total': number
    },
    'type': string,
    'uri': string
}


export type SongType = {

    'added_at': string,
    'added_by': {
        'external_urls': {
            'spotify': string
        },
        'href': string,
        'id': string,
        'type': string,
        'uri': string
    },
    'is_local': false,
    'primary_color': null,
    'track': {
        'album': {
            'album_type': string,
            'artists': [
                {
                    'external_urls': {
                        'spotify': string
                    },
                    'href': string,
                    'id': string,
                    'name': string,
                    'type': string,
                    'uri': string
                }
            ],
            'external_urls': {
                'spotify': string
            },
            'href': string,
            'id': string,
            'images': [
                {
                    'height': number,
                    'url': string,
                    'width': number
                },
                {
                    'height': number,
                    'url': string,
                    'width': number
                },
                {
                    'height': number,
                    'url': string,
                    'width': number
                }
            ],
            'name': string,
            'release_date': string,
            'release_date_precision': string,
            'total_tracks': number,
            'type': string,
            'uri': string
        },
        'artists': [
            {
                'external_urls': {
                    'spotify': string
                },
                'href': string,
                'id': string,
                'name': string,
                'type': string,
                'uri': string
            }
        ],
        'available_markets': [],
        'disc_number': number,
        'duration_ms': number,
        'episode': false,
        'explicit': false,
        'external_ids': {
            'isrc': string
        },
        'external_urls': {
            'spotify': string
        },
        'href': string,
        'id': string,
        'is_local': false,
        'name': string,
        'popularity': number,
        'preview_url': string,
        'track': true,
        'track_number': number,
        'type': string,
        'uri': string
    },
    'video_thumbnail': {
        'url': null
    }
}

type GetPlayListsResponseType = {
    'message': string,
    'playlists': {
        'href': string
        'items': Array<PlaylistType>
    }
    items: Array<PlaylistDetailsType>
}

export const authAPI = {
    getPlayLists() {
        return instance.get<GetPlayListsResponseType>('browse/featured-playlists')
            .then(res => res.data)
    },
    getPlayList(id: string) {
        return instance.get<PlaylistDetailsType>(`playlists/${id}`)
            .then(res => res.data)

    }
}
