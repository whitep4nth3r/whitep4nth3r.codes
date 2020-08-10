<script>
	import Nav from '../components/Nav.svelte';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import ContentWrapper from '../components/ContentWrapper.svelte';

	export let segment;
</script>

<style>
	main {
	  padding: 0 1rem;
	}
  </style>

<Header />
<main>
  <ContentWrapper>
	<Nav {segment} />
	
	<slot></slot>
  </ContentWrapper>
</main>
<Footer />