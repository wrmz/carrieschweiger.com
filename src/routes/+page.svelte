<script>
	import Hero from '$lib/components/Hero.svelte';
	import RandomQuote from '$lib/components/RandomQuote.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>Carrie Schweiger</title>
	<meta name="description" content="The portfolio site of Carrie Schweiger" />
</svelte:head>

<section>
	<Hero>
		<h1 class="hero-title">Themed Experience Design</h1>
		<p class="hero-subtitle">Crafting Stories in the Real World</p>
	</Hero>
	<div class="latest">
		<div class="latest__quote"><RandomQuote /></div>
		<div class="latest__posts">
			This will eventually be a carousel
		</div>
	</div>
	<div class="latest__carrie">
		<div class="latest__carrie-bkgd">
			<picture class="latest__carrie-picture">
				<img alt="" src="https://picsum.photos/2048/1024" width="2048" height="1024" class="latest__carrie-img">
			</picture>
		</div>
		<div class="latest__project">
			<Card>
				<svelte:fragment slot="title">Latest Project</svelte:fragment>
				<svelte:fragment slot="copy">
					<p>An interactive digital walkthrough experience.</p>
				</svelte:fragment>
			</Card>
		</div>
		<div class="latest__about">
			<Card>
				<svelte:fragment slot="title">About</svelte:fragment>
				<svelte:fragment slot="copy">
					<p>An interactive digital walkthrough experience.</p>
				</svelte:fragment>
			</Card>
		</div>
	</div>
	<div class="contact">
		<div class="contact__connect">
			<h3 class="contact__title">Connect</h3>
			<p>You can find me in Orlando, Florida, but an email is probably easier. Questions big and small are welcome.</p>
			<p>You can also get occassional updates in  your inbox. Absolutely no spam.</p>
		</div>
		<div class="contact__form">

		</div>
	</div>
</section>

<style>
	.latest,
	.contact {
		display: grid;
		grid-template-columns: 400px 1fr;
		padding: 50px;
		background: var(--color-gray);
	}
	.latest__quote {
		padding-right: 50px;
		border-right: 1px solid var(--color-green);
	}
	.latest__posts {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-left: 50px;
	}
	.latest__carrie {
		position: relative;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 100px;
		padding: 100px;
		background: var(--color-gray);
	}
	.latest__carrie-bkgd {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.latest__carrie-img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.contact {
		color: var(--color-green);
	}
	.contact__title {
		font-size: 1.625rem;
		font-weight: normal;
	}
	.contact p {
		margin: 0 0 1rem;
		font-size: 1rem;
		line-height: 1.66667;
	}
</style>
