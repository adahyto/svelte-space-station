<script>
  import Astronauts from "../components/Astronauts.svelte";
  import ISSCords from "../components/ISSCords.svelte";
</script>

<style>
  h1 {
    font-size: 4em;
    text-transform: uppercase;
    font-weight: 100;
    text-align: center;
  }
  .svelte {
    color: #ff3e00;
  }
</style>

<svelte:head>
  <title>Svelte Space Center</title>
</svelte:head>

<h1>
  <span class="svelte">Svelte</span>
  Space Center
</h1>
<Astronauts />
<ISSCords />
