const axios = require("axios");

const getTravelTime = async (origin, destination) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${destination}&key=AIzaSyDeJpCLAWlRgFul8TvXGiLP8lp1p5Mf0HQ`
    );
    console.log(response.data.rows[0].elements[0]);
  } catch (error) {
    console.error(error);
  }
};
// Path: user/src/Components/RouteMap/RouteMap.js
getTravelTime("Lahore, Pakistan", "Karachi, Pakistan");
