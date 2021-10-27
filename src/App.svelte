<script>
  import firebase from "firebase/app";
  import "firebase/firebase-auth";
  import { fireStart } from "./lib/init-firebase";
  import Carousel from "@beyonk/svelte-carousel";
  import {
    ChevronLeftIcon,
    ChevronRightIcon,
  } from "./custom_modules/svelte-feather-icons";
  import fullDataGeneration from "./betting-sites-data-generator";
  import mainDataSports from "./get-sportbooks-data";
  import StarRating from "svelte-stars-rating";
  import Dropdown from "./custom_modules/svelte-atoms/Dropdown.svelte";
  import Button from "./custom_modules/svelte-atoms/Button.svelte";
  import Geoip from "./geoip.svelte";
  import mainLangTranslate from "./translations";

  fireStart;

  let sportsBooksResult = mainDataSports();
  let translations;

  async function getTranslationsData() {
    translations = await mainLangTranslate().then((result) => {
      // console.log(result);
      // since there is no return value here,
      // the promise chain's resolved value becomes undefined
      return result;
    });
  }

  getTranslationsData();

  function changed(event) {
    // console.log(event.detail.currentSlide);
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
      startIndex={0}
      on:change={changed}
    >
      <span class="control" slot="left-control">
        <ChevronLeftIcon />
      </span>
      {#each items as item}
        <div class="mainDivStyle">
          <div class="boxStyle" />
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
                <div class="bonusDescription">{item.bonus_description}</div>
                <div class="bonusCode">{item.bonus_code}</div>
                <div class="btnDiv">
                  <a href={item.register_link} target="_blank">
                    <button class="btnWebRegister"
                      >{translations.register}</button
                    >
                  </a>
                </div>
                <div class="bonusInfo">{item.information}</div>
              </div>
            </Dropdown>
          </div>
          <a class="registerLink" href={item.register_link} target="_blank">
            <div class="boxContentGroup">
              <div class="titleDivGroup">
                <img class="imgMain" src={item.image} alt="Betting site Logo" />
              </div>
              <div class="titleDivGroup">
                <h3 class="titleSports">{item.title}</h3>
              </div>
              <div class="starStyle">
                <StarRating
                  rating={item.stars}
                  isIndicatorActive={false}
                  {style}
                />
              </div>
            </div>
            <div>
              <a class="reviewStyleLink" href={item.review_link}>
                <h5 class="reviewStyle">{translations.review}</h5>
              </a>
            </div>
          </a>
        </div>
      {/each}
      <span class="control" slot="right-control">
        <ChevronRightIcon />
      </span>
    </Carousel>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>

<!-- Button to generate betting site data to Firebase, hidden when not needed-->
<!--  <div class="btnDiv">
  <button class="btnWeb" on:click={fullDataGeneration}
    >Generate Sportsbooks</button
  >
</div> -->

<!-- Option to check the Geo IP localtion -->

<!-- <Geoip /> -->
<style>
  :global(body) {
    background-color: #292929;
    color: #0084f6;
    transition: background-color 0.3s;
  }

  .content {
    padding: 8px;
    color: white;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500px;
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
    z-index: -2;
  }

  .boxContentGroup {
    margin-top: -21px;
  }

  .imgMain {
    position: relative;
    width: 72px;
    height: 72px;
    left: 20px;
    top: 20px;
    z-index: -1;

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

  .registerLink {
    text-decoration: none;
  }

  .titleDivGroup {
    z-index: -10;
  }

  .titleSports {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    position: relative;
    font-weight: 500;
    margin-top: -59px;
    width: 20px;
    height: 27px;
    left: 108px;
    color: #fff;
    z-index: -1;
  }

  .starStyle {
    margin-top: 4px;
    margin-left: 108px;
    height: 15px;
    margin-bottom: -126px;
  }

  .reviewStyleLink {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px !important;
    line-height: 150%;
    text-decoration: none;
    color: #f5620f;
    height: 10px;
    z-index: -2;
  }

  .reviewStyleLink:hover,
  .reviewStyleLink:focus,
  .reviewStyleLink:link,
  .reviewStyleLink:active {
    text-decoration: none;
    color: #f5620f;
  }

  .reviewStyle {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px !important;
    line-height: 150%;
    position: relative;
    margin-top: 130px;
    width: 126px;
    height: 10px;
    left: 108px;
    color: #f5620f;
    text-decoration: none;
    z-index: -2;
  }

  .reviewStyle:hover,
  .reviewStyle:focus,
  .reviewStyle:link,
  .reviewStyle:active {
    text-decoration: none;
    color: #f5620f;
  }

  .btnWeb {
    width: 200px;
    margin-top: 20px;
    margin-left: 40px;
  }

  .btnWebRegister {
    width: 260px;
    height: 44px;
    margin-left: 13px;

    /* Property 1=web */
    left: calc(50% - 151px / 2 - 167px);
    top: 20px;
    cursor: pointer;
    /* accent/normal */
    background: #f5620f;
    /* shadow/orange */
    box-shadow: 0px 3px 8px rgba(212, 84, 12, 0.32);
    border-radius: 8px;
    border: 0px solid;

    /* Content Button */
    left: 52px;
    top: calc(50% - 21px / 2 + 0.5px);
    /* nav/14px */
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    /* black/white */
    color: #ffffff;
  }

  .btnWebRegister:hover {
    background-color: #f77c42;
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
    margin-top: -120px;
    margin-left: 190px;
    border: none;
    z-index: 10;
  }

  .divLogoBetDrop {
    margin-top: -30px;
    z-index: 10;
  }

  .bonusDescription {
    margin-top: 20px;
    padding: 4px;
    /* body/16px */

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */

    text-align: center;

    /* black/white */

    color: #ffffff;
  }

  .bonusCode {
    margin-top: 10px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    /* identical to box height, or 21px */

    text-align: center;
  }

  .bonusInfo {
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 8px;
    /* body/12px */

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    /* or 18px */

    text-align: center;

    /* black/gray */

    color: #cccccc;
  }

  .btnDiv {
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }

  .mainDivCarousel {
    margin: 0 auto;
    height: 125px;
    width: 1380px;
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

  :global(.carousel .left) {
    position: absolute !important;
    width: 32px !important;
    height: 32px !important;
    margin-left: -1.2% !important;
    margin-right: 0px !important;
    top: 8% !important;
    z-index: 8 !important;
    margin-top: -20px !important;
    border: none !important;
    background: rgba(255, 255, 255, 0.6) !important;
    border-radius: 50px !important;
    cursor: pointer !important;
    left: 0px !important;
    padding: 0px !important;
    box-shadow: none !important;
    color: #000000;
  }

  :global(.carousel .right) {
    position: absolute !important;
    width: 32px !important;
    height: 32px !important;
    margin-left: 97.6% !important;
    margin-right: 0px !important;
    top: 8% !important;
    z-index: 8 !important;
    margin-top: -20px !important;
    border: none !important;
    background: rgba(255, 255, 255, 0.6) !important;
    border-radius: 50px !important;
    cursor: pointer !important;
    left: 0px !important;
    padding: 0px !important;
    box-shadow: none !important;
    color: #000000;
  }

  :global(.aa-button.svelte-1oruecm) {
    justify-content: center !important;
    border-radius: 0px 8px !important;
  }

  /*Mobile CSS 768px*/

  @media only screen and (max-width: 768px) {
    :global(.carousel .right) {
      margin-left: 23.6% !important;
    }

    @media only screen and (max-width: 768px) {
      .mainDivStyle {
        margin-left: 2px;
        max-width: 100%;
      }
    }

    @media only screen and (max-width: 768px) {
      :global(.carousel .left) {
        margin-left: -0.2% !important;
      }
    }

    @media only screen and (max-width: 768px) {
      .starStyle {
        margin-top: -12px;
      }
    }

    @media only screen and (max-width: 768px) {
      .mainDivCarousel {
        width: 103%;
      }
    }

    @media only screen and (max-width: 768px) {
      .boxStyle {
        width: 97%;
      }
    }

    @media only screen and (max-width: 768px) {
      :global(.carousel) {
        width: 97%;
      }
    }
  }
</style>
