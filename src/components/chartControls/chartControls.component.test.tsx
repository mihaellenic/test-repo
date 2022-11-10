import { ChartControlsComponent } from "./chartControls.component";
import { cleanup, render, screen } from "@testing-library/react";
import { CountriesFilter, DataType } from "../../store/chartControls/types";
import { Provider } from "react-redux";
import { chartControlsSlice, setCountriesFilter, setDataType } from "../../store/chartControls/chartControls.slice";
import { configureStore } from "@reduxjs/toolkit";
import fireEvent from "@testing-library/user-event"

beforeEach(() => {
  cleanup();
});

test("Renders options", () => {
  const store = configureStore({
    reducer: {
      chartControls: chartControlsSlice.reducer
    }
  });

  render(<Provider store={store}><ChartControlsComponent /></Provider>);

  expect(screen.getAllByTestId("countries-filter-option").length)
    .toBe(Object.entries(CountriesFilter).length);
  expect(screen.getAllByTestId("data-type-option").length)
    .toBe(Object.entries(DataType).length);
});

test("Default options are checked", () => {
  const store = configureStore({
    reducer: {
      chartControls: chartControlsSlice.reducer
    }
  });

  render(<Provider store={store}><ChartControlsComponent /></Provider>);

  expect(screen.getAllByTestId("countries-filter-option")[0].classList).toContain("Joy-checked");
  expect(screen.getAllByTestId("data-type-option")[0].classList).toContain("Joy-checked");
});

test("Custom options are checked", () => {
  const store = configureStore({
    reducer: {
      chartControls: chartControlsSlice.reducer
    }
  });

  store.dispatch(setCountriesFilter(Object.values(CountriesFilter)[1]));
  store.dispatch(setDataType(Object.values(DataType)[1]));

  render(<Provider store={store}><ChartControlsComponent /></Provider>);

  expect(screen.getAllByTestId("countries-filter-option")[1].classList).toContain("Joy-checked");
  expect(screen.getAllByTestId("data-type-option")[1].classList).toContain("Joy-checked");
});
