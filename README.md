---

### Firebase config edit file init.firebase.js

```bash

cd carrousel-betting-sites/src/lib/
vim init-firebase.js
```

### Fill the necessary data here:

```javascript
import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/database";

//Firebase Connect

const fireStart = {

        apiKey: "",
        databaseURL: "",
        projectId: "",
        storageBucket: ""
}

// Initialize Firebase
firebase.initializeApp(fireStart);

export { fireStart }
```

###  You can add or change the sportsbooks on:

```bash

cd src/betting-sites-data-generator.js
vim betting-sites-data-generator.js
```

### Just add or replace the current information:

```javascript
const fullDataGeneration = () => { 

    // SPORTSBOOKS COUNTRIES PATH

let bettingSitesData = myFirebase.child("sportsbooks_carrousel/en/");
let bettingSitesDataPt = myFirebase.child("sportsbooks_carrousel/pt/");
let bettingSitesDataBr = myFirebase.child("sportsbooks_carrousel/br/");
let bettingSitesDataCo = myFirebase.child("sportsbooks_carrousel/co/");

const generateDataDefault = () => bettingSitesData.update({
    "bet365": {
    "title": "Bet365",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Frame-96.png",
    "review_link": "https://www.betarena.com/bet365/",
    "stars": "5",
    "bonus": "+ €50",
    "bonus_description": "Up to €50 in Bet Credits",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/bet365_general",
    "information": "Open an account with Bet365 today and bet on a huge range of markets with the world’s favourite online sports betting company.",
},
```


###  You can update the sportsbooks you want to generate to Firebase, just uncomment the following code and the generation button will be available:

```javascript
/*
<div class="btnDiv">
  <button class="btnWeb" on:click={fullDataGeneration}
    >Generate Sportsbooks</button
  >
</div>
*/
```





