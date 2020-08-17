<script>

</script>

<style>
  .container {
    max-width: var(--content-container-max-width);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
    padding: 5rem 1rem 1rem 1rem;
  }

  .inner {
    max-width: var(--content-max-width);
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 690px) {
    .container {
      padding: 6rem 1rem 1rem 1rem;
    }
  }
</style>

<section class="container">
  <div class="inner">
    <slot />
  </div>
</section>
