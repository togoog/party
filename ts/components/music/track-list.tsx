import * as Snabbdom from 'snabbdom-pragma'

import * as models from '../../models'
import * as Track from './track'

export default class TrackList {
  tracks: models.Track[]

  private placeholderTracks = [
    {
      id: '',
      name: 'Awakening',
      artists: [{id: '', name: 'Submotion Orchestra'}],
      images: [
        {
          width: 1000,
          height: 1000,
          url: 'https://ninjatune.net/images/releases/alium-main.jpg',
        },
      ],
      endpoint: '',
      began_playing: '',
      duration: 120,
      contributor: 'Jake Perkins',
    },
    {
      id: '',
      name: 'Run',
      artists: [{id: '', name: 'Air'}],
      images: [
        {
          width: 1000,
          height: 1000,
          url: 'https://i.scdn.co/image/671f5bc32e02cbca2568054b0f578e63b9e2fe31',
        },
      ],
      endpoint: '',
      began_playing: '',
      duration: 120,
      contributor: 'Bradley Rasmussen',
    },
    {
      id: '',
      name: 'Black Sands',
      artists: [{id: '', name: 'Bonobo'}],
      images: [
        {
          width: 1000,
          height: 1000,
          url: 'https://upload.wikimedia.org/wikipedia/en/4/49/Bonobo_-_Black_Sands.jpg',
        },
      ],
      endpoint: '',
      began_playing: '',
      duration: 120,
    },
  ]

  constructor(private id: string, private name: string) {
    this.tracks = this.placeholderTracks
  }

  render() {
    const trackListItems = this.tracks.map(t => Track.listItem(t))

    return (
      <div id={this.id}>
        <h2>{name}</h2>
        <ul class={{ tracks: true}}>
          {trackListItems}
        </ul>
      </div>
    )
  }
}
