import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from './search';
import album from './album';
import { API_URL } from '../src/config';
import { toJSON } from './utils';

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;

    this.album = album.bind(this)();
  }
  request (url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };
    fetch(url, headers).then(toJSON);
  }
}
