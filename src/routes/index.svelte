<script>
  import SocialLinks from "../components/SocialLinks.svelte";
  import MetaData from "../components/MetaData.svelte";

  const metadata = {
    title: "whitep4nth3r.codes | Build stuff, learn things, love what you do.",
    description:
      "Hi, friends! I'm Salma. I help developers build stuff, learn things, and love what they do. I'm a Staff Developer Experience engineer at Netlify. I'm also a Microsoft MVP for developer technologies, a partnered live streamer on Twitch, and a qualified teacher. I love helping people get into tech.",
    image: "https://whitep4nth3rcodes.netlify.app/img/MajickWhitep4nth3r.png",
    imageAlt: "whitep4nth3r",
    url: "https://whitep4nth3rcodes.netlify.app",
  };

  export let iframeSrc = `https://player.twitch.tv/?channel=whitep4nth3r&parent=whitep4nth3rcodes.netlify.app`;
</script>

<style>
  .heading {
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

  .videoWrapper {
    position: relative;
    padding-bottom: 56.25%;
    margin-bottom: 2rem;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .link {
    color: var(--green);
    transition: color var(--global-transition-time) ease-in-out;
    text-decoration: none;
  }

  .link:visited {
    color: var(--green);
  }

  .link:hover {
    color: var(--white);
  }

  .link:focus {
    outline-width: 0;
    box-shadow: var(--yellow) 0 0 0 0.25rem;
    transition: box-shadow var(--global-transition-time) ease 0s;
  }

  .link:focus:active {
    outline-width: 0;
    box-shadow: unset;
  }

</style>

<MetaData {metadata} />

<h1 class="heading">Build stuff, learn things, love what you do.</h1>

<p class="tagline">
  Hi, friends! I'm Salma. I help developers build stuff, learn things, and love what they do. I'm a Staff Developer Experience engineer at Netlify. I'm also a Microsoft MVP for developer technologies, a partnered live streamer on Twitch, and a qualified teacher. I love helping people get into tech.
</p>

<SocialLinks />

<div class="videoWrapper">
  <iframe
    src={iframeSrc}
    height="100%"
    width="100%"
    frameborder="0"
    scrolling="no"
    title="whitep4nth3r on Twitch"
    allowfullscreen="true" />
</div>
