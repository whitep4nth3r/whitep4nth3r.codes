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
    font-size: 2rem;
    line-height: 2.8rem;
    margin-bottom: 2rem;
    font-weight: var(--font-weight-bold);
    font-family: var(--font-family-main);
    color: var(--white);
  }

  @media screen and (min-width: 600px) {
    .pageTitle {
      font-size: 2.8rem;
      line-height: 3.4rem;
    }
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

  .postList {
    list-style: none;
    padding-inline-start: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .postList__item {
  }

  .postList__itemLink {
    text-decoration: none;
    display: block;
    cursor: pointer;
  }

  .postList__itemLink:hover {
  }

  .postList__itemLink:focus {
    outline-width: 0;
    box-shadow: var(--yellow) 0 0 0 0.25rem;
    transition: box-shadow var(--global-transition-time) ease 0s;
  }

  .postList__itemLink:focus:active {
    outline-width: 0;
    box-shadow: unset;
  }

  .postList__date {
    font-size: 1rem;
    line-height: 1.4rem;
    margin-bottom: 1rem;
    font-weight: var(--font-weight-normal);
    font-family: var(--font-family-main);
    color: var(--white);
    font-style: italic;
    display: flex;
  }

  .postList__date:before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' height='24px' width='24px'%3E%3Cpath fill='%23ffb626' d='M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z'%3E%3C/path%3E%3C/svg%3E");
  }

  .postList__itemTitle {
    font-size: 1.4rem;
    line-height: 1.8rem;
    margin-bottom: 2rem;
    font-weight: var(--font-weight-bold);
    font-family: var(--font-family-main);
    color: var(--yellow);
  }

  .postList__itemExcerpt {
    font-size: 1.2rem;
    line-height: 1.8rem;
    margin-bottom: 2rem;
    font-weight: var(--font-weight-normal);
    font-family: var(--font-family-main);
    color: var(--white);
  }

  .postList__readMore {
    color: var(--yellow);
    font-size: 1.2rem;
    line-height: 1.8rem;
    margin-bottom: 2rem;
    font-weight: var(--font-weight-bold);
    font-family: var(--font-family-main);
    text-decoration: none;
    padding-bottom: 0.125rem;
    border-bottom: 0.125rem solid var(--yellow);
    transition: color var(--global-transition-time) ease-in-out,
      border-color var(--global-transition-time) ease-in-out;
    cursor: pointer;
  }

  .postList__readMore:hover {
    color: var(--white);
    border-color: var(--white);
  }

  .postList__readMore:focus {
    outline-width: 0;
    box-shadow: var(--yellow) 0 0 0 0.25rem;
    transition: box-shadow var(--global-transition-time) ease 0s;
  }

  .postList__readMore:focus:active {
    outline-width: 0;
    box-shadow: unset;
  }
</style>

<MetaData {metadata} />

<h1 class="pageTitle">Blog</h1>
<h2 class="pageSubtitle">Build stuff, learn things, love what you do.</h2>

<ul class="postList">
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li class="postList__item">
      <a class="postList__itemLink" rel="prefetch" href="blog/{post.slug}">
        <span class="postList__date">{post.date}</span>
        <h3 class="postList__itemTitle">{post.title}</h3>
        <p class="postList__itemExcerpt">
          {post.excerpt.length > 240 ? post.excerpt.substr(0, 237) + '...' : post.excerpt}
        </p>
      </a>
      <a rel="prefetch" href="blog/{post.slug}" class="postList__readMore">
        Read more
      </a>
    </li>
  {/each}
</ul>
