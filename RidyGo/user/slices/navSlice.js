import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: [],
  destination: [],
  travelTimeInformation: "",
  order: [],
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
    setOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation, setOrder } =
  navSlice.actions;
//selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;
export const selectOrder = (state) => state.nav.order;

export default navSlice.reducer;
