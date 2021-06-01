import firebase from "firebase/app";
import "firebase/firebase-auth";
import { fireStart } from "./lib/init-firebase";

fireStart;

let myFirebase = firebase.database().ref();

// Push all our sportsbooks information, we will use update to avoid generating a new ID

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
    "1xbet": {
    "title": "1xBet",
    "image": "https://dev.betarena.com/wp-content/uploads/2021/04/Frame-96-1.png",
    "review_link": "https://www.betarena.com/1xbet-bookmaker-review/",
    "stars": "4",
    "bonus": "+ €100",
    "bonus_description": "100% Bonus up to €100",
    "bonus_code": "No code required",
    "register_link": "http://refpa.top/L?tag=d_47346m_2778c_&site=47346&ad=2778",
    "information": "With its wide range of matches and events for betting, the 1xBet promises to conquer an increasingly more prominent space in the sports betting market. Open an account and start winning!",
},
"Betfair": {
    "title": "Betfair",
    "image": "https://dev.betarena.com/wp-content/uploads/2021/05/betfair-svg.svg",
    "review_link": "https://www.betarena.com/betfair-bookmaker-review/",
    "stars": "4",
    "bonus": "+ €20",
    "bonus_description": "Place your first bet on Betfair Exchange of at least €20 and if you don't win, we'll refund you €20",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/bet365_general",
    "information": "Register on Betfair! With more than 20 years in the business, the sportsbook is already more than established.",
},
"22Bet": {
    "title": "22Bet",
    "image": "https://dev.betarena.com/wp-content/uploads/2021/05/Property-122-bet.svg",
    "review_link": "https://www.betarena.com/22bet-bookmaker-review/",
    "stars": "4",
    "bonus": "+ €100",
    "bonus_description": "100% Bonus up to €100",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/22betdefault",
    "information": "With some exciting features, 22bet is one more bookmaker with a great reputation in the sports betting market. Register now!",
},
"Betboro": {
    "title": "Betboro",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Betboro_logo_2.svg",
    "review_link": "https://www.betarena.com/betboro-bookmaker-review/",
    "stars": "4",
    "bonus": "+ €100",
    "bonus_description": "100% Bonus up to €100",
    "bonus_code": "No code required",
    "register_link": "https://promotions.bboro.com/pt/exclusivo-betarena-100?btag=37980",
    "information": "Although it is still little known by the general public, Betboro is a growing bookmaker globally. Open an account now!",
}
});

const generateDataPt = () => bettingSitesDataPt.update({
    "betano": {
    "title": "Betano",
    "image": "https://www.betarena.com/wp-content/uploads/2021/06/betano_icon2.svg",
    "review_link": "https://apostas.betarena.com/betano/",
    "stars": "5",
    "bonus": "+ €50",
    "bonus_description": "Bónus de 100% no primeiro depósito",
    "bonus_code": "Sem código",
    "register_link": "https://wlstoiximan.adsrv.eacdn.com/C.ashx?btag=a_1863b_289c_&affid=825&siteid=1863&adid=289&c=sportsbooks-carousel",
    "information": "Ao contrário de casas como o Placard de apostas, a Betano entra no mercado com um dos melhores bónus dos sites de apostas em Portugal.",
}
});

generateDataDefault();
generateDataPt();

}

    export default fullDataGeneration;