<script>
  import firebase from "firebase/app";
  import "firebase/firebase-auth";
  import { fireStart } from "./lib/init-firebase";
  // import Carousel from "svelte-carousel";
  import Carousel from "@beyonk/svelte-carousel";
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";
  import fullDataGeneration from "./betting-sites-data-generator";
  import mainDataSports from "./get-sportbooks-data";

  fireStart;

  let sportsBooksResult = mainDataSports();

  let carousels = [
    {
      perPage: { 320: 1, 768: 3 },
      dots: false,
    },
  ];
  function changed(event) {
    console.log(event.detail.currentSlide);
  }
</script>

<div class="demo">
  {#await sportsBooksResult then items}
    <Carousel on:change={changed}>
      <span class="control" slot="left-control">
        <ChevronLeftIcon />
      </span>
      {#each items as item}
        <div class="slide-content">
          <p>{item.title}</p>
        </div>
      {/each}
      <span class="control" slot="right-control">
        <ChevronRightIcon />
      </span>
    </Carousel>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
  <br />
  <br />
</div>

<!--  <Carousel let:loaded dots={false} let:pagesCount>
  {#await portsBoiksResult then items}
    {#each items as item}
      <div class="mainDivStyle">
        <div class="boxStyle">
          <img src={item.image} alt="Team Logo" />
          <p>{item.title}</p>
        </div>
      </div>
    {/each}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</Carousel>-->

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

<!--  <div>
  {#await portsBoiksResult}
    <p>loading</p>
  {:then items}
    {#each items as item}
      <li>{item.title}</li>
      <li>{item.stars}</li>
    {/each}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>-->

<!-- Button to generate betting site data to Firebase
<div class="btnDiv">
  <button class="btnWeb" on:click={fullDataGeneration}
    >Generate Sportsbooks</button
  >
</div>-->
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

  .demo {
    margin: 0 auto;
    height: 230px;
    width: 60vw;
  }

  .control :global(svg) {
    width: 100%;
    height: 100%;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 32px;
  }

  .slide-content {
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    height: 230px;
    background-color: beige;
  }

  .slide-content header {
    flex: 1;
    background-size: cover;
  }

  .slide-content section {
    height: 40px;
    padding: 12px;
  }
</style>
