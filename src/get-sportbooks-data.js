import firebase from "firebase/app";
import "firebase/firebase-auth";
import { fireStart } from "./lib/init-firebase";

const mainDataSports = async () => {

  const url = "https://get.geojs.io/v1/ip/country.json";

  const ipInfo = async () => {
        let response = await fetch(url);
        let json = await response.json();

        return json["country"];
  };

  fireStart;

  let country = await ipInfo(); 

  function checkCountry () {
    if (country === "US") {
      country = "EN";
    } else if (country === "PT") {
      country = "PT";
    }
    else if (country != "US", "BR", "PT", "CO") {
      country = "EN";
    } 
  }

checkCountry();

  console.log(`country = ${country}`);

  const sportsBooksPath = `sportsbooks_carrousel/`;

  const dbRef = firebase.database().ref(sportsBooksPath);

  try {
      const snapshot = await dbRef.child(country.toLowerCase()).get();

      if (snapshot.exists()) {
          let infoSportsResult = snapshot.val();
          let infoSportsResultArr = Object.values(infoSportsResult);
          console.log(infoSportsResultArr);

          return infoSportsResultArr;
      } else {
          console.log("No data available");
      }
  } catch (error) {
      console.error(error);
  }

  return [];
}

export default mainDataSports;