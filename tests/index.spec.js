import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import SpotifyWrapper from '../src/index';
import { API_URL, TOKEN_API } from '../src/config';

describe('SpotifyWrapper Library', () => {
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
});
