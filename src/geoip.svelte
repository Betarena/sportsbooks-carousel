<script>
  let url = "https://get.geojs.io/v1/ip/country.json";

  const ipInfo = async () => {
    let fetchVar = fetch(url);

    return fetchVar
      .then((res) => res.json())
      .then((out) => {
        let geoResult = out;
        let geoResultArr = Object.values(geoResult)[0];
        // console.log(geoResultArr);
        return geoResultArr;
      })
      .catch((err) => {
        throw err;
      });
  };

  let resultsGeoFiltered = ipInfo();
</script>

{#await resultsGeoFiltered then items}
  {#each items as item}
    <h5>{item}</h5>
  {/each}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<style>
</style>
