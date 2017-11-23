import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import SpotifyWrapper from '../src/index';
import { API_URL, TOKEN_API, headers } from '../src/config';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('SpotifyWrapper Library', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  it('deve retornar uma instância do SpotifyWrapper', () => {
    let spotify = new SpotifyWrapper({});
    expect(spotify).to.be.an.instanceOf(SpotifyWrapper);
  });

  it('deve retornar se apiURL é uma opção', () => {
    let spotify = new SpotifyWrapper({
      apiURL: 'blabla'
    });
    expect(spotify.apiURL).to.be.equal('blabla');
  });

  it('deve retornar a url padrao, caso nenhuma opção seja passada', () => {
    let spotify = new SpotifyWrapper({});
    expect(spotify.apiURL).to.be.equal(`${API_URL}`);
  });

  it('deve retornar se o token está sendo passado no objeto', () => {
    let spotify = new SpotifyWrapper({
      token: TOKEN_API
    });
    expect(spotify.token).to.be.equal(TOKEN_API);
  });

  describe('Método Request', () => {
    it('deve retornar se existe o método request', () => {
      let spotify = new SpotifyWrapper({});
      expect(spotify.request).to.exist;
    });

    it('deve retornar o método request com a função fetch', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });
      spotify.request('url');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('deve retornar a chamada do fetch com a url correta', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });
      spotify.request('url');
      expect(fetchedStub).to.have.been.calledWith('url');
    });

    it('deve retornar a chamada do fetch com o headers correto', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });
      const headers = {
        headers: {
          Authorization: `Bearer ${spotify.token}`,
        },
      };
      spotify.request(headers);
      expect(fetchedStub).to.have.been.calledWith(headers);
    });
  });
});
