(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spotifyWrapper"] = factory();
	else
		root["spotifyWrapper"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TOKEN_API = 'BQCXrHYSrj2iVEWXM7iHRdK0cE8ks7zeROvYwWxxBkyyxbCIMxwtaxenvNFOZK56HBEkv8MKVZPdRlZytS8BR1FHfDDiunrOvE3J62lbtBp8Z3q6Gk9SoQwIPFDP-PE_HomqjoA8nWUbeSu407KYw3J0LolP_qC2YCcO3feXeuQbvbSgYnSBU21aixX5v8WzQyVtYDPhmuD9skA2TrFJTTtQSmO3C1iIfdLsiP8d5M5jCpc_OewTpNfe6nQA83O7pHM2M5TSXa6d';

var API_URL = exports.API_URL = 'https://api.spotify.com/v1';

var headers = exports.headers = {
  headers: {
    Authorization: 'Bearer ' + TOKEN_API
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var toJSON = function toJSON(data) {
  return data.json();
};

exports.toJSON = toJSON;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _search = __webpack_require__(3);

var _album = __webpack_require__(4);

exports.default = {
  search: _search.search,
  searchAlbums: _search.searchAlbums,
  searchArtists: _search.searchArtists,
  searchTracks: _search.searchTracks,
  searchPlaylists: _search.searchPlaylists,
  getAlbum: _album.getAlbum,
  getAlbums: _album.getAlbums,
  getAlbumTracks: _album.getAlbumTracks
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbums = exports.search = undefined;

var _config = __webpack_require__(0);

var _utils = __webpack_require__(1);

var search = function search(query, type) {
  return fetch(_config.API_URL + '/search?q=' + query + '&type=' + type, _config.headers).then(_utils.toJSON);
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = __webpack_require__(0);

var _utils = __webpack_require__(1);

/* global fetch */

var getAlbum = function getAlbum(id) {
  return fetch(_config.API_URL + '/albums/' + id).then(_utils.toJSON);
};

var getAlbums = function getAlbums(ids) {
  return fetch(_config.API_URL + '/albums/?ids=' + ids).then(_utils.toJSON);
};

var getAlbumTracks = function getAlbumTracks(id) {
  return fetch(_config.API_URL + '/albums/' + id + '/tracks').then(_utils.toJSON);
};

exports.getAlbum = getAlbum;
exports.getAlbums = getAlbums;
exports.getAlbumTracks = getAlbumTracks;

/***/ })
/******/ ]);
});
//# sourceMappingURL=spotify-wrapper.umd.js.map