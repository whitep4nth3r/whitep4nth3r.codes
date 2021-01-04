<script>
  export let segment;
</script>

<style>
  .nav {
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;
  }

  .navLink {
    padding: 0.8rem 1rem;
    text-transform: uppercase;
    color: var(--yellow);
    font-size: 1rem;
    line-height: 1rem;
    transition: color var(--global-transition-time) ease-in-out;
    display: inline-block;
    text-decoration: none;
    font-weight: var(--font-weight-bold);
  }

  .navLink:visited {
    color: var(--yellow);
  }

  .navLink:hover {
    color: var(--white);
  }

  .navLink:focus:focus {
    outline-width: 0;
    box-shadow: var(--yellow) 0 0 0 0.25rem;
    transition: box-shadow var(--global-transition-time) ease 0s;
  }

  .navLink:focus:active {
    outline-width: 0;
    box-shadow: unset;
  }

  .navLink.active {
    color: var(--white) !important;
    border-bottom: 0.25rem solid var(--white);
  }
</style>

<nav class="nav">
  <a
    class="navLink"
    class:active={segment === undefined ? 'page' : undefined}
    href=".">
    Home
  </a>
  <!-- <a
    class="navLink"
    class:active={segment === 'about' ? 'page' : undefined}
    href="about">
    About
  </a> -->
  <a
    class="navLink"
    class:active={segment === 'blog' ? 'page' : undefined}
    href="blog">
    Blog
  </a>
</nav>
