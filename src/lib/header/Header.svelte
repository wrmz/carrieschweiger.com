<script>
	import { page } from '$app/stores';
	import Logo from '$lib/svg/Logo.svelte';
</script>

<header class="global-header">
	<a
		href="/"
		class="global-header__logo"
		aria-label="Carrie Schweiger Homepage"
	><Logo /></a>
	<nav class="global-header__nav">
		<a href="#blog" class="global-header__link">Blog</a>
		<a href="#latest" class="global-header__link">Latest</a>
		<a href="#about" class="global-header__link">About</a>
		<a href="#connect" class="global-header__link">Connect</a>
	</nav>
</header>

<style lang="scss">
	@import 'src/styles/utils';
	.global-header {
		display: grid;
		grid-template-columns: max-content max-content;
		align-items: center;
		justify-content: space-between;
		height: 80px;
		gap: 20px;
		padding: 0 20px;
		background: color(green);
		@media #{$greaterthanMobile} {
			padding: 0 30px;
		}
		@media #{$greaterthanTablet} {
			padding: 0 50px;
		}
	}
	.global-header__logo {
		display: block;
		color: color(gray);
		transition: color .17s ease-out;
		&:hover {
			color: darken(color(gray), 10%);
		}
	}

	.global-header__nav {
		display: grid;
		grid-auto-flow: column dense;
		grid-auto-columns: max-content;
		gap: 20px;
		@media #{$greaterthanMobile} {
			gap: 30px;
		}
		@media #{$greaterthanTablet} {
			gap: 50px;
		}
	}

	.global-header__link {
		display: block;
		color: color(gray);
		transition: color .17s ease-out;
		&:hover {
			color: darken(color(gray), 10%);
		}
	}
</style>
