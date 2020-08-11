<script>
  import SocialLinks from "../components/SocialLinks.svelte";

  import Meta from "../components/Meta.svelte";

  const metadata = {
    title: "whitep4nth3r.codes | Build stuff, learn things, love what you do.",
    description:
      "whitep4nth3r streams Science & Technology on Twitch specialising in front end development with a focus on teaching and learning.",
    image: "https://whitep4nth3r.codes/img/MajickWhitep4nth3r.png",
    imageAlt: "whitep4nth3r",
    url: "https://whitep4nth3r.codes",
  };
</script>

<style>
  .heading {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    min-height: 5rem;
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: clamp(1.2rem, 4.058vw, 1.8rem);
    line-height: clamp(2rem, 4.058vw, 2.4rem);
    margin-bottom: clamp(2rem, 4.058vw, 3rem);
    color: var(--offwhite);
    font-weight: var(--font-weight-bold);
  }

  .tagline {
    font-size: clamp(1rem, 4.058vw, 1.2rem);
    line-height: clamp(1.8rem, 4.058vw, 2rem);
    text-align: center;
    margin: 0 auto 3rem auto;
    color: var(--offwhite);
  }

  @media screen and (min-width: 690px) {
    .tagline {
      margin: 1rem auto 3rem auto;
    }

    .heading {
      min-height: 4rem;
    }
  }
</style>

<Meta {metadata} />

<h1 class="heading">Build stuff, learn things, love what you do.</h1>

<p class="tagline">
  Salma streams Science & Technology on Twitch specialising in front end
  development with a focus on teaching and learning.
</p>

<SocialLinks />
