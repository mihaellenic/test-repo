import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChartControlsSliceState, CountriesFilter, DataType } from "./types";

const initialState: ChartControlsSliceState = {
  countriesFilter: CountriesFilter.ALL,
  dataType: DataType.SALARIES
};

export const chartControlsSlice = createSlice({
  name: "chartControls",
  initialState,
  reducers: {
    setCountriesFilter: (state, action: PayloadAction<CountriesFilter>) => {
      state.countriesFilter = action.payload;
    },
    setDataType: (state, action: PayloadAction<DataType>) => {
      state.dataType = action.payload;
    }
  }
});

export const { setCountriesFilter, setDataType } = chartControlsSlice.actions;