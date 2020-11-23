<script context="module">
  import MetaData from "../../components/MetaData.svelte";
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/

  h1 {
    font-size: 2rem;
    line-height: 2.8rem;
    margin-bottom: 3rem;
    font-weight: var(--font-weight-bold);
    font-family: var(--font-family-main);
    color: var(--white);
  }

  @media screen and (min-width: 600px) {
    h1 {
      font-size: 2.8rem;
      line-height: 3.4rem;
    }
  }

  .content :global(h2) {
    font-size: 1.8rem;
    line-height: 2.4rem;
    margin-bottom: 2rem;
    margin-top: 6rem;
    font-weight: var(--font-weight-bold);
    font-family: var(--font-family-main);
    color: var(--yellow);
  }

  @media screen and (min-width: 600px) {
    .content :global(h2) {
      font-size: 2.2rem;
      line-height: 3rem;
    }
  }

  .content :global(h3) {
    font-size: 1.4rem;
    line-height: 1.8rem;
    margin-bottom: 2rem;
    font-weight: var(--font-weight-bold);
    font-family: var(--font-family-main);
    color: var(--yellow);
  }

  .content :global(p) {
    font-size: 1.2rem;
    line-height: 1.8rem;
    margin-bottom: 2rem;
    font-weight: var(--font-weight-normal);
    font-family: var(--font-family-main);
    color: var(--white);
  }

  .content :global(ul) {
    display: block;
    list-style-type: disc;
    margin-block-start: 3rem;
    margin-block-end: 3rem;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 4rem;
  }

  .content :global(ol) {
    display: block;
    list-style-type: decimal;
    margin-block-start: 3rem;
    margin-block-end: 3rem;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 4rem;
  }

  .content :global(li) {
    font-size: 1.2rem;
    line-height: 1.6rem;
    margin-bottom: 1rem;
    font-weight: var(--font-weight-normal);
    font-family: var(--font-family-main);
    color: var(--white);
  }

  .content :global(a) {
    color: var(--green);
    transition: color var(--global-transition-time) ease-in-out;
    text-decoration: none;
  }

  .content :global(a):visited {
    color: var(--green);
  }

  .content :global(a):hover {
    color: var(--white);
  }

  .content :global(a):focus {
    outline-width: 0;
    box-shadow: var(--yellow) 0 0 0 0.25rem;
    transition: box-shadow var(--global-transition-time) ease 0s;
  }

  .content :global(a):focus:active {
    outline-width: 0;
    box-shadow: unset;
  }

  .content :global(blockquote) {
    display: block;
    margin-block-start: 4rem;
    margin-block-end: 4rem;
    margin-inline-start: 2rem;
    margin-inline-end: 2rem;
  }

  .content :global(blockquote) :global(p) {
    font-style: italic;
    font-size: 1.2rem;
    line-height: 1.8rem;
  }

  @media screen and (min-width: 600px) {
    .content :global(blockquote) {
      margin-inline-start: 4rem;
      margin-inline-end: 4rem;
    }

    .content :global(blockquote) :global(p) {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }

  .content :global(blockquote):before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' height='44px' width='44px'%3E%3Cpath fill='%2382af3a' d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z' /%3E%3C/svg%3E%0A");
  }

  .content :global(table) {
    width: 100%;
    text-align: left;
    border: 0.125rem solid var(--offwhite);
    border-collapse: collapse;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .content :global(tr) {
    border-bottom: 0.125rem solid var(--offwhite);
    padding: 0.5rem;
  }

  .content :global(td),
  .content :global(th) {
    border-bottom: 0.125rem solid var(--offwhite);
    border-right: 0.125rem solid var(--offwhite);
    padding: 0.5rem;
  }

  .content :global(td):last-of-type,
  .content :global(th):last-of-type {
    border-right-width: 0;
  }

  .content :global(hr) {
    margin-bottom: 2rem;
  }

  .content :global(thead) {
  }

  .content :global(img) {
    width: 100%;
  }

  .content :global(figure) {
    width: 100%;
    display: block;
    margin-top: 4rem;
    margin-bottom: 4rem;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  .content :global(figure) :global(img) {
    margin-bottom: 1rem;
    border: 0.25rem solid var(--yellow);
  }

  .content :global(figure) :global(figcaption) {
    font-size: 1.2rem;
    line-height: 1.8rem;
    font-style: italic;
    margin-top: 1rem;
    color: var(--yellow);
  }

  .content :global(pre) {
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 2rem;
    border: 0.125rem solid var(--offwhite);
    box-shadow: 8px 8px 0 0 var(--offwhite);
    white-space: pre-wrap;
    word-break: break-word;
  }

  .content :global(code) {
    line-height: 1.4rem;
  }

  .tags {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
    margin-top: 0;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .tags__tag {
    background-color: var(--red-darker);
    color: var(--white);
    text-transform: uppercase;
    font-size: 1rem;
    border: 0.125rem solid var(--white);
    border-radius: 1rem;
    padding: 0.25rem 0.5rem;
    font-weight: var(--font-weight-normal);
    font-family: var(--font-family-main);
    font-size: 0.875rem;
    text-decoration: none;
    margin-right: 0.5rem;
    margin-bottom: 0.75rem;
  }

  .meta {
    font-size: 1rem;
    line-height: 1.4rem;
    margin-bottom: 2rem;
    font-weight: var(--font-weight-normal);
    font-family: var(--font-family-main);
    color: var(--white);
    font-style: italic;
    display: flex;
  }

  .meta:before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' height='24px' width='24px'%3E%3Cpath fill='%23ffb626' d='M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z'%3E%3C/path%3E%3C/svg%3E");
  }

  .backToBlog {
    color: var(--yellow);
    font-size: 1.2rem;
    line-height: 1.8rem;
    margin-bottom: 2rem;
    margin-top: 6rem;
    font-weight: var(--font-weight-bold);
    font-family: var(--font-family-main);
    text-decoration: none;
    padding-bottom: 0.125rem;
    border-bottom: 0.125rem solid var(--yellow);
    transition: color var(--global-transition-time) ease-in-out,
      border-color var(--global-transition-time) ease-in-out;
    cursor: pointer;
    display: flex;
    align-items: flex-start;
  }

  .backToBlog:hover {
    color: var(--white);
    border-color: var(--white);
  }

  .backToBlog:focus {
    outline-width: 0;
    box-shadow: var(--yellow) 0 0 0 0.25rem;
    transition: box-shadow var(--global-transition-time) ease 0s;
  }

  .backToBlog:focus:active {
    outline-width: 0;
    box-shadow: unset;
  }

  .backToBlog:before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' height='24px' width='24px'%3E%3Cpath fill='%23ffb626' d='M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z'%3E%3C/path%3E%3C/svg%3E");
    margin-right: 0.5rem;
  }

  .hidden {
    display: none;
  }
</style>

<MetaData metadata={post.metadata} />

<section itemscope itemtype="http://schema.org/CreativeWork">

  <span
    class="hidden"
    itemprop="author"
    itemscope
    itemtype="http://schema.org/Person">
    {post.author}
  </span>

  <span class="hidden" itemprop="description">{post.excerpt}</span>
  <span class="hidden" itemprop="keywords">{post.tags}</span>

  <div class="tags">
    {#each post.tags as tag}
      <span class="tags__tag">{tag}</span>
    {/each}
  </div>

  <span class="meta">{post.date} | {post.author}</span>
  <h1 itemprop="name">{post.title}</h1>

  <div class="content">
    {@html post.html}
  </div>

  <a href="/blog" class="backToBlog">Back to blog</a>

</section>
