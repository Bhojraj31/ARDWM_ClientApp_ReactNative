import {api} from '../services/index';
import {endpoints} from '../assets/constants/ApiConstants';
import {GetCountryResponse, GetCountryRequest} from '../types/';

export const GetCountryService = api.injectEndpoints({
  endpoints: build => ({
    getCountryApi: build.query<GetCountryResponse, GetCountryRequest>({
      query: () => ({
        method: 'GET',
        url: endpoints.countryApi,
      }),
    }),
  }),

  overrideExisting: false,
});

export const {useLazyGetCountryApiQuery} = GetCountryService;
