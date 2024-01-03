import dotenv from "dotenv";
dotenv.config();
const mapKey = process.env.MAPS_API_KEY;
import googleMapsClient from "@googlemaps/google-maps-services-js";

const client = googleMapsClient({ key: mapKey });

function getDistance(origin, destination) {
  client.distanceMatrix(
    {
      origins: [origin],
      destinations: [destination],
      travelMode: "DRIVING",
    },
    function (response, status) {
      if (status === "OK") {
        var distance = response.rows[0].elements[0].distance.text;
        console.log("Distance: " + distance);
      } else {
        console.error("Error:", status);
      }
    }
  );
}
let origin = "51.083759263834885, -114.06501950087413";
let destination = "51.11654828148908, -114.06999739201034";
getDistance(origin, destination);
