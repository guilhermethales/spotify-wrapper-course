import { searchAlbums } from '../src/main';
global.fetch = require('node-fetch');

const albums = searchAlbums('Detonautas');

albums
  .then(data => console.log(data));
