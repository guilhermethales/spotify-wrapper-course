import { API_URL } from './config';
import { toJSON } from './utils';

const headers = {
  headers: {
    Authorization: 'Bearer BQBTN6pY5w2r3PrCzltOZAq2rXXBvXub-n95BmfTBm1SH0kJE2_Z_8mm316oZegRR9mq-MKHgbu5lDj3fDqzhZhmV0KiCBNAQHodRJvlwCaVKg3qmlFa2tdQwSIefMtWg-LEPbExxXvThTdGh_YFd79n5-YCtqAv43CoA5FEfUo8JYfCRS1bqlpoa31IS9vjeYfKG9w9IDu-0aaKmHGWWT-1A0qQS9uBnUCP4eE04iHl9GjWgTlLY9OFIIQTGvlbn7A8ugQyVwjE',
  },
};

const search = (query, type) =>
  fetch(`${API_URL}/search?q=${query}&type=${type}`, headers)
    .then(toJSON);

const searchArtists = query =>
  search(query, 'artist');

const searchAlbums = query =>
  search(query, 'album');

const searchTracks = query =>
  search(query, 'track');

const searchPlaylists = query =>
  search(query, 'playlist');

export { search, searchAlbums, searchArtists, searchTracks, searchPlaylists };
