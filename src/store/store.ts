import { configureStore } from "@reduxjs/toolkit";
import { chartControlsSlice } from "./chartControls/chartControls.slice";

export const store = configureStore({
  reducer: {
    chartControls: chartControlsSlice.reducer
  }
});

// Infer the `AppState` type from the store itself
export type AppState = ReturnType<typeof store.getState>