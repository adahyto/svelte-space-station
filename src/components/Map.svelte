<script>
  import { onMount, setContext } from "svelte";
  import { mapbox, key } from "../services/mapbox";

  setContext(key, {
    getMap: () => map,
  });

  export let lat;
  export let lon;
  export let zoom;

  let container;
  let map;

  onMount(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/mapbox-gl/dist/mapbox-gl.css";

    link.onload = () => {
      map = new mapbox.Map({
        container,
        style: "mapbox://styles/mapbox/streets-v9",
        center: [lon, lat],
        zoom,
      });
    };

    document.head.appendChild(link);

    return () => {
      map.remove();
      link.parentNode.removeChild(link);
    };
  });
</script>

<style>
  div {
    width: 100%;
    height: 100%;
  }

  h2 {
    text-align: center; 
    text-transform: uppercase;
    font-weight: 100;
  }
</style>

<div>
  <h2>ISS on Map</h2>
  <div bind:this={container}>
    {#if map}
      <slot />
    {/if}
  </div>
</div>
