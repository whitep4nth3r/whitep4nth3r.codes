<script>
  let date = new Date().getFullYear();
</script>

<style>
  .footer {
    text-align: center;
    padding-bottom: 4rem;
  }

  .copyright {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .pp_link {
    color: var(--green);
    font-size: 1rem;
    line-height: 1rem;
    display: inline-block;
    transition: color var(--global-transition-time) ease-in-out;
    text-decoration: none;
  }

  .pp_link:focus {
    outline-width: 0;
    box-shadow: var(--yellow) 0 0 0 0.25rem;
    transition: box-shadow 0.2s ease 0s;
  }

  .pp_link:visited {
    color: var(--green);
  }

  .pp_link:hover {
    color: var(--offwhite);
  }

  .pp_link:focus:active {
    outline-width: 0;
    box-shadow: unset;
  }
</style>

<footer class="footer">
  <p class="copyright">&copy; whitep4nth3r {date}</p>
  <a class="pp_link" href="/privacy_policy">Privacy Policy</a>
</footer>
