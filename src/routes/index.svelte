<script>
  import { onMount } from "svelte";

  import { getAstronauts } from "../services/astronauts";
  import { getIssLocation } from "../services/iss";

  import Loading from "../components/Loading.svelte";
  import Astronauts from "../components/Astronauts.svelte";
  import ISSCords from "../components/ISSCords.svelte";
  import Map from "../components/Map.svelte";
  import MapMarker from "../components/MapMarker.svelte";

  let astronauts;
  let issLocation;

  onMount(async () => {
    astronauts = await getAstronauts();
    setInterval(async () => {
      issLocation = await getIssLocation();
    }, 1000);
  });
</script>

<svelte:head>
  <title>Svelte Space Station</title>
</svelte:head>

<main class="index">
  <h1>
    <span class="svelte">Svelte</span>
    Space Center
  </h1>
  <section class="index_section">
    {#if !astronauts}
      <Loading />
    {/if}
    <Astronauts {astronauts} />
  </section>
  <section class="index_section">
    {#if !issLocation}
      <Loading />
    {/if}
    <ISSCords {issLocation} />
  </section>
  {#if !issLocation}
    <Loading />
  {/if}
  {#if issLocation}
    <section class="index_section">
      <div class="index_section_map-wrapper">
        <Map
          lat={issLocation.iss_position.latitude}
          lon={issLocation.iss_position.longitude}
          zoom={1}
        >
          <MapMarker
            lat={issLocation.iss_position.latitude}
            lon={issLocation.iss_position.longitude}
            label="International Space Station"
          />
        </Map>
      </div>
    </section>
  {/if}
</main>

<style>
  h1 {
    font-size: 2em;
    text-transform: uppercase;
    font-weight: 100;
    text-align: center;
  }

  .svelte {
    color: #ff3e00;
  }

  .index_section {
    margin-top: 45px;
  }

  .index_section_map-wrapper {
    height: 350px;
  }
</style>
