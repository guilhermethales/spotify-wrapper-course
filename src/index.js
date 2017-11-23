import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from './search';
import { getAlbum, getAlbums, getAlbumTracks } from './album';
import { API_URL } from '../src/config';

// export default {
// search,
// searchAlbums,
// searchArtists,
// searchTracks,
// searchPlaylists,
// getAlbum,
// getAlbums,
// getAlbumTracks,
// };

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;
  }
}
