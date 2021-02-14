import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  it('renders Home page', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper).toBe(true);
  });
});
