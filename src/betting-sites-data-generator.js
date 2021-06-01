import firebase from "firebase/app";
import "firebase/firebase-auth";
import { fireStart } from "./lib/init-firebase";

fireStart;

let myFirebase = firebase.database().ref();

// Get a reference to the recommendations object of your Firebase.
// Note: this doesn't exist yet. But when we write to our Firebase using
// this reference, it will create this object for us!
let bettingSitesData = myFirebase.child("betting_sites_carrousel/pt/");

// Push our first betting site data, we will use update to avoid generating a new ID
const generateData = () => bettingSitesData.update({
    betano: {
    "title": "",
    "image": "",
    "review_link": "",
    "stars": "",
    "bonus": "",
    "bonus_description": "",
    "bonus_code": "",
    "register_link": "",
    "information": "",
}
});


      export default generateData;