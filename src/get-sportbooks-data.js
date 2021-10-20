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

// Check country to load the correct betting sites

  function checkCountry () {
    if (country === "US") {
      country = "US";
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
    else if (country === "MX") {
      country = "MX";
    }
    else if (country === "KE") {
      country = "KE";
    }
    else if (country === "MZ") {
      country = "MZ";
    }
    else if (country === "AO") {
      country = "AO";
    }
    else if (country === "GB") {
      country = "UK";
    }
    else if (country === "IN") {
      country = "IN";
    }
    else if (country === "SG") {
      country = "SG";
    }
    else if (country === 'PE' || country === 'ES' || country === 'AR' || country === 'BO' || country === 'CL' || country === 'EC' || country === 'PY' || country === 'UY' || country === 'VE' || country === 'HN') {
      country = "ES";
    }
    else {
      country = "EN";
    } 
  }

checkCountry();

// Force country for testing
// country = "EN";


// console.log(`country = ${country}`);

  const sportsBooksPath = `sportsbook_details/`;

  const dbRef = firebase.database().ref(sportsBooksPath);

  try {
      const snapshot = await dbRef.child(country.toLowerCase()).get();

      if (snapshot.exists()) {
          let infoSportsResult = snapshot.val();
          let infoSportsResultArr = Object.values(infoSportsResult);
       //   console.log(infoSportsResultArr);

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