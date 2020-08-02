<script>
  export let issLocation;
</script>

<style>
  h2,
  p {
    text-align: center;
  }
  h2 {
    text-transform: uppercase;
    font-weight: 100;
  }
</style>

<div>
  {#if issLocation}
    <h2>ISS Coordinates</h2>
    <p>
      <i>latitude: {issLocation.iss_position.latitude}</i>
      <i>longitude: {issLocation.iss_position.longitude}</i>
    </p>
  {/if}
</div>
