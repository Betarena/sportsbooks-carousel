import firebase from "firebase/app";
import "firebase/firebase-auth";
import { fireStart } from "./lib/init-firebase";

let url = "https://get.geojs.io/v1/ip/country.json";

const langSportsCountry = [];

/*
function pushTest () {
  langSportsCountry.push('teste');
};

pushTest();*/

// const langString = JSON.stringify(langSportsCountry);

const ipInfo = async () => {
  let fetchVar = fetch(url);

  return fetchVar
    .then((res) => res.json())
    .then((out) => {
      let geoResult = out;
      let geoResultArr = Object.values(geoResult)[0];
      langSportsCountry.push(geoResultArr);
      return langSportsCountry;
      // console.log(geoResultArr);
      // return geoResultArr;
    })
    .catch((err) => {
      throw err;
    });
};

ipInfo();


console.log(langSportsCountry);


/* async function ipInfo() {
  const response = await fetch('https://get.geojs.io/v1/ip/country.json');

  if (response.ok) {
    return response.json();
    
  } else {
    throw new Error(users);
  }
}*/


// let resultsGeoFiltered = ipInfo();


fireStart;

const mainDataSports = async () => {

const sportsBooksPath = `sportsbooks_carrousel/`;

const dbRef = firebase.database().ref(sportsBooksPath);

return dbRef.child(langSportsCountry).get().then((snapshot) => {
  if (snapshot.exists()) {
    let infoSportsResult = snapshot.val();
    let infoSportsResultArr = Object.values(infoSportsResult);
    console.log(infoSportsResultArr);
    return infoSportsResultArr;
  } else {
    console.log("No data available");
    return null;
  }
}).catch((error) => {
  console.error(error);
});

}

export default mainDataSports;