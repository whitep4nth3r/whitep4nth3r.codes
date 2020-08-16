<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  import MetaData from "../../components/MetaData.svelte";

  export let posts;
  console.log(posts);

  const metadata = {
    title:
      "Blog | whitep4nth3r.codes | Build stuff, learn things, love what you do.",
    description:
      "Salma is a Lead Engineer specialising in front end development, streaming Science & Technology on Twitch with a focus on inclusivity, teaching and learning.",
    image: "https://whitep4nth3r.codes/img/MajickWhitep4nth3r.png",
    imageAlt: "whitep4nth3r",
    url: "https://whitep4nth3r.codes/blog",
  };
</script>

<style>
  .pageTitle {
    font-size: 2.8rem;
    line-height: 3.4rem;
    margin-bottom: 2rem;
    font-weight: var(--font-weight-bold);
    font-family: var(--font-family-main);
    color: var(--white);
  }

  .pageSubtitle {
    font-size: 1.4rem;
    line-height: 1.8rem;
    margin-bottom: 2rem;
    font-weight: var(--font-weigh-normal);
    font-family: var(--font-family-main);
    color: var(--white);
    font-style: italic;
  }
</style>

<MetaData {metadata} />

<h1 class="pageTitle">Blog</h1>
<h3 class="pageSubtitle">Build stuff, learn things, love what you do.</h3>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="blog/{post.slug}">{post.title} {post.excerpt}</a>
    </li>
  {/each}
</ul>
