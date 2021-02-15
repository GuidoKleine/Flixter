import {
  cleanState,
  getters,
  actions,
} from '@/store';
import showServices from '@/services';
import {
  tvSHowsMock,
  singleShowMock,
  genresMock,
} from './mocks';

describe('Getters', () => {
  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('should return state.shows when getShows is called', () => {
    const shows = [];

    const returnShows = getters.getShows(cleanState);
    expect(returnShows).toStrictEqual(shows);
  });

  it('should return state.genres when getGenres is called', () => {
    const genres = [];

    const returnGenres = getters.getGenres(cleanState);
    expect(returnGenres).toStrictEqual(genres);
  });

  it('should return state.show when getSingleShowInfo is called', () => {
    const show = [];

    const returnShow = getters.getSingleShowInfo(cleanState);
    expect(returnShow).toStrictEqual(show);
  });

  it('should return state.searchOverlay when getSearchOverlay is called', () => {
    const returnOverlayStatus = getters.getSearchOverlay(cleanState);
    expect(returnOverlayStatus).toBeFalsy();
  });

  it('should return state.searchedShows when getSearchedShows is called', () => {
    const shows = [];

    const returnSearchedShows = getters.getSearchedShows(cleanState);
    expect(returnSearchedShows).toStrictEqual(shows);
  });
});
describe('Actions', () => {
  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('should commit SET_SHOWS when setShows action is called', async () => {
    jest.spyOn(showServices, 'getAllShows').mockReturnValue(tvSHowsMock);
    const commit = jest.fn();

    await actions.setShows({ commit });
    expect(commit).toHaveBeenCalledWith('SET_SHOWS', tvSHowsMock);
  });

  // Need to figure out
  it('should commit SET_GENRES when setGenres action is called', async () => {
    const commit = jest.fn();
    const state = {
      shows: tvSHowsMock,
    };
    jest.spyOn(showServices, 'getAllShows').mockReturnValue(state);

    await actions.setShows({ commit });
    await actions.setGenres({ commit });
    expect(commit).toHaveBeenCalledWith('SET_GENRES', genresMock);
  });

  it('should commit SET_SHOW when setShowInfo action is called', async () => {
    jest.spyOn(showServices, 'getSingleShow').mockReturnValue(singleShowMock);
    const commit = jest.fn();

    await actions.setShowInfo({ commit });
    expect(commit).toHaveBeenCalledWith('SET_SHOW', singleShowMock);
  });

  it('should commit SET_SEARCHOVERLAY when setSearchOverlay action is called', async () => {
    const commit = jest.fn();

    await actions.setSearchOverlay({ commit }, true);
    expect(commit).toHaveBeenCalledWith('SET_SEARCHOVERLAY', true);
  });

  it('should commit SET_SEARCHEDSHOWS when getSearchedQuery action is called', async () => {
    jest.spyOn(showServices, 'getSearchedQuery').mockReturnValue(singleShowMock);
    const commit = jest.fn();

    await actions.setSearchedShows({ commit }, singleShowMock);
    expect(commit).toHaveBeenCalledWith('SET_SEARCHEDSHOWS', singleShowMock);
  });
});
