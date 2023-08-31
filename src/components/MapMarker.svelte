<script>
  import { getContext } from "svelte";
  import { mapbox, key } from "../services/mapbox";

  const { getMap } = getContext(key);
  const map = getMap();

  export let lat;
  export let lon;
  export let label;

  const popup = new mapbox.Popup({ offset: 25 }).setText(label);
  let marker;

  setInterval(() => {
    if (marker) {
      marker.setLngLat([lon, lat]);
    } else {
      marker = new mapbox.Marker()
        .setLngLat([lon, lat])
        .setPopup(popup)
        .addTo(map);
    }
  }, 200);
</script>
