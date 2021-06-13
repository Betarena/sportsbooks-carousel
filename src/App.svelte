<script>
  import firebase from "firebase/app";
  import "firebase/firebase-auth";
  import { fireStart } from "./lib/init-firebase";
  // import Carousel from "svelte-carousel";
  import Carousel from "@beyonk/svelte-carousel";
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";
  import fullDataGeneration from "./betting-sites-data-generator";
  import mainDataSports from "./get-sportbooks-data";
  import StarRating from "svelte-stars-rating";
  import Dropdown from "svelte-atoms/Dropdown.svelte";
  import Button from "svelte-atoms/Button.svelte";

  fireStart;

  let sportsBooksResult = mainDataSports();

  let carousel = [
    {
      perPage: { 320: 1, 768: 5 },
      dots: false,
    },
  ];
  function changed(event) {
    console.log(event.detail.currentSlide);
  }
</script>

<div class="mainDivCarousel">
  {#await sportsBooksResult then items}
    <Carousel bind:this={carousel} on:change={changed}>
      <span class="control" slot="left-control">
        <ChevronLeftIcon />
      </span>
      {#each items as item}
        <div class="mainDivStyle">
          <div class="boxStyle">
            <Dropdown>
              <Button type="filled" status="primary">{item.bonus}</Button>
              <div slot="dropdown" class="content">Some dropdown content</div>
            </Dropdown>
            <img src={item.image} alt="Team Logo" />
            <h3>{item.title}</h3>
            <h5>Read Full Review</h5>
          </div>
          <StarRating rating={item.stars} />
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

<!-- Button to generate betting site data to Firebase-->
<div class="btnDiv">
  <button class="btnWeb" on:click={fullDataGeneration}
    >Generate Sportsbooks</button
  >
</div>

<style>
  .content {
    padding: 8px;
  }

  .boxStyle {
    width: 358px;
    height: 112px;
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
    flex-direction: column;
    background-color: transparent;
  }

  .btnDiv {
    width: 100%;
    text-align: center;
    margin-top: 200px;
  }

  .mainDivCarousel {
    margin: 0 auto;
    height: 112px;
    width: 80vw;
  }

  .control :global(svg) {
    width: 100%;
    height: 100%;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 32px;
  }
</style>
