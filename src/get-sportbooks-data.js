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
    else if (country === "BR") {
      country = "BR";
    }
    else if (country === "CO") {
      country = "CO";
    }
    else if (country === "SG") {
      country = "SG";
    }
    else if (country === "PE", "ES", "AR", "BO", "CL", "EC", "PY", "UY", "VE", "HN") {
      country = "ES";
    }
    else if (country != "US", "BR", "PT", "CO", "PE", "ES", "SG") {
      country = "EN";
    } 
  }

checkCountry();

// country = "PT";


console.log(`country = ${country}`);

  const sportsBooksPath = `sportsbook_details/`;

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