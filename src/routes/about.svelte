<script>
  import SvelteLogo from "../components/SvelteLogo.svelte";
  import About from "../components/About.svelte";

  let visible = true;
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<SvelteLogo {visible} />
<About />
