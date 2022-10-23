<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.scss';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	:global(.hero-title) {
		font-weight: normal;
		line-height: 1.3;
		margin: 0;
		color: var(--color-gray);
	}
	:global(.hero-subtitle) {
		margin: 0;
		line-height: 1.66667;
		color: var(--color-gray);
	}
</style>
