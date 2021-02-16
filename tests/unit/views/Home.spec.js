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
        getters: {
          getShows: tvSHowsMock,
          getGenres: genresMock,
        },
      },
    },
  });

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('should sort the shows by genre', () => {
    const tvShow = wrapper.vm.sortByGenre('Thriller');
    expect(tvShow).toStrictEqual(singleShowMock);
  });
});
