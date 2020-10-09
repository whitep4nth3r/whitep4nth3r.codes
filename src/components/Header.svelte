<script>
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
    padding-top: 2rem;
    bottom: 0.25rem;
    background-color: var(--red);
    background-image: url("/svg/bg-red.webp");
    background-size: cover;
    border-bottom: 0.25rem solid var(--white);
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
    outline: none;
  }

  .link_as_container:focus .panther_container {
    outline-width: 0;
    box-shadow: var(--yellow) 0 0 0 0.25rem;
    transition: box-shadow var(--global-transition-time)  ease 0s;
  }

  .banner_container {
    width: 200px;
    height: 60px;
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

  @media screen and (min-width: 769px) {
    .container {
      background-position: 0 -6rem;
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
