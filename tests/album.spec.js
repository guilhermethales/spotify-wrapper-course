import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import SpotifyWrapper from '../src/index';
import { API_URL } from '../src/config';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Album', () => {
  let spotify;
  let fetchedStub;
  let promise;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo'
    });
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke Tests', () => {
    it('deve retornar se existe o método getAlbum', () => {
      expect(spotify.album.getAlbum).to.exist;
    });

    it('deve retornar se existe o método getAlbumTracks', () => {
      expect(spotify.album.getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('deve retornar se existe a chamada do fetch', () => {
      const album = spotify.album.getAlbum();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('deve retornar se o fetch é chamado com a url correta', () => {
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchedStub).to.have.been
        .calledWith(`${API_URL}/albums/4aawyAB9vmqN3uQ7FjRGTy`);

      const album2 = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
      expect(fetchedStub).to.have.been
        .calledWith(`${API_URL}/albums/4aawyAB9vmqN3uQ7FjRGTy`);
    });

    it('deve retornar se o dado é recebido pela promise', () => {
      promise.resolves({ album: 'name' });
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });

  describe('getAlbums', () => {
    it('deve retornar se a função fetch é chamada', () => {
      const albums = spotify.album.getAlbums();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('deve retornar se a função fetch é chamada com a url correta', () => {
      const albums = spotify.album.getAlbums('4aawyAB9vmqN3uQ7FjRGTy,1A2GTWGtFfWp7K');
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,1A2GTWGtFfWp7K`);

      const albums2 = spotify.album.getAlbums('382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOy');
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/albums/?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOy`);
    });

    it('deve retornar se o dado é recebido pela promise', () => {
      promise.resolves({ albums: 'name', xobi: 'xobi' });
      const albums = spotify.album.getAlbums('382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5ao');
      expect(albums.resolveValue).to.be.eql({ albums: 'name', xobi: 'xobi' });
    });
  });

  describe('getAlbumsTracks', () => {
    it('deve retornar se a função fetch é chamada', () => {
      const albumsTracks = spotify.album.getAlbumTracks();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('deve retornar se a função fetch é chamada com a url correta', () => {
      const albumsTracks = spotify.album.getAlbumTracks('12345');
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/albums/12345/tracks`);

      const albumsTracks2 = spotify.album.getAlbumTracks('123456');
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/albums/123456/tracks`);
    });

    it('deve retornar se o dado é recebido pela promise', () => {
      promise.resolves({ albums: 'name', tracks: 'tracks' });
      const albums = spotify.album.getAlbumTracks('123456');
      expect(albums.resolveValue).to.be.eql({ albums: 'name', tracks: 'tracks' });
    });
  });
});
