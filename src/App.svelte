<script>
  import firebase from "firebase/app";
  import "firebase/firebase-auth";
  import { fireStart } from "./lib/init-firebase";
  import Carousel from "svelte-carousel";
  import fullDataGeneration from "./betting-sites-data-generator";
  import mainDataSports from "./get-sportbooks-data";

  fireStart;

  /*  let logoResult = [];

  async function getLocalTeamLogo() {
    const gamePath = `fixtures/2021-05-26/16465927/localTeam/`;
    let ref = firebase.database().ref(gamePath);
    ref.on("value", (snap) => {
      snap.val();
      logoResult = snap.val();
    });
  }
  getLocalTeamLogo();*/

  console.log(mainDataSports());
</script>

<!--  <Carousel let:loaded dots={false}>
  <div class="mainDivStyle">
    <div class="boxStyle">
      <img src={logoResult.logo_path} alt="Team Logo" />
      <p>teste</p>
    </div>
    <div class="boxStyle">
      <p>Sapateiro</p>
    </div>
  </div>
</Carousel>-->

<div>
  {#await mainDataSports()}
    <p>loading</p>
  {:then items}
    {#each items as item}
      <li>{item.title}. {item.review_link}</li>
    {/each}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>

<!-- Button to generate betting site data to Firebase-->
<div class="btnDiv">
  <button class="btnWeb" on:click={fullDataGeneration}
    >Generate Sportsbooks</button
  >
</div>

<style>
  .boxStyle {
    width: 358px;
    height: 112px;
    margin-left: 22px;
    background-color: #4c4c4c;
    border-radius: 16px;
  }

  .btnWeb {
    width: 200px;
    margin-top: 20px;
    margin-left: 40px;
  }

  .mainDivStyle {
    display: flex;
    background-color: transparent;
  }

  .btnDiv {
    width: 100%;
    text-align: center;
    margin-top: 200px;
  }
</style>
