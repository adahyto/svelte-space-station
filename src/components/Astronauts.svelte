<script>
  import { onMount } from "svelte";

  let astronauts;

  onMount(async () => {
    astronauts = await getAstronauts();
  });
  async function getAstronauts() {
    let res = await fetch("http://api.open-notify.org/astros.json");
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
  {#if astronauts}
    <h2>There are {astronauts.number} humans in space now</h2>
    <p />
    {#each astronauts.people as { craft, name }}
      <p>{name} on {craft}</p>
    {/each}
  {/if}
</div>
