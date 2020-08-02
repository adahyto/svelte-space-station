<script>
  import { onMount } from "svelte";

  let issLocation;

  onMount(async () => {
    setInterval(async () => {
      issLocation = await getIssLocation();
    }, 1000);
  });
  async function getIssLocation() {
    let res = await fetch("http://api.open-notify.org/iss-now.json");
    let data = await res.json();
    return data;
  }
</script>

<style>
  h2 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 100;
  }
</style>

<div>
  {#if issLocation}
    <h2>ISS Coordinates</h2>
    <i>latitude: {issLocation.iss_position.latitude}</i>
    <i>longitude: {issLocation.iss_position.longitude}</i>
  {/if}
</div>
