<script>
	import { scale } from "svelte/transition";
	import { quintOut } from "svelte/easing";
	let visible = false;
	setTimeout(() => (visible = true));
  
	import Meta from '../components/Meta.svelte'
	  
	  const metadata = {
		  title: 'About whitep4nth3r | Build stuff, learn things, love what you do.',
		  description: 'whitep4nth3r streams Science & Technology on Twitch specialising in front end development with a focus on teaching and learning.',
		  image: 'https://whitep4nth3r.codes/img/MajickWhitep4nth3r.png',
		  imageAlt: 'whitep4nth3r',
		  url:'https://whitep4nth3r.codes/about'
	  }
  </script>
  
  <style>
	:root {
	  --image-size: 12.5rem;
	}
  
	.heading {
	  text-align: center;
	  margin-left: auto;
	  margin-right: auto;
	  display: flex;
	  align-content: center;
	  justify-content: center;
	  font-size: clamp(1.2rem, 4.058vw, 1.8rem);
	  line-height: clamp(2rem, 4.058vw, 2.4rem);
	  margin-bottom: 2rem;
	  color: var(--white);
	  font-weight: var(--font-weight-bold);
	}
  
	.tagline {
	  font-size: clamp(1rem, 4.058vw, 1.2rem);
	  line-height: clamp(1.8rem, 4.058vw, 2rem);
	  text-align: center;
	  margin: 0 auto 2rem auto;
	  font-style: italic;
	}
  
	.copy {
	  font-size: clamp(0.9rem, 4.058vw, 1rem);
	  line-height: clamp(1.6rem, 4.058vw, 1.8rem);
	  margin-bottom: 2rem;
	}
  
	.imgContainer {
	  overflow: hidden;
	  border-radius: 50%;
	  margin-left: auto;
	  margin-right: auto;
	  margin-bottom: 2rem;
	  width: var(--image-size);
	  height: var(--image-size);
	  border: 0.5rem solid var(--yellow);
	}
  
	.image {
	  object-fit: cover;
	  width: var(--image-size);
	  height: var(--image-size);
	}
  
	@media screen and (min-width: 690px) {
	  .tagline {
		margin: 1rem auto 3rem auto;
	  }
	}
  </style>
  
  <Meta {metadata}/>
  
  <h1 class="heading">About whitep4nth3r</h1>
  {#if visible}
	<div
	  class="imgContainer"
	  transition:scale={{ delay: 250, duration: 300, opacity: 0.5, easing: quintOut }}>
	  <img
		class="image"
		src="./img/MajickWhitep4nth3r.png"
		alt="whitep4nth3r as Majick Panther" />
	</div>
  {/if}
  
  <h2 class="tagline">Build stuff, learn things, love what you do.</h2>
  
  <p class="copy">
	Hey, I'm Salma. I wrote my first programme on a Commodore 64 at age 6. I built
	my first website at age 13 at the dawn of the home internet connection. I
	always wanted to be a software engineer. However, during my teenage years in
	the 90s, there were very few resources to learn from, even fewer role models
	to share my aspirations with, and even fewer ways to engage with people to
	guide me.
  </p>
  
  <p class="copy">
	I was fortunate to be able to switch up my career from music teaching to
	software engineering in 2014 - and I've never looked back. But I can't help
	wondering where I might be if I'd had opportunities, support and guidance from
	the tech industry when I was younger.
  </p>
  
  <p class="copy">
	I'm on a mission to promote access to science and technology. We are living in
	the future, and anyone, of any age, from anywhere across the globe deserves
	access to a wealth of tech resources, guidance and inspiration that I so
	deeply desired when I was younger.
  </p>
  
  <p class="tagline">
	I'm coding live, I'm building a community, and I'm offering a platform to
	build confidence, share ideas, and most importantly - learn.
  </p>
  