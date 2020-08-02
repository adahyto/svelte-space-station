<script>
  export let astronauts;
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
  .svelte {
    color: #ff3e00;
  }
  ul {
    padding-inline-start: 0;
    text-align: center;
    list-style-type: none;
  }
</style>

<div>
  {#if astronauts}
    <h2>People in Space</h2>
    <p>
      There are
      <span class="svelte">{astronauts.number}</span>
      people in space now:
    </p>
    <ul>
      {#each astronauts.people as { craft, name }}
        <li>
          <i>{name} on {craft}</i>
        </li>
      {/each}
    </ul>
  {/if}
</div>
