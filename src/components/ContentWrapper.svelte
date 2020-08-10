<script lang="ts">

</script>

<style>
  .container {
    max-width: var(--content-container-max-width);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
    background-color: var(--content-bg-color);
    padding: 5rem 2rem 2rem 2rem;
    border: 0.1rem solid var(--offwhite);
    border-bottom-color: var(--green);
    border-right-color: var(--green);
    box-shadow: var(--hard-box-shadow);
  }

  .inner {
    max-width: var(--content-max-width);
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 690px) {
    .container {
      padding: 6rem 2rem 2rem 2rem;
    }
  }
</style>

<section class="container">
  <div class="inner">
    <slot />
  </div>
</section>
