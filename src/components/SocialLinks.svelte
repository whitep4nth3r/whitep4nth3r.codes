<script lang="ts">
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
</style>

{#if visible}
<div class="container">
  <a transition:scale={{ delay: 250, duration: 300, opacity: 0.5, easing: quintOut }}
    class="link"
    href="https://twitch.tv/whitep4nth3r"
    aria-label="Join whitep4nth3r on Twitch"
    rel="noopener noreferrer"
    target="_blank">
    <Twitch fill="#ffffff" />
  </a>
  <a transition:scale={{ delay: 250, duration: 300, opacity: 0.5, easing: quintOut }}  
    class="link"
    href="https://twitter.com/whitep4nth3r"
    aria-label="Follow whitep4nth3r on Twitter"
    rel="noopener noreferrer"
    target="_blank">
    <Twitter fill="#ffffff" />
  </a>
  <a transition:scale={{ delay: 250, duration: 300, opacity: 0.5, easing: quintOut }}
    class="link"
    href="https://discord.gg/HPXM3vh"
    aria-label="Join us on Discord"
    rel="noopener noreferrer"
    target="_blank">
    <Discord fill="#ffffff" />
  </a>
  <a transition:scale={{ delay: 250, duration: 300, opacity: 0.5, easing: quintOut }} 
    class="link"
    href="https://github.com/whitep4nth3r"
    aria-label="Browse code on Github"
    rel="noopener noreferrer"
    target="_blank">
    <Github fill="#ffffff" />
  </a>
</div>
{/if}