import firebase from "firebase/app";
import "firebase/firebase-auth";
import { fireStart } from "./lib/init-firebase";

fireStart;

let portsBooksResult = [];

const mainDataSports = () => {

    const sportsBooksPath = `sportsbooks_carrousel`;

    firebase.database().ref(sportsBooksPath)
    .orderBy("id", "asc")
    .onSnapshot(snapData => {
        portsBooksResult = snapData.docs;
    });

/* async function getSportsBooksData() {
  const sportsBooksPath = `sportsbooks_carrousel/`;
  let ref = firebase.database().ref(sportsBooksPath);
  ref.on("value", (snap) => {
    snap.val();
    portsBooksResult = snap.val();
  });
}
getSportsBooksData();*/

}

export default mainDataSports;

