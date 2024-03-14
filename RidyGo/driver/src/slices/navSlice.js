import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: [],
  destination: [],
  travelTimeInformation: "",
  rideFare: [],
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
    setRideFare: (state, action) => {
      state.rideFare = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation, setOrder, setRideFare } = navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
// export const selectOrder = (state) => state.nav.order;
export const selectRideFare = (state) => state.nav.rideFare;
export default navSlice.reducer;
