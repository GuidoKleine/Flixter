import Home from '@/views/Home.vue';
import { shallowMount } from '@vue/test-utils';
import {
  singleShowMock,
} from '../store/mocks';

describe('Home', () => {
  let wrapper;

  beforeEach(
    wrapper = shallowMount(Home),
  );

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('should sort the shows by genre', () => {
    const tvShow = wrapper.vm.sortByGenre('Thriller');
    expect(tvShow).toStrictEqual(singleShowMock);
  });
});
