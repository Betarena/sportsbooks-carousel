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
let bettingSitesDataEs = myFirebase.child("sportsbooks_carrousel/es/");
let bettingSitesDataCo = myFirebase.child("sportsbooks_carrousel/co/");
let bettingSitesDataKe = myFirebase.child("sportsbooks_carrousel/ke/");

const generateDataDefault = () => bettingSitesData.update({
    "1 bet365": {
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
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Frame-96-1.png.webp",
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
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/betfair-svg.svg",
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
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Property-122-bet.svg",
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

const generateDataBr = () => bettingSitesDataBr.update({
    "1 Bet365": {
    "title": "Bet365",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/06/Bet365_Apostas.png",
    "review_link": "https://apostas.betarena.com/bet365-apostas-esportivas/",
    "stars": "5",
    "bonus": "+ R$200",
    "bonus_description": "Até 200 reais em bônus de apostas",
    "bonus_code": "Sem código",
    "register_link": "https://qg9t2.app.goo.gl/bet365_general",
    "information": "Abra uma conta na Bet365 hoje e aposte em uma grande variedade de mercados com a empresa de apostas esportivas online favorita do mundo.",
},
"3 188bet": {
    "title": "188bet",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/07/188bet_logo.svg",
    "review_link": "https://apostas.betarena.com/188bet-revisao-da-casa-de-apostas/",
    "stars": "4",
    "bonus": "+ R$200",
    "bonus_description": "Até 200 reais em bônus de apostas",
    "bonus_code": "Sem código",
    "register_link": "https://wl188bet.adsrv.eacdn.com/C.ashx?btag=a_7690b_846c_&affid=4191&siteid=7690&adid=846&c=apostasRightbar",
    "information": "Abra uma conta na 188bet hoje! A casa de apostas com odds asiáticas, as melhores do mercado!",
},
"4 Betfair": {
    "title": "Betfair",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/06/betfair_Apostas.svg",
    "review_link": "https://apostas.betarena.com/betfair-revisao-da-casa-de-apostas/",
    "stars": "4",
    "bonus": "+ R$1200",
    "bonus_description": "Bônus de 100% no primeiro depósito até R$1200",
    "bonus_code": "Sem código",
    "register_link": "http://ads.betfair.com/redirect.aspx?pid=2828099&bid=10183",
    "information": "Com mais de 20 anos no ramo, a empresa já está mais do que estabelecida no mercado.",
},
"5 Rivalo": {
    "title": "Rivalo",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/07/rivalo_logo.svg",
    "review_link": "https://apostas.betarena.com/rivalo-revisao-da-casa-de-apostas/",
    "stars": "4",
    "bonus": "+ R$300",
    "bonus_description": "Até 300 reais em bônus de apostas",
    "bonus_code": "Sem código",
    "register_link": "http://ads.betfair.com/redirect.aspx?pid=2828099&bid=10183",
    "information": "Abra uma conta na Rivalo hoje e aposte em uma grande variedade de mercados.",
},
"2 1xBet": {
    "title": "1xBet",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/06/1xbet_Apostas.png",
    "review_link": "https://apostas.betarena.com/1xbet-revisao-da-casa-de-apostas/",
    "stars": "4",
    "bonus": "+ R$1200",
    "bonus_description": "Bônus de 100% no primeiro depósito até R$1200",
    "bonus_code": "Sem código",
    "register_link": "https://refpa.top/L?tag=d_47346m_97c_BlogBR&site=47346&ad=97&r=bonus/rules/1st/",
    "information": "Com sua ampla gama de jogos e eventos para apostas, a 1xBet promete conquistar um espaço cada vez mais proeminente. Abra uma conta!",
},
"6 22Bet": {
    "title": "22Bet",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/06/22bet_Apostas.svg",
    "review_link": "https://apostas.betarena.com/22bet-revisao-da-casa-de-apostas/",
    "stars": "4",
    "bonus": "+ R$600",
    "bonus_description": "100% de bônus em depósitos até R$600",
    "bonus_code": "Sem código",
    "register_link": "https://qg9t2.app.goo.gl/22betdefault",
    "information": "Com algumas características emocionantes, a 22bet é mais uma casa de apostas com uma boa reputação no mercado de apostas esportivas. Cadastre-se agora!",
},
"7 Betboro": {
    "title": "Betboro",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/06/betboro_Apostas.svg",
    "review_link": "https://apostas.betarena.com/betboro-revisao-da-casa-de-apostas/",
    "stars": "4",
    "bonus": "+ R$500",
    "bonus_description": "50% de bônus no primeiro depósito até R$500",
    "bonus_code": "Sem código",
    "register_link": "https://promotions.bboro.com/pt/exclusivo-betarena?btag=37980",
    "information": "Embora ainda seja pouco conhecido pelo público em geral, a Betboro é uma das casas de apostas que mais crescem no mundo. Abra uma conta agora!",
},
});

const generateDataEs = () => bettingSitesDataEs.update({
    "1 bet365": {
    "title": "Bet365",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Frame-96.png",
    "review_link": "https://www.betarena.com/apuestas-deportivas-bet-365-review-2020/",
    "stars": "5",
    "bonus": "+ $50",
    "bonus_description": "Hasta 50 $ en créditos de apuesta",
    "bonus_code": "No se requiere código",
    "register_link": "https://qg9t2.app.goo.gl/bet365_general",
    "information": "Abre una cuenta con Bet365 hoy y apuesta en una amplia gama de mercados con la compañía de apuestas deportivas en línea favorita del mundo.",
},
    "2 1xbet": {
    "title": "1xBet",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Frame-96-1.png.webp",
    "review_link": "https://www.betarena.com/1xbet-resena-de-la-casa-de-apuestas/",
    "stars": "4",
    "bonus": "+ $100",
    "bonus_description": "Bono del 100% hasta 100$",
    "bonus_code": "No se requiere código",
    "register_link": "http://refpa.top/L?tag=d_47346m_2778c_&site=47346&ad=2778",
    "information": "Con su amplia oferta de juegos y eventos para apostar 1xBet promete conquistar un espacio cada vez más destacado. ¡Abre una cuenta!",
},
"3 Betfair": {
    "title": "Betfair",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/betfair-svg.svg",
    "review_link": "https://www.betarena.com/betfair-resena-de-la-casa-de-apuesta/",
    "stars": "4",
    "bonus": "+ $20",
    "bonus_description": "Realiza tu primera apuesta en Betfair de al menos 20$ y, si no ganas, te reembolsaremos 20$",
    "bonus_code": "No se requiere código",
    "register_link": "https://ads.betfair.com/redirect.aspx?pid=2772614&bid=10187&redirectURL=http://www.betfair.com/",
    "information": "¡Regístrate en Betfair! Con más de 20 años en el negocio, la empresa ya está más que establecida en el mercado.",
},
"4 22Bet": {
    "title": "22Bet",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Property-122-bet.svg",
    "review_link": "https://www.betarena.com/22bet-resena-de-la-casa-de-apuestas/",
    "stars": "4",
    "bonus": "+ $100",
    "bonus_description": "Bono del 100% hasta 100$",
    "bonus_code": "No se requiere código",
    "register_link": "https://qg9t2.app.goo.gl/22betdefault",
    "information": "22bet, con algunas características interesantes, es una casa de apuestas con una buena reputación en el mercado de las apuestas deportivas. ¡Regístrate ahora!",
}
});

const generateDataCo = () => bettingSitesDataCo.update({
    "1 Rivalo": {
        "title": "Rivalo",
        "image": "https://www.betarena.com/wp-content/uploads/2021/07/rivalo_logo.svg",
        "review_link": "https://www.betarena.com/rivalo-revision-de-la-casa-de-apuestas/",
        "stars": "5",
        "bonus": "+ $200K",
        "bonus_description": "Bono de $200.000",
        "bonus_code": "No se requiere código",
        "register_link": "https://qg9t2.app.goo.gl/rivalo_bonus",
        "information": "Abre una cuenta con Rivalo hoy y apuesta en una amplia gama de mercados.",
    },

    "3 1xbet": {
    "title": "1xBet",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Frame-96-1.png.webp",
    "review_link": "https://www.betarena.com/1xbet-resena-de-la-casa-de-apuestas/",
    "stars": "4",
    "bonus": "+ $100",
    "bonus_description": "Bono del 100% hasta 100$",
    "bonus_code": "No se requiere código",
    "register_link": "http://refpa.top/L?tag=d_47346m_2778c_&site=47346&ad=2778",
    "information": "Con su amplia oferta de juegos y eventos para apostar 1xBet promete conquistar un espacio cada vez más destacado. ¡Abre una cuenta!",
},
"2 Betfair": {
    "title": "Betfair",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/betfair-svg.svg",
    "review_link": "https://www.betarena.com/betfair-resena-de-la-casa-de-apuesta/",
    "stars": "5",
    "bonus": "+ $50K",
    "bonus_description": "Bono de $50.000",
    "bonus_code": "No se requiere código",
    "register_link": "https://ads.betfair.com/redirect.aspx?pid=2772614&bid=10187&redirectURL=http://www.betfair.com/",
    "information": "¡Regístrate en Betfair! Con más de 20 años en el negocio, la empresa ya está más que establecida en el mercado.",
},
"4 22Bet": {
    "title": "22Bet",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Property-122-bet.svg",
    "review_link": "https://www.betarena.com/22bet-resena-de-la-casa-de-apuestas/",
    "stars": "4",
    "bonus": "+ $100",
    "bonus_description": "Bono del 100% hasta 100$",
    "bonus_code": "No se requiere código",
    "register_link": "https://qg9t2.app.goo.gl/22betdefault",
    "information": "22bet, con algunas características interesantes, es una casa de apuestas con una buena reputación en el mercado de las apuestas deportivas. ¡Regístrate ahora!",
}
});

const generateDataKe = () => bettingSitesDataKe.update({
    "3 bet365": {
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
    "4 1xbet": {
    "title": "1xBet",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Frame-96-1.png.webp",
    "review_link": "https://www.betarena.com/1xbet-bookmaker-review/",
    "stars": "4",
    "bonus": "+ €100",
    "bonus_description": "100% Bonus up to €100",
    "bonus_code": "No code required",
    "register_link": "http://refpa.top/L?tag=d_47346m_2778c_&site=47346&ad=2778",
    "information": "With its wide range of matches and events for betting, the 1xBet promises to conquer an increasingly more prominent space in the sports betting market. Open an account and start winning!",
},
"2 Betfair": {
    "title": "Betfair",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/betfair-svg.svg",
    "review_link": "https://www.betarena.com/betfair-bookmaker-review/",
    "stars": "4",
    "bonus": "+ €20",
    "bonus_description": "Place your first bet on Betfair Exchange of at least €20 and if you don't win, we'll refund you €20",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/bet365_general",
    "information": "Register on Betfair! With more than 20 years in the business, the sportsbook is already more than established.",
},
"1 22Bet": {
    "title": "22Bet",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Property-122-bet.svg",
    "review_link": "https://www.betarena.com/22bet-bookmaker-review/",
    "stars": "5",
    "bonus": "+ KSH 15K",
    "bonus_description": "100% Bonus up to 15.000 KSH",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/22betdefault",
    "information": "With some exciting features, 22bet is one more bookmaker with a great reputation in the sports betting market. Register now!",
},
});

generateDataDefault();
generateDataPt();
generateDataBr();
generateDataEs();
generateDataCo();
generateDataKe();

}

    export default fullDataGeneration;