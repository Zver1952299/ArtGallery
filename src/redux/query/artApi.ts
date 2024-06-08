import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { store } from './store';
// const currentPageValue = store.getState().filter.searchValue;
// console.log(currentPageValue);
// ${searchValue ? `q=${searchValue}` : `_limit=6&_page=${currentPage}`}

export const artApi = createApi({
  reducerPath: 'ArtApi',
  tagTypes: ['Arts'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test-front.framework.team/' }),
  endpoints: (build) => ({
    // getArt: build.query({
    //   query: ({ searchValue = '', currentPage = 1 }) =>
    //     `paintings?${!searchValue ? `_limit=6&_page=${currentPage}` : `q=${searchValue}`}`,
    //   providesTags: ['Arts'],
    // }),
    getArtByParams: build.query({
      query: ({
        searchValue,
        currentPage,
        valueAuthor,
        valueLocation,
        valueAgeFrom,
        valueAgeTo,
      }) =>
        `paintings?${!valueAuthor && !valueLocation && !searchValue && !valueAgeFrom && !valueAgeTo ? `_limit=6&_page=${currentPage}` : `${`q=${searchValue}`}${valueAuthor && `&authorId=${valueAuthor}`}${valueLocation && `&locationId=${valueLocation}`}${valueAgeFrom && `&created_gte=${valueAgeFrom}`}${valueAgeTo && `&created_lte=${valueAgeTo}`}`}`,
      providesTags: ['Arts'],
    }),

    getTotalArt: build.query({
      query: () => `paintings`,
    }),

    getTotalAuthors: build.query({
      query: () => `authors`,
    }),

    getTotalLocations: build.query({
      query: () => `locations`,
    }),
  }),
});

export const {
  useGetArtByParamsQuery,
  useGetTotalArtQuery,
  useGetTotalAuthorsQuery,
  useGetTotalLocationsQuery,
} = artApi;
