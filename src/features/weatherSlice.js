import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  weatherData: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchWeatherStart(state) {
      state.loading = true;
      state.error = null;
      state.weatherData = null;
    },
    fetchWeatherSuccess(state, action) {
      state.loading = false;
      state.weatherData = action.payload;
    },
    fetchWeatherFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure } =
  weatherSlice.actions;

export default weatherSlice.reducer;
