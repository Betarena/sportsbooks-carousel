import firebase from "firebase/app";
import "firebase/firebase-auth";
import { fireStart } from "./lib/init-firebase";

fireStart;

const mainLangTranslate = async () => {

    let platformCountry = "en";

    let TranslationPath = `translations/sportsbook_details/${platformCountry}`;

        let ref = firebase.database().ref(TranslationPath);
        ref.on("value", (snap) => {
          let translationResult = snap.val();
          console.log(translationResult);
          return translationResult;
        });
}

export default mainLangTranslate;