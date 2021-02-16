import axios from 'axios';
import showServices from '@/services';
import {
  tvSHowsMock,
} from '../store/mocks';

jest.mock('axios');

describe('Test the services', () => {
  it('should get back data if succesfull', async () => {
    const data = tvSHowsMock;
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    expect(showServices.getAllShows()).resolves.toStrictEqual(data);
  });
});
