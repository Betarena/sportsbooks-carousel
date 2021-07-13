import firebase from "firebase/app";
import "firebase/firebase-auth";
import { fireStart } from "./lib/init-firebase";

const mainDataSports = async () => {

  let url = "https://get.geojs.io/v1/ip/country.json";


        let langSportsCountry;

        const ipInfo = async () => {
          let response = await fetch(url)
          let json = await response.json()

          return json["country"]
        };
        
        langSportsCountry = ipInfo();

  fireStart;

const sportsBooksPath = `sportsbooks_carrousel/`;

const dbRef = firebase.database().ref(sportsBooksPath);

let country;

langSportsCountry.then((value) => {
      country = value;
      console.log(`country = ${country}`);
});

return dbRef.child(country).get().then((snapshot) => {
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