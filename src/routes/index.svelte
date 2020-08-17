<script>
  import SocialLinks from "../components/SocialLinks.svelte";

  import MetaData from "../components/MetaData.svelte";

  const metadata = {
    title: "whitep4nth3r.codes | Build stuff, learn things, love what you do.",
    description:
      "Salma is a Lead Engineer specialising in front end development, streaming Science & Technology on Twitch with a focus on inclusivity, teaching and learning.",
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
    font-size: 2rem;
    line-height: 2.8rem;
    margin-bottom: 3rem;
    color: var(--white);
    font-weight: var(--font-weight-bold);
  }

  @media screen and (min-width: 600px) {
    .heading {
      font-size: 2.8rem;
      line-height: 3.4rem;
    }
  }

  .tagline {
    font-size: 1.2rem;
    line-height: 1.8rem;
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

<MetaData {metadata} />

<h1 class="heading">Build stuff, learn things, love what you do.</h1>

<p class="tagline">
  Salma is a Lead Engineer specialising in front end development, streaming
  Science & Technology on Twitch with a focus on inclusivity, teaching and
  learning.
</p>

<SocialLinks />
