import firebase from "firebase/app";
import "firebase/firebase-auth";
import { fireStart } from "./lib/init-firebase";

fireStart;

const mainLangTranslate = async () => {
// extract the user location data country code;

  let contentDivClass = document.querySelector(".main_lang").textContent;

  contentDivClass = JSON.stringify(contentDivClass);
  contentDivClass = contentDivClass.substring(11, 13);

  // console.log(contentDivClass);

let platformCountry = contentDivClass.toLowerCase();

console.log(platformCountry);

// return translation data from the DB;
return firebase.database().ref(`translations/sportsbook_details/${platformCountry}`).get().then((snapshot) => {
    // check if the data exists (should exist at all times);
    if (snapshot.exists()) {

        // snap result
        let resultSnap = snapshot.val();

        // return the response as an Array;
        return resultSnap
    } else {
        throw new Error('Data from DB is incorrect');
    }
})
}

export default mainLangTranslate;