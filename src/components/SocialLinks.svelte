<script>
  import Twitch from "../svgs/social/Twitch.svelte";
  import Github from "../svgs/social/Github.svelte";
  import Twitter from "../svgs/social/Twitter.svelte";
  import Discord from "../svgs/social/Discord.svelte";

  import { scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  let visible = false;
  setTimeout(() => (visible = true));
</script>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  .link {
    width: 20%;
    cursor: pointer;
    max-width: 44px;
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

{#if visible}
  <div class="container">
    <a
      transition:scale={{ delay: 250, duration: 300, opacity: 0.5, easing: quintOut }}
      class="link"
      href="https://twitch.tv/whitep4nth3r"
      aria-label="Join whitep4nth3r on Twitch"
      rel="noopener noreferrer"
      target="_blank">
      <Twitch fill="#ffffff" />
    </a>
    <a
      transition:scale={{ delay: 250, duration: 300, opacity: 0.5, easing: quintOut }}
      class="link"
      href="https://twitter.com/whitep4nth3r"
      aria-label="Follow whitep4nth3r on Twitter"
      rel="noopener noreferrer"
      target="_blank">
      <Twitter fill="#ffffff" />
    </a>
    <a
      transition:scale={{ delay: 250, duration: 300, opacity: 0.5, easing: quintOut }}
      class="link"
      href="https://github.com/whitep4nth3r"
      aria-label="Browse code on Github"
      rel="noopener noreferrer"
      target="_blank">
      <Github fill="#ffffff" />
    </a>
  </div>
{/if}
