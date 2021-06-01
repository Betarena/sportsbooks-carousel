<script>
  import firebase from "firebase/app";
  import "firebase/firebase-auth";
  import { fireStart } from "./lib/init-firebase";
  import Carousel from "svelte-carousel";
  import generateData from "./betting-sites-data-generator";

  fireStart;
  let logoResult = [];

  async function getLocalTeamLogo() {
    const gamePath = `fixtures/2021-05-26/16465927/localTeam/`;
    let ref = firebase.database().ref(gamePath);
    ref.on("value", (snap) => {
      snap.val();
      logoResult = snap.val();
    });
  }

  getLocalTeamLogo();
</script>

<Carousel let:loaded dots={false}>
  <div class="mainDivStyle">
    <div class="boxStyle">
      <img src={logoResult.logo_path} alt="Team Logo" />
      <p>teste</p>
    </div>
    <div class="boxStyle">
      <p>Sapateiro</p>
    </div>
  </div>
</Carousel>

<!-- Button to generate betting site data to Firebase <div>
  <button on:click={generateData}>Generate Betting Sites Data</button>
</div> -->
<style>
  .boxStyle {
    width: 358px;
    height: 112px;
    margin-left: 22px;
    background-color: #4c4c4c;
    border-radius: 16px;
  }

  .mainDivStyle {
    display: flex;
    background-color: transparent;
  }
</style>
