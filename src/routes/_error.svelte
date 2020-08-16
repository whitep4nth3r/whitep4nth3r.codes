<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  .pageTitle {
    font-size: 2.8rem;
    line-height: 3.4rem;
    margin-bottom: 2rem;
    font-weight: var(--font-weight-bold);
    font-family: var(--font-family-main);
    color: var(--white);
    display: flex;
    align-items: flex-start;
  }

  .pageTitle:before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' height='48px' width='48px'%3E%3Cpath fill='%23ffb626' d='M151.17 167.35L177.1 176h4.67l5.22-26.12c.72-3.58 1.8-7.58 3.21-11.79l-20.29-40.58 23.8-71.39c2.79-8.38-1.73-17.44-10.12-20.24L168.42.82c-8.38-2.8-17.45 1.73-20.24 10.12l-25.89 77.68a32.04 32.04 0 0 0 1.73 24.43l27.15 54.3zm422.14 182.03l-52.75-79.12a32.002 32.002 0 0 0-26.62-14.25H416l68.99-24.36a32.03 32.03 0 0 0 16.51-12.61l53.6-80.41c4.9-7.35 2.91-17.29-4.44-22.19l-13.31-8.88c-7.35-4.9-17.29-2.91-22.19 4.44l-50.56 75.83L404.1 208H368l-10.37-51.85C355.44 145.18 340.26 96 288 96c-52.26 0-67.44 49.18-69.63 60.15L208 208h-36.1l-60.49-20.17L60.84 112c-4.9-7.35-14.83-9.34-22.19-4.44l-13.31 8.88c-7.35 4.9-9.34 14.83-4.44 22.19l53.6 80.41a32.03 32.03 0 0 0 16.51 12.61L160 256H82.06a32.02 32.02 0 0 0-26.63 14.25L2.69 349.38c-4.9 7.35-2.92 17.29 4.44 22.19l13.31 8.88c7.35 4.9 17.29 2.91 22.19-4.44l48-72h47.06l-60.83 97.33A31.988 31.988 0 0 0 72 418.3V496c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-73.11l74.08-118.53c-1.01 14.05-2.08 28.11-2.08 42.21C192 399.64 232.76 448 288 448s96-48.36 96-101.43c0-14.1-1.08-28.16-2.08-42.21L456 422.89V496c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-77.71c0-6-1.69-11.88-4.86-16.96L438.31 304h47.06l48 72c4.9 7.35 14.84 9.34 22.19 4.44l13.31-8.88c7.36-4.9 9.34-14.83 4.44-22.18zM406.09 97.51l-20.29 40.58c1.41 4.21 2.49 8.21 3.21 11.79l5.22 26.12h4.67l25.93-8.65 27.15-54.3a31.995 31.995 0 0 0 1.73-24.43l-25.89-77.68C425.03 2.56 415.96-1.98 407.58.82l-15.17 5.06c-8.38 2.8-12.91 11.86-10.12 20.24l23.8 71.39z'%3E%3C/path%3E%3C/svg%3E");
    margin-right: 0.5rem;
  }

  .pageSubtitle {
    font-size: 1.4rem;
    line-height: 1.8rem;
    margin-bottom: 4rem;
    font-weight: var(--font-weigh-normal);
    font-family: var(--font-family-main);
    color: var(--white);
    font-style: italic;
  }

  .pageLink {
    color: var(--yellow);
    font-size: 1.2rem;
    line-height: 2rem;
    margin-bottom: 2rem;
    font-weight: var(--font-weight-bold);
    font-family: var(--font-family-main);
    text-decoration: none;
    padding-bottom: 0.125rem;
    border-bottom: 0.125rem solid var(--yellow);
    transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    cursor: pointer;
  }

  .pageLink:hover {
    color: var(--white);
    border-color: var(--white);
  }

  .pageLink:focus {
    outline-width: 0;
    box-shadow: var(--yellow) 0 0 0 0.25rem;
    transition: box-shadow 0.2s ease 0s;
  }

  .pageLink:focus:active {
    outline-width: 0;
    box-shadow: unset;
  }
</style>

<svelte:head>
  <title>{status} | whitep4nth3r.codes</title>
</svelte:head>

<h1 class="pageTitle">{status}</h1>

<h2 class="pageSubtitle">{error.message}! These things happen.</h2>

<a href="/" class="pageLink">
  Go back to the home page, do not pass Go, do not collect £200.
</a>
