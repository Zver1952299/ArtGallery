import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { RootState } from '@reduxjs/toolkit/query';

export type FilterSliceState = {
  searchValue: string;
};

const initialState: FilterSliceState = {
  searchValue: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
