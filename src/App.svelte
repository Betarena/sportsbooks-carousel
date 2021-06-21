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

  function changed(event) {
    console.log(event.detail.currentSlide);
  }

  let style = {
    styleStarWidth: 12,
    styleEmptyStarColor: "#fffff",
    styleFullStarColor: "#FFB904",
  };
</script>

<div class="mainDivCarousel">
  {#await sportsBooksResult then items}
    <Carousel
      dots={false}
      draggable={false}
      perPage={{ 1378: 4, 500: 2 }}
      on:change={changed}
    >
      <span class="control" slot="left-control">
        <ChevronLeftIcon />
      </span>
      {#each items as item}
        <div class="mainDivStyle">
          <div class="boxStyle">
            <a href={item.register_link}>
              <img class="imgMain" src={item.image} alt="Betting site Logo" />
            </a>
            <a class="linkDeco" href={item.register_link}>
              <h3 class="titleSports">{item.title}</h3>
            </a>
            <div class="starStyle">
              <StarRating
                rating={item.stars}
                isIndicatorActive={false}
                {style}
              />
            </div>
            <a class="reviewStyleLink" href={item.review_link}>
              <h5 class="reviewStyle">Read Full Review ></h5>
            </a>
            <div class="dropStyle">
              <Dropdown>
                <Button type="filled" status="primary">{item.bonus}</Button>
                <div slot="dropdown" class="content">
                  <div class="divLogoBetDrop">
                    <a href={item.register_link}>
                      <img
                        class="imgSec"
                        src={item.image}
                        alt="Betting site Logo"
                      />
                    </a>
                  </div>
                  <div>{item.bonus_description}</div>
                  <div>{item.bonus_code}</div>
                  <div class="btnDiv">
                    <a href={item.register_link}>
                      <button class="btnWebRegister">Register</button>
                    </a>
                  </div>
                  <div>{item.information}</div>
                </div>
              </Dropdown>
            </div>
          </div>
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
  :global(body) {
    background-color: #292929;
    color: #0084f6;
    transition: background-color 0.3s;
  }

  .content {
    padding: 8px;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    text-align: center;
  }

  .boxStyle {
    width: 328px;
    height: 112px;
    background: rgba(255, 255, 255, 0.16);
    backdrop-filter: blur(50px);
    border-radius: 16px;
    overflow: visible;
  }

  .imgMain {
    position: relative;
    width: 72px;
    height: 72px;
    left: 20px;
    top: 20px;

    background: #000000;
    border-radius: 8px;
  }

  .imgSec {
    position: relative;
    margin-top: -200px;
    width: 72px;
    height: 24px;
    object-fit: cover;

    background: #000000;
    border-radius: 8px;
  }

  .titleSports {
    position: relative;
    margin-top: -53px;
    width: 58px;
    height: 27px;
    left: 108px;
    font-weight: 500;
    color: #fff;
  }

  .starStyle {
    margin-top: -18px;
    margin-left: 108px;
  }

  .reviewStyleLink {
    text-decoration: none;
    color: #f5620f;
  }

  .reviewStyleLink:hover,
  .reviewStyleLink:focus,
  .reviewStyleLink:active {
    text-decoration: none;
    color: #f5620f;
  }

  .reviewStyle {
    position: relative;
    width: 126px;
    height: 21px;
    left: 108px;
    margin-top: 10px;
    color: #f5620f;
    text-decoration: none;
  }

  .reviewStyle:hover,
  .reviewStyle:focus,
  .reviewStyle:active {
    text-decoration: none;
    color: #f5620f;
  }

  .linkDeco {
    text-decoration: none;
  }

  .btnWeb {
    width: 200px;
    margin-top: 20px;
    margin-left: 40px;
  }

  .btnWebRegister {
    width: 200px;
    margin-top: 0px;
    margin-left: 0px;
  }

  .mainDivStyle {
    display: flex;
    margin-top: 10px;
    max-width: 100%;
    height: 800px;
    flex-direction: column;
    background-color: transparent;
  }

  .dropStyle {
    position: relative;
    margin-top: -118px;
    margin-left: 190px;
    border: none;
    z-index: 10;
  }

  .divLogoBetDrop {
    margin-top: -30px;
  }

  .btnDiv {
    width: 100%;
    text-align: center;
    margin-top: 200px;
  }

  .mainDivCarousel {
    margin: 0 auto;
    height: 800px;
    width: 80vw;
  }

  .control :global(svg) {
    position: absolute;
    width: 20px;
    height: 20px;
    border-width: 0px;
    border: none;
    left: 18%;
    right: 0%;
    top: 19%;
    bottom: 0%;
  }
</style>
