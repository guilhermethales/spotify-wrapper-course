'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbums = exports.search = undefined;

var _config = require('./config');

var _utils = require('./utils');

var headers = {
  headers: {
    Authorization: 'Bearer BQC4XmYYwsKaJ7bNp3SW9ZDqz3J1zdNup5TbIyTgJctCyVHfTjxIWEg8zBQ2yRmGvbjwgT59Gz5e48vC2H8rUWHUHHRQ8tl54UIabHVrvCj1u5VXkwn1dFKwE43Bq_VqXMKsFvQOi8Wj3WW5DZsnbdQ1VkMSkMjJYRLy9ogq8tcPYUVidTTDpzXYpFVH-fjY76_pdlWwrvum3-dr0w0RFXSzbkAdHg9XMQec5jlm4XdPS_Mp3PLVW0eodr6AGYP9vi9PhwalNC9B'
  }
};

var search = function search(query, type) {
  return fetch(_config.API_URL + '/search?q=' + query + '&type=' + type, headers).then(_utils.toJSON);
};

var searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};

var searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};

var searchTracks = function searchTracks(query) {
  return search(query, 'track');
};

var searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};

exports.search = search;
exports.searchAlbums = searchAlbums;
exports.searchArtists = searchArtists;
exports.searchTracks = searchTracks;
exports.searchPlaylists = searchPlaylists;