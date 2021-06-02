import firebase from "firebase/app";
import "firebase/firebase-auth";
import { fireStart } from "./lib/init-firebase";

fireStart;

const mainDataSports = async () => {

const sportsBooksPath = `sportsbooks_carrousel/en/`;

const dbRef = firebase.database().ref(sportsBooksPath);

return dbRef.child("1xbet").get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    return snapshot.val();
  } else {
    console.log("No data available");
    return null;
  }
}).catch((error) => {
  console.error(error);
});

}

export default mainDataSports;




    /* const sportsBooksPath = `sportsbooks_carrousel/`;

    async function getSportsBooksData() {
  let ref = firebase.database().ref(sportsBooksPath);
  ref.on("value", (snap) => {
    snap.val();
    portsBooksResult = snap.val();
    // console.log(portsBooksResult);
    return portsBooksResult;
  });
}
getSportsBooksData(); */