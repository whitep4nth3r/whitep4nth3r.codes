<script lang="ts">
  import Majick from "../svgs/panthers/Majick.svelte";
  import White from "../svgs/panthers/White.svelte";
  import Banner from "../svgs/Banner.svelte";
</script>

<style>
  :root {
    --banner-small: 100px;
    --banner-big: 124px;
    --panther-small: 120px;
    --panther-big: 144px;

    --container-small: 116px;
    --container-big: 140px;
  }

  .container {
    display: block;
    width: 100%;
    position: relative;
    height: var(--container-small);
    margin-top: 24px;
    bottom: 5px;
  }

  .link_as_container {
    width: 100%;
    position: relative;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    align-self: center;
    display: flex;
  }

  .link_as_container:focus {
    box-shadow: unset;
  }

  .link_as_container:focus .panther_container {
    outline-width: 0;
    box-shadow: var(--green) 0 0 0 0.25rem;
    transition: box-shadow 0.2s ease 0s;
  }

  .banner_container {
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: var(--banner-small);
  }

  .panther_container {
    height: var(--panther-small);
    width: var(--panther-small);
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }

  .panther_container:hover {
    height: 160px;
    width: 160px;
  }

  .panther_container:hover .magic {
    display: block;
  }

  .panther_container:hover .white {
    display: none;
  }

  .magic {
    display: none;
  }

  @media screen and (min-width: 500px) {
    .container {
      height: var(--container-big);
    }

    .banner_container {
      top: var(--banner-big);
    }

    .panther_container {
      height: var(--panther-big);
      width: var(--panther-big);
    }
  }
</style>

<header class="container">
  <a class="link_as_container" href="/" aria-label="Navigate to home page">
    <div class="panther_container">
      <div class="white">
        <White />
      </div>
      <div class="magic">
        <Majick />
      </div>
    </div>
    <div class="banner_container">
      <Banner />
    </div>
  </a>
</header>
