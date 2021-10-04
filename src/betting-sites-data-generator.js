import firebase from "firebase/app";
import "firebase/firebase-auth";
import { fireStart } from "./lib/init-firebase";

fireStart;

let myFirebase = firebase.database().ref();

// Push all our sportsbooks information, we will use update to avoid generating a new ID

const fullDataGeneration = () => { 

    // SPORTSBOOKS COUNTRIES PATH

let bettingSitesData = myFirebase.child("sportsbook_details/en/");
let bettingSitesDataPt = myFirebase.child("sportsbook_details/pt/");
let bettingSitesDataBr = myFirebase.child("sportsbook_details/br/");
let bettingSitesDataEs = myFirebase.child("sportsbook_details/es/");
let bettingSitesDataCo = myFirebase.child("sportsbook_details/co/");
let bettingSitesDataKe = myFirebase.child("sportsbook_details/ke/");
let bettingSitesDataMx = myFirebase.child("sportsbook_details/mx/");
let bettingSitesDataMz = myFirebase.child("sportsbook_details/mz/");
let bettingSitesDataAo = myFirebase.child("sportsbook_details/ao/");
let bettingSitesDataUs = myFirebase.child("sportsbook_details/us/");
let bettingSitesDataUk = myFirebase.child("sportsbook_details/uk/");
let bettingSitesDataIn = myFirebase.child("sportsbook_details/in/");
let bettingSitesDataSg = myFirebase.child("sportsbook_details/sg/");

// let extraData = myFirebase.child("featured_betting_sites/ch/");

const generateDataDefault = () => bettingSitesData.update({
    "1 bet365": {
    "title": "Bet365",
    "position": "1",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Frame-96.png",
    "review_link": "https://www.betarena.com/bet365/",
    "stars": "5",
    "bonus": "+€50",
    "bonus_description": "Up to €50 in Bet Credits",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/bet365_general",
    "information": "Open an account with Bet365 today and bet on a huge range of markets with the world’s favourite online sports betting company.",
},
    "2 1xbet": {
    "title": "1xBet",
    "position": "2",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Frame-96-1.png.webp",
    "review_link": "https://www.betarena.com/1xbet-bookmaker-review/",
    "stars": "4",
    "bonus": "+€100",
    "bonus_description": "100% Bonus up to €100",
    "bonus_code": "No code required",
    "register_link": "http://refpa.top/L?tag=d_47346m_2778c_&site=47346&ad=2778",
    "information": "With its wide range of matches and events for betting, the 1xBet promises to conquer an increasingly more prominent space in the sports betting market. Open an account and start winning!",
},
"3 Betfair": {
    "title": "Betfair",
    "position": "3",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/betfair-svg.svg",
    "review_link": "https://www.betarena.com/betfair-bookmaker-review/",
    "stars": "4",
    "bonus": "+€20",
    "bonus_description": "Place your first bet on Betfair Exchange of at least €20 and if you don't win, we'll refund you €20",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/betfair_uk",
    "information": "Register on Betfair! With more than 20 years in the business, the sportsbook is already more than established.",
},
"4 22Bet": {
    "title": "22Bet",
    "position": "4",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Property-122-bet.svg",
    "review_link": "https://www.betarena.com/22bet-bookmaker-review/",
    "stars": "4",
    "bonus": "+€100",
    "bonus_description": "100% Bonus up to €100",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/22betdefault",
    "information": "With some exciting features, 22bet is one more bookmaker with a great reputation in the sports betting market. Register now!",
},
"5 Betboro": {
    "title": "Betboro",
    "position": "5",    
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Betboro_logo_2.svg",
    "review_link": "https://www.betarena.com/betboro-bookmaker-review/",
    "stars": "4",
    "bonus": "+€100",
    "bonus_description": "100% Bonus up to €100",
    "bonus_code": "No code required",
    "register_link": "https://promotions.bboro.com/pt/exclusivo-betarena-100?btag=37980",
    "information": "Although it is still little known by the general public, Betboro is a growing bookmaker globally. Open an account now!",
}
});

const generateDataPt = () => bettingSitesDataPt.update({
"1 betano": {
    "title": "Betano",
    "position": "1",
    "image": "https://www.betarena.com/wp-content/uploads/2021/06/betano_icon2.svg",
    "review_link": "https://apostas.betarena.com/betano/",
    "stars": "5",
    "bonus": "+€50",
    "bonus_description": "Bónus de 100% no primeiro depósito",
    "bonus_code": "Sem código",
    "register_link": "https://wlstoiximan.adsrv.eacdn.com/C.ashx?btag=a_1863b_289c_&affid=825&siteid=1863&adid=289&c=sportsbooks-carousel",
    "information": "Ao contrário de casas como o Placard de apostas, a Betano entra no mercado com um dos melhores bónus dos sites de apostas em Portugal.",
},
"2 betclic": {
    "title": "Betclic",
    "position": "2",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/08/betclic.svg",
    "review_link": "https://apostas.betarena.com/betclic-apostas-desportivas/",
    "stars": "4",
    "bonus": "+€50",
    "bonus_description": "20 euros sem risco!",
    "bonus_code": "Sem código",
    "register_link": "https://www.betclic.pt/registar/step1?id=IAC8&z=a_656b_62c_sportsbook_carrousel&zone=a_656b_62c_sportsbook_carrousel&affid=455&siteid=656",
    "information": "A Betclic foi das primeiras casas de apostas em Portugal, com muitos mercados disponíveis e a melhor aplicação móvel no mercado.",
},
"3 Betway": {
    "title": "Betway",
    "position": "3",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/08/betway_icon.svg",
    "review_link": "https://apostas.betarena.com/betway-apostas-desportivas/",
    "stars": "3",
    "bonus": "+€100",
    "bonus_description": "Bónus até 100€ euros",
    "bonus_code": "Sem código",
    "register_link": "https://qg9t2.app.goo.gl/betway_default",
    "information": "Uma casa de apostas já tradicional e bem conhecida por toda a Europa.",
},
"4 ESC": {
    "title": "ESC",
    "position": "4",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/08/esc.svg",
    "review_link": "https://apostas.betarena.com/esc-online-apostas-desportivas/",
    "stars": "2",
    "bonus": "+€10",
    "bonus_description": "Freebet de 10€ + Bónus 250€",
    "bonus_code": "Sem código",
    "register_link": "https://qg9t2.app.goo.gl/esc_default",
    "information": "Uma casa de um operador tradicional que tenta mostrar o seu valor!",
}
});

const generateDataBr = () => bettingSitesDataBr.update({
    "1 Bet365": {
    "title": "Bet365",
    "position": "1",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/06/Bet365_Apostas.png",
    "review_link": "https://apostas.betarena.com/bet365-apostas-esportivas/",
    "stars": "5",
    "bonus": "+R$200",
    "bonus_description": "Até 200 reais em bônus de apostas",
    "bonus_code": "Sem código",
    "register_link": "https://qg9t2.app.goo.gl/bet365_general",
    "information": "Abra uma conta na Bet365 hoje e aposte em uma grande variedade de mercados com a empresa de apostas esportivas online favorita do mundo.",
},
"3 188bet": {
    "title": "188bet",
    "position": "2",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/07/188bet_logo.svg",
    "review_link": "https://apostas.betarena.com/188bet-revisao-da-casa-de-apostas/",
    "stars": "4",
    "bonus": "+R$200",
    "bonus_description": "Até 200 reais em bônus de apostas",
    "bonus_code": "Sem código",
    "register_link": "https://wl188bet.adsrv.eacdn.com/C.ashx?btag=a_7690b_846c_&affid=4191&siteid=7690&adid=846&c=apostasRightbar",
    "information": "Abra uma conta na 188bet hoje! A casa de apostas com odds asiáticas, as melhores do mercado!",
},
"4 Betfair": {
    "title": "Betfair",
    "position": "3",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/06/betfair_Apostas.svg",
    "review_link": "https://apostas.betarena.com/betfair-revisao-da-casa-de-apostas/",
    "stars": "4",
    "bonus": "+R$1200",
    "bonus_description": "Bônus de 100% no primeiro depósito até R$1200",
    "bonus_code": "Sem código",
    "register_link": "http://ads.betfair.com/redirect.aspx?pid=2828099&bid=10183",
    "information": "Com mais de 20 anos no ramo, a empresa já está mais do que estabelecida no mercado.",
},
"5 Rivalo": {
    "title": "Rivalo",
    "position": "4",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/07/rivalo_logo.svg",
    "review_link": "https://apostas.betarena.com/rivalo-revisao-da-casa-de-apostas/",
    "stars": "4",
    "bonus": "+R$300",
    "bonus_description": "Até 300 reais em bônus de apostas",
    "bonus_code": "Sem código",
    "register_link": "https://qg9t2.app.goo.gl/rivalo_br_bonus",
    "information": "Abra uma conta na Rivalo hoje e aposte em uma grande variedade de mercados.",
},
"2 1xBet": {
    "title": "1xBet",
    "position": "5",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/06/1xbet_Apostas.png",
    "review_link": "https://apostas.betarena.com/1xbet-revisao-da-casa-de-apostas/",
    "stars": "4",
    "bonus": "+R$1200",
    "bonus_description": "Bônus de 100% no primeiro depósito até R$1200",
    "bonus_code": "Sem código",
    "register_link": "https://refpa.top/L?tag=d_47346m_97c_BlogBR&site=47346&ad=97&r=bonus/rules/1st/",
    "information": "Com sua ampla gama de jogos e eventos para apostas, a 1xBet promete conquistar um espaço cada vez mais proeminente. Abra uma conta!",
},
"6 22Bet": {
    "title": "22Bet",
    "position": "6",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/06/22bet_Apostas.svg",
    "review_link": "https://apostas.betarena.com/22bet-revisao-da-casa-de-apostas/",
    "stars": "4",
    "bonus": "+R$600",
    "bonus_description": "100% de bônus em depósitos até R$600",
    "bonus_code": "Sem código",
    "register_link": "https://qg9t2.app.goo.gl/22betdefault",
    "information": "Com algumas características emocionantes, a 22bet é mais uma casa de apostas com uma boa reputação no mercado de apostas esportivas. Cadastre-se agora!",
},
"7 Betboro": {
    "title": "Betboro",
    "position": "7",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/06/betboro_Apostas.svg",
    "review_link": "https://apostas.betarena.com/betboro-revisao-da-casa-de-apostas/",
    "stars": "4",
    "bonus": "+R$500",
    "bonus_description": "50% de bônus no primeiro depósito até R$500",
    "bonus_code": "Sem código",
    "register_link": "https://promotions.bboro.com/pt/exclusivo-betarena?btag=37980",
    "information": "Embora ainda seja pouco conhecido pelo público em geral, a Betboro é uma das casas de apostas que mais crescem no mundo. Abra uma conta agora!",
},
});

const generateDataEs = () => bettingSitesDataEs.update({
    "1 bet365": {
    "title": "Bet365",
    "position": "1",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Frame-96.png",
    "review_link": "https://www.betarena.com/apuestas-deportivas-bet-365-review-2020/",
    "stars": "5",
    "bonus": "+$50",
    "bonus_description": "Hasta 50 $ en créditos de apuesta",
    "bonus_code": "No se requiere código",
    "register_link": "https://qg9t2.app.goo.gl/bet365_general",
    "information": "Abre una cuenta con Bet365 hoy y apuesta en una amplia gama de mercados con la compañía de apuestas deportivas en línea favorita del mundo.",
},
    "2 1xbet": {
    "title": "1xBet",
    "position": "2",    
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Frame-96-1.png.webp",
    "review_link": "https://www.betarena.com/1xbet-resena-de-la-casa-de-apuestas/",
    "stars": "4",
    "bonus": "+$100",
    "bonus_description": "Bono del 100% hasta 100$",
    "bonus_code": "No se requiere código",
    "register_link": "http://refpa.top/L?tag=d_47346m_2778c_&site=47346&ad=2778",
    "information": "Con su amplia oferta de juegos y eventos para apostar 1xBet promete conquistar un espacio cada vez más destacado. ¡Abre una cuenta!",
},
"3 Betfair": {
    "title": "Betfair",
    "position": "3",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/betfair-svg.svg",
    "review_link": "https://www.betarena.com/betfair-resena-de-la-casa-de-apuesta/",
    "stars": "4",
    "bonus": "+$20",
    "bonus_description": "Realiza tu primera apuesta en Betfair de al menos 20$ y, si no ganas, te reembolsaremos 20$",
    "bonus_code": "No se requiere código",
    "register_link": "https://ads.betfair.com/redirect.aspx?pid=2772614&bid=10187&redirectURL=http://www.betfair.com/",
    "information": "¡Regístrate en Betfair! Con más de 20 años en el negocio, la empresa ya está más que establecida en el mercado.",
},
"4 22Bet": {
    "title": "22Bet",
    "position": "4",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Property-122-bet.svg",
    "review_link": "https://www.betarena.com/22bet-resena-de-la-casa-de-apuestas/",
    "stars": "4",
    "bonus": "+$100",
    "bonus_description": "Bono del 100% hasta 100$",
    "bonus_code": "No se requiere código",
    "register_link": "https://qg9t2.app.goo.gl/22betdefault",
    "information": "22bet, con algunas características interesantes, es una casa de apuestas con una buena reputación en el mercado de las apuestas deportivas. ¡Regístrate ahora!",
}
});

const generateDataCo = () => bettingSitesDataCo.update({
"1 Rivalo": {
    "title": "Rivalo",
    "position": "1",
    "image": "https://www.betarena.com/wp-content/uploads/2021/07/rivalo_logo.svg",
    "review_link": "https://www.betarena.com/rivalo-revision-de-la-casa-de-apuestas/",
    "stars": "5",
    "bonus": "+$200K",
    "bonus_description": "Bono de $200.000",
    "bonus_code": "No se requiere código",
    "register_link": "https://qg9t2.app.goo.gl/rivalo_bonus",
    "information": "Abre una cuenta con Rivalo hoy y apuesta en una amplia gama de mercados.",
},

"3 1xbet": {
    "title": "1xBet",
    "position": "2",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Frame-96-1.png.webp",
    "review_link": "https://www.betarena.com/1xbet-resena-de-la-casa-de-apuestas/",
    "stars": "4",
    "bonus": "+$100",
    "bonus_description": "Bono del 100% hasta 100$",
    "bonus_code": "No se requiere código",
    "register_link": "http://refpa.top/L?tag=d_47346m_2778c_&site=47346&ad=2778",
    "information": "Con su amplia oferta de juegos y eventos para apostar 1xBet promete conquistar un espacio cada vez más destacado. ¡Abre una cuenta!",
},
"2 Betfair": {
    "title": "Betfair",
    "position": "3",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/betfair-svg.svg",
    "review_link": "https://www.betarena.com/betfair-resena-de-la-casa-de-apuesta/",
    "stars": "5",
    "bonus": "+$50K",
    "bonus_description": "Bono de $50.000",
    "bonus_code": "No se requiere código",
    "register_link": "https://ads.betfair.com/redirect.aspx?pid=2772614&bid=10187&redirectURL=http://www.betfair.com/",
    "information": "¡Regístrate en Betfair! Con más de 20 años en el negocio, la empresa ya está más que establecida en el mercado.",
},
"4 22Bet": {
    "title": "22Bet",
    "position": "4",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Property-122-bet.svg",
    "review_link": "https://www.betarena.com/22bet-resena-de-la-casa-de-apuestas/",
    "stars": "4",
    "bonus": "+$100",
    "bonus_description": "Bono del 100% hasta 100$",
    "bonus_code": "No se requiere código",
    "register_link": "https://qg9t2.app.goo.gl/22betdefault",
    "information": "22bet, con algunas características interesantes, es una casa de apuestas con una buena reputación en el mercado de las apuestas deportivas. ¡Regístrate ahora!",
}
});

const generateDataKe = () => bettingSitesDataKe.update({
    "3 bet365": {
    "title": "Bet365",
    "position": "1",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Frame-96.png",
    "review_link": "https://www.betarena.com/bet365/",
    "stars": "5",
    "bonus": "+€50",
    "bonus_description": "Up to €50 in Bet Credits",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/bet365_general",
    "information": "Open an account with Bet365 today and bet on a huge range of markets with the world’s favourite online sports betting company.",
},
    "4 1xbet": {
    "title": "1xBet",
    "position": "2",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Frame-96-1.png.webp",
    "review_link": "https://www.betarena.com/1xbet-bookmaker-review/",
    "stars": "4",
    "bonus": "+€100",
    "bonus_description": "100% Bonus up to €100",
    "bonus_code": "No code required",
    "register_link": "http://refpa.top/L?tag=d_47346m_2778c_&site=47346&ad=2778",
    "information": "With its wide range of matches and events for betting, the 1xBet promises to conquer an increasingly more prominent space in the sports betting market. Open an account and start winning!",
},
"2 Betfair": {
    "title": "Betfair",
    "position": "3",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/betfair-svg.svg",
    "review_link": "https://www.betarena.com/betfair-bookmaker-review/",
    "stars": "4",
    "bonus": "+€20",
    "bonus_description": "Place your first bet on Betfair Exchange of at least €20 and if you don't win, we'll refund you €20",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/bet365_general",
    "information": "Register on Betfair! With more than 20 years in the business, the sportsbook is already more than established.",
},
"1 22Bet": {
    "title": "22Bet",
    "position": "4",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Property-122-bet.svg",
    "review_link": "https://www.betarena.com/22bet-bookmaker-review/",
    "stars": "5",
    "bonus": "+15K",
    "bonus_description": "100% Bonus up to 15.000 KSH",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/22betdefault",
    "information": "With some exciting features, 22bet is one more bookmaker with a great reputation in the sports betting market. Register now!",
},
});

const generateDataMx = () => bettingSitesDataMx.update({
    "1 bet365": {
    "title": "Bet365",
    "position": "1",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Frame-96.png",
    "review_link": "https://www.betarena.com/bet365/",
    "stars": "5",
    "bonus": "+$1.5K",
    "bonus_description": "Hasta $1500MXN en créditos de apuesta para nuevos clientes. Bet365 otorgará créditos de apuesta de la misma cantidad de tu ingreso. Las ganancias no incluyen el importe de los créditos de apuesta. Se aplican las condiciones, límites de tiempo y exclusiones.",
    "bonus_code": "No se requiere código",
    "register_link": "https://qg9t2.app.goo.gl/bet365_general",
    "information": "Abre una cuenta con Bet365 hoy y apuesta en una amplia gama de mercados con la compañía de apuestas deportivas en línea favorita del mundo.",
},
"2 Caliente": {
    "title": "Caliente",
    "position": "2",
    "image": "https://www.betarena.com/wp-content/uploads/2021/08/caliente.svg",
    "review_link": "https://www.betarena.com/caliente-mx-revision-de-la-casa-de-apuestas/",
    "stars": "4",
    "bonus": "+$3K",
    "bonus_description": "$3000MXN + $400MXN por registro",
    "bonus_code": "No se requiere código",
    "register_link": "https://qg9t2.app.goo.gl/caliente_mxl",
    "information": "Abre una cuenta con Caliente hoy y apuesta en una amplia gama de mercados.",
},
"3 Betfair": {
    "title": "Betfair",
    "position": "3",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/betfair-svg.svg",
    "review_link": "https://www.betarena.com/betfair-resena-de-la-casa-de-apuesta/",
    "stars": "4",
    "bonus": "+$2K",
    "bonus_description": "OBTÉN HASTA $2000 MXN EN APUESTAS GRATIS",
    "bonus_code": "No se requiere código",
    "register_link": "https://ads.betfair.com/redirect.aspx?pid=2772614&bid=10187&redirectURL=http://www.betfair.com/",
    "information": "¡Regístrate en Betfair! Con más de 20 años en el negocio, la empresa ya está más que establecida en el mercado.",
},
    "4 1xbet": {
    "title": "1xBet",
    "position": "4",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Frame-96-1.png.webp",
    "review_link": "https://www.betarena.com/1xbet-resena-de-la-casa-de-apuestas/",
    "stars": "4",
    "bonus": "+$2.2K",
    "bonus_description": "Bono de bienvenida con el primer deposito de hasta 2200 MXN",
    "bonus_code": "No se requiere código",
    "register_link": "http://refpa.top/L?tag=d_47346m_2778c_&site=47346&ad=2778",
    "information": "Más de 400 000 usuarios apuestan online con 1xbet.com.",
},
"5 22Bet": {
    "title": "22Bet",
    "position": "5",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Property-122-bet.svg",
    "review_link": "https://www.betarena.com/22bet-resena-de-la-casa-de-apuestas/",
    "stars": "4",
    "bonus": "+$2.5K",
    "bonus_description": "Bono de bienvenida con el primer deposito de hasta 2500 MXN",
    "bonus_code": "No se requiere código",
    "register_link": "https://qg9t2.app.goo.gl/22betdefault",
    "information": "22BET acepta todo tipo de apuestas – simples, combinadas, de sistema, en cadena y más.",
},
"6 Rivalo": {
    "title": "Rivalo",
    "position": "6",
    "image": "https://www.betarena.com/wp-content/uploads/2021/07/rivalo_logo.svg",
    "review_link": "https://www.betarena.com/rivalo-revision-de-la-casa-de-apuestas/",
    "stars": "4",
    "bonus": "+$2K",
    "bonus_description": "100% Bonus - 2.000 MXN",
    "bonus_code": "No se requiere código",
    "register_link": "https://qg9t2.app.goo.gl/rivalo_mexico",
    "information": "Abre una cuenta con Rivalo hoy y apuesta en una amplia gama de mercados.",
},
"7 Betway": {
    "title": "Betway",
    "position": "7",
    "image": "https://www.betarena.com/wp-content/uploads/2021/08/betway.svg",
    "review_link": "https://www.betarena.com/betway-revision-de-la-casa-de-apuestas/",
    "stars": "4",
    "bonus": "+$3.5K",
    "bonus_description": "$500 gratis y hasta $3,000 con tu 1er depósito",
    "bonus_code": "No se requiere código",
    "register_link": "https://qg9t2.app.goo.gl/betway_default",
    "information": "Abre una cuenta con Betway hoy y apuesta en una amplia gama de mercados.",
}
});

const generateDataMz = () => bettingSitesDataMz.update({
"1 1xBet": {
    "title": "1xBet",
    "position": "1",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/06/1xbet_Apostas.png",
    "review_link": "https://apostas.betarena.com/1xbet-revisao-da-casa-de-apostas/",
    "stars": "5",
    "bonus": "+$100",
    "bonus_description": "Bónus de 100% no primeiro depósito até $100",
    "bonus_code": "Sem código",
    "register_link": "https://refpa.top/L?tag=d_47346m_97c_BlogBR&site=47346&ad=97&r=bonus/rules/1st/",
    "information": "Com sua ampla gama de jogos e eventos para apostas, a 1xBet promete conquistar um espaço cada vez mais proeminente. Abra uma conta!",
},
"2 22Bet": {
    "title": "22Bet",
    "position": "2",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/06/22bet_Apostas.svg",
    "review_link": "https://apostas.betarena.com/1xbet-revisao-da-casa-de-apostas/",
    "stars": "5",
    "bonus": "+$100",
    "bonus_description": "100% de bônus em depósitos até $100",
    "bonus_code": "Sem código",
    "register_link": "https://refpa.top/L?tag=d_47346m_97c_BlogBR&site=47346&ad=97&r=bonus/rules/1st/",
    "information": "Com algumas características emocionantes, a 22bet é mais uma casa de apostas com uma boa reputação no mercado de apostas esportivas. Cadastre-se agora!",
},
"3 Betboro": {
    "title": "Betboro",
    "position": "3",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/06/betboro_Apostas.svg",
    "review_link": "https://apostas.betarena.com/betboro-revisao-da-casa-de-apostas/",
    "stars": "4",
    "bonus": "+€100",
    "bonus_description": "100% de bônus no primeiro depósito até €100",
    "bonus_code": "Sem código",
    "register_link": "https://promotions.bboro.com/pt/exclusivo-betarena?btag=37980",
    "information": "Embora ainda seja pouco conhecido pelo público em geral, a Betboro é uma das casas de apostas que mais crescem no mundo. Abra uma conta agora!",
},
"4 Megapari": {
    "title": "Megapari",
    "position": "4",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/08/megapari.svg",
    "review_link": "https://apostas.betarena.com/megapari-revisao-da-casa-de-apostas/",
    "stars": "4",
    "bonus": "+$100",
    "bonus_description": "100% de bônus no primeiro depósito até $100",
    "bonus_code": "Sem código",
    "register_link": "https://qg9t2.app.goo.gl/megapari",
    "information": "A principal vantagem da nossa empresa de apostas é oferecer uma oportunidade única de colocar apostas AO VIVO.",
}
});

const generateDataAo = () => bettingSitesDataAo.update({
"1 1xBet": {
    "title": "1xBet",
    "position": "1",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/06/1xbet_Apostas.png",
    "review_link": "https://apostas.betarena.com/1xbet-revisao-da-casa-de-apostas/",
    "stars": "5",
    "bonus": "+$100",
    "bonus_description": "Bónus de 100% no primeiro depósito até $100",
    "bonus_code": "Sem código",
    "register_link": "https://refpa.top/L?tag=d_47346m_97c_BlogBR&site=47346&ad=97&r=bonus/rules/1st/",
    "information": "Com sua ampla gama de jogos e eventos para apostas, a 1xBet promete conquistar um espaço cada vez mais proeminente. Abra uma conta!",
},
"2 22Bet": {
    "title": "22Bet",
    "position": "2",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/06/22bet_Apostas.svg",
    "review_link": "https://apostas.betarena.com/1xbet-revisao-da-casa-de-apostas/",
    "stars": "5",
    "bonus": "+$100",
    "bonus_description": "100% de bônus em depósitos até $100",
    "bonus_code": "Sem código",
    "register_link": "https://refpa.top/L?tag=d_47346m_97c_BlogBR&site=47346&ad=97&r=bonus/rules/1st/",
    "information": "Com algumas características emocionantes, a 22bet é mais uma casa de apostas com uma boa reputação no mercado de apostas esportivas. Cadastre-se agora!",
},
"3 Betboro": {
    "title": "Betboro",
    "position": "3",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/06/betboro_Apostas.svg",
    "review_link": "https://apostas.betarena.com/betboro-revisao-da-casa-de-apostas/",
    "stars": "4",
    "bonus": "+€100",
    "bonus_description": "100% de bônus no primeiro depósito até €100",
    "bonus_code": "Sem código",
    "register_link": "https://promotions.bboro.com/pt/exclusivo-betarena?btag=37980",
    "information": "Embora ainda seja pouco conhecido pelo público em geral, a Betboro é uma das casas de apostas que mais crescem no mundo. Abra uma conta agora!",
},
"4 Megapari": {
    "title": "Megapari",
    "position": "4",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/08/megapari.svg",
    "review_link": "https://apostas.betarena.com/megapari-revisao-da-casa-de-apostas/",
    "stars": "4",
    "bonus": "+$100",
    "bonus_description": "100% de bônus no primeiro depósito até $100",
    "bonus_code": "Sem código",
    "register_link": "https://qg9t2.app.goo.gl/megapari",
    "information": "A principal vantagem da nossa empresa de apostas é oferecer uma oportunidade única de colocar apostas AO VIVO.",
}
});

const generateDataUs = () => bettingSitesDataUs.update({
"1 Bovada": {
    "title": "Bovada",
    "position": "1",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Property-1bovada.svg",
    "review_link": "https://apostas.betarena.com/1xbet-revisao-da-casa-de-apostas/",
    "stars": "5",
    "bonus": "+$750",
    "bonus_description": "Bovada members can now score a 75% Bitcoin Match bonus up to $750 to bet on sports.",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/bovadageneral",
    "information": "Since December 2011, Bovada has been offering an online betting experience like no other.",
},
"2 GT Bets": {
    "title": "GTBets",
    "position": "2",
    "image": "https://www.betarena.com/wp-content/uploads/2021/08/gtbets.svg",
    "review_link": "https://www.betarena.com",
    "stars": "5",
    "bonus": "+$750",
    "bonus_description": "1st Dep 100% up to $500 - 2nd Dep 100% up to $250",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/getbets_default",
    "information": "Sports betting with GTbets.ag the nets premier destination for online sports betting, football betting, NFL betting, basketball betting!",
},
"3 BetUS": {
    "title": "BetUS",
    "position": "3",
    "image": "https://www.betarena.com/wp-content/uploads/2021/08/betus.svg",
    "review_link": "https://www.betarena.com",
    "stars": "5",
    "bonus": "+$3000",
    "bonus_description": "125% Sign-Up Bonus up to $3,125 on your first deposit.",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/betus",
    "information": "America´s favorite sportsbook",
},
"4 Fanduel": {
    "title": "Fanduel",
    "position": "4",
    "image": "https://www.betarena.com/wp-content/uploads/2021/08/fanduel.svg",
    "review_link": "https://www.betarena.com",
    "stars": "4",
    "bonus": "+$1000",
    "bonus_description": "If your first bet loses, you will receive a refund in site credit, up to $1000",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/bovadageneral",
    "information": "The #1 regulated online betting platform in the United States",
}
});

const generateDataUk = () => bettingSitesDataUk.update({
"1 Bet365": {
    "title": "Bet365",
    "position": "1",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Frame-96.png",
    "review_link": "https://www.betarena.com/bet365/",
    "stars": "5",
    "bonus": "+£100",
    "bonus_description": "Up to £100 in Bet Credits",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/bet365_general",
    "information": "Open an account with bet365 today and bet on a huge range of markets with the world’s favourite online sports betting company.",
},
"2 Betfair": {
    "title": "Betfair",
    "position": "2",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/betfair-svg.svg",
    "review_link": "https://www.betarena.com/betfair-bookmaker-review/",
    "stars": "5",
    "bonus": "£100",
    "bonus_description": "Get up to £100 in free bets",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/betfair_uk",
    "information": "Register on Betfair! With more than 20 years in the business, the sportsbook is already more than established.",
},
"3 10bet": {
    "title": "10bet",
    "position": "3",
    "image": "https://www.betarena.com/wp-content/uploads/2021/09/10bet_carrousel.svg",
    "review_link": "https://www.betarena.com/10bet-bookmaker-review/",
    "stars": "4",
    "bonus": "£50",
    "bonus_description": "£50 on your first deposit with a £15 min.",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/10bet_bonus",
    "information": "10bet bookmaker offers thousands of live betting markets, with in-play betting available as the action takes place on major sports like football, tennis, golf, darts and American sports.",
},
"4 Betway": {
    "title": "Betway",
    "position": "4",
    "image": "https://www.betarena.com/wp-content/uploads/2021/08/betway.svg",
    "review_link": "https://www.betarena.com/betway-sports-betting-bookmaker-review/",
    "stars": "4",
    "bonus": "£10",
    "bonus_description": "Get £10 in Free Bets",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/betway_default",
    "information": "Betway Football Betting a simple but extensive and competitive range of football markets on the Betway online betting website",
}
});

const generateDataIn = () => bettingSitesDataIn.update({
"1 Bet365": {
    "title": "Bet365",
    "position": "1",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Frame-96.png",
    "review_link": "https://www.betarena.com/bet365/",
    "stars": "5",
    "bonus": "+₹4k",
    "bonus_description": "Up To ₹4,000 in Bet Credits",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/bet365_general",
    "information": "Open an account with bet365 today and bet on a huge range of markets with the world’s favourite online sports betting company.",
},
"2 1xbet": {
    "title": "1xBet",
    "position": "2",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Frame-96-1.png.webp",
    "review_link": "https://www.betarena.com/1xbet-bookmaker-review/",
    "stars": "5",
    "bonus": "+₹10k",
    "bonus_description": "100% Up To ₹10,000",
    "bonus_code": "No code required",
    "register_link": "http://refpa.top/L?tag=d_47346m_2778c_&site=47346&ad=2778",
    "information": "With its wide range of matches and events for betting, the 1xBet promises to conquer an increasingly more prominent space in the sports betting market. Open an account and start winning!",
},
"4 22Bet": {
    "title": "22Bet",
    "position": "3",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Property-122-bet.svg",
    "review_link": "https://www.betarena.com/22bet-bookmaker-review/",
    "stars": "5",
    "bonus": "+₹10k",
    "bonus_description": "100% Up To ₹10,000",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/22betdefault",
    "information": "With some exciting features, 22bet is one more bookmaker with a great reputation in the sports betting market. Register now!",
},
"4 Betway": {
    "title": "Betway",
    "position": "4",
    "image": "https://www.betarena.com/wp-content/uploads/2021/08/betway.svg",
    "review_link": "https://www.betarena.com/betway-sports-betting-bookmaker-review/",
    "stars": "4",
    "bonus": "+₹2.5k",
    "bonus_description": "100% Up To ₹2,500",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/betway_default",
    "information": "Betway Football Betting a simple but extensive and competitive range of football markets on the Betway online betting website",
}
});

const generateDataSg = () => bettingSitesDataSg.update({
"1 22Bet": {
    "title": "22Bet",
    "position": "1",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Property-122-bet.svg",
    "review_link": "https://www.betarena.com/22bet-bookmaker-review/",
    "stars": "5",
    "bonus": "+₹10k",
    "bonus_description": "100% Up To ₹10,000",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/22betdefault",
    "information": "With some exciting features, 22bet is one more bookmaker with a great reputation in the sports betting market. Register now!",
},                    
"2 Betboro": {
    "title": "Betboro",
    "position": "2",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Betboro_logo_2.svg",
    "review_link": "https://www.betarena.com/betboro-bookmaker-review/",
    "stars": "4",
    "bonus": "+ €100",
    "bonus_description": "100% Bonus up to €100",
    "bonus_code": "No code required",
    "register_link": "https://promotions.bboro.com/pt/exclusivo-betarena-100?btag=37980",
    "information": "Although it is still little known by the general public, Betboro is a growing bookmaker globally. Open an account now!",
},
"3 Megapari": {
    "title": "Megapari",
    "position": "3",
    "image": "https://apostas.betarena.com/wp-content/uploads/2021/08/megapari.svg",
    "review_link": "https://www.betarena.com/megapari-bookmaker-review/",
    "stars": "4",
    "bonus": "+ $100",
    "bonus_description": "100% bonus on first deposit up to $100",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/megapari",
    "information": "The main advantage of our betting company is that it offers a unique opportunity to place LIVE bets.",
},
"4 Bet365": {
    "title": "Bet365",
    "position": "4",
    "image": "https://www.betarena.com/wp-content/uploads/2021/05/Frame-96.png",
    "review_link": "https://www.betarena.com/bet365/",
    "stars": "4",
    "bonus": "+₹4k",
    "bonus_description": "Up To ₹4,000 in Bet Credits",
    "bonus_code": "No code required",
    "register_link": "https://qg9t2.app.goo.gl/22betdefault",
    "information": "Open an account with bet365 today and bet on a huge range of markets with the world’s favourite online sports betting company.",
}                    
});                

    /*    const generateExtaData = () => extraData.update({
            "ch": {
                "title": "ch",
            }
            }); */

generateDataDefault();
generateDataPt();
generateDataBr();
generateDataEs();
generateDataCo();
generateDataKe();
generateDataMx();
generateDataMz();
generateDataAo();
generateDataUs();
generateDataUk();
generateDataIn();
generateDataSg();

// generateExtaData();
}

    export default fullDataGeneration;