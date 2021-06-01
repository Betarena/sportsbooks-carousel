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
