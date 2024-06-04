import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { store } from './store';
// const currentPageValue = store.getState().filter.searchValue;
// console.log(currentPageValue);

export const artApi = createApi({
  reducerPath: 'ArtApi',
  tagTypes: ['Arts'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test-front.framework.team/' }),
  endpoints: (build) => ({
    getArt: build.query({
      query: ({ searchValue = '', currentPage = 1 }) =>
        `paintings?${searchValue ? `q=${searchValue}` : `_limit=6&_page=${currentPage}`}`,
      providesTags: ['Arts'],
    }),
    getTotalArt: build.query({
      query: () => `paintings`,
    }),
  }),
});

export const { useGetArtQuery, useGetTotalArtQuery } = artApi;
