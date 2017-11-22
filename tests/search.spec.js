import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/search';
import { API_URL } from '../src/config';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Search', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke Tests', () => {
    it('deve retornar se existe o método search', () => {
      expect(search).to.exist;
    });

    it('deve retornar se existe o método searchAlbums', () => {
      expect(searchAlbums).to.exist;
    });

    it('deve retornar se existe o método searchArtists', () => {
      expect(searchArtists).to.exist;
    });

    it('deve retornar se existe o método searchTracks', () => {
      expect(searchTracks).to.exist;
    });

    it('deve retornar se existe o método searchPlaylists', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic search', () => {
    it('deve retornar se o método search chama uma função fetch', () => {
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('deve retornar a url correta para chamar a função fetch', () => {
      context('Passando um tipo', () => {
        const artists = search('Incubus', 'artist');
        expect(fetchedStub).to.have.been
          .calledWith(`${API_URL}/search?q=Incubus&type=artist`);

        const albums = search('Incubus', 'album');
        expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=Incubus&type=album`);
      });

      context('Passando mais de um tipo', () => {
        const artistsAndAlbums = search('Incubus', ['artist', 'album']);

        expect(fetchedStub).to.have.been
          .calledWith(`${API_URL}/search?q=Incubus&type=artist,album`);
      });
    });

    it('deve retornar o JSON DATA da Promise ', () => {
      promise.resolves({ body: 'json' });
      const artists = search('Incubus', 'artist');

      expect(artists.resolveValue).to.be.eql({ body: 'json' });
    });
  });

  describe('searchArtists', () => {
    it('deve retornar a função fetch', () => {
      const artists = searchArtists('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('deve retornar a função fetch com a url correta', () => {
      const query = 'Detonautas';
      const artists = searchArtists(query);

      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=${query}&type=artist`);
    });
  });

  describe('searchAlbums', () => {
    it('deve retornar a função fetch', () => {
      const albums = searchAlbums('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('deve retornar a função fetch com a url correta', () => {
      const query = 'Detonautas';
      const albums = searchAlbums(query);

      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=${query}&type=album`);
    });
  });

  describe('searchTracks', () => {
    it('deve retornar a função fetch', () => {
      const tracks = searchTracks('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('deve retornar a função fetch com a url correta', () => {
      const query = 'Detonautas';
      const tracks = searchTracks(query);

      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=${query}&type=track`);
    });
  });

  describe('searchPlaylists', () => {
    it('deve retornar a função fetch', () => {
      const playlists = searchPlaylists('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('deve retornar a função fetch com a url correta', () => {
      const query = 'Detonautas';
      const playlists = searchPlaylists(query);

      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=${query}&type=playlist`);
    });
  });
});
