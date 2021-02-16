import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import {
  tvSHowsMock,
  genresMock,
  singleShowMock,
} from '../store/mocks';

describe('Home', () => {
  const wrapper = shallowMount(Home, {
    mocks: {
      $store: {
        dispatch: jest.fn(),
        getters: {
          getShows: tvSHowsMock,
          getGenres: jest.fn().mockReturnValue(genresMock),
        },
      },
    },
  });

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('should check if the component is mounted', () => {
    expect(!!wrapper.vm).toBeTruthy();
  });

  it('should sort the shows by genre', () => {
    const tvShow = wrapper.vm.sortByGenre('Thriller');
    expect(tvShow).toStrictEqual(singleShowMock);
  });
});
