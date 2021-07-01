import firebase from "firebase/app";
import "firebase/firebase-auth";
import { fireStart } from "./lib/init-firebase";

fireStart;

const mainDataSports = async () => {

const sportsBooksPath = `sportsbooks_carrousel/`;

const dbRef = firebase.database().ref(sportsBooksPath);

return dbRef.child("en").get().then((snapshot) => {
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