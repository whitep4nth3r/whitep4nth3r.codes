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
    color: var(--green);
    font-size: 1rem;
    line-height: 1rem;
    transition: color var(--global-transition-time) ease-in-out;
    display: inline-block;
    text-decoration: none;
  }

  .navLink:visited {
    color: var(--green);
  }

  .navLink:hover {
    color: var(--offwhite);
  }

  .navLink:focus:active {
    outline-width: 0;
    box-shadow: unset;
  }

  .navLink.active {
    color: var(--offwhite) !important;
    border-bottom: 2px solid var(--offwhite);
  }
</style>

<nav class="nav">
  <a
    class="navLink"
    class:active={segment === undefined ? 'page' : undefined}
    href=".">
    Home
  </a>
  <a
    class="navLink"
    class:active={segment === 'about' ? 'page' : undefined}
    href="about">
    About
  </a>
  <a
    class="navLink"
    class:active={segment === 'blog' ? 'page' : undefined}
    href="blog">
    Blog
  </a>
</nav>
