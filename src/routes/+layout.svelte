<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Sean Washington</title>
	<link rel="icon" href="/favicon.png">
	<meta property="og:image" content="/og-image.png">
	<meta name="description" content="Software developer based in Santa Cruz, CA">
	<meta property="og:description" content="Software developer based in Santa Cruz, CA">
</svelte:head>

<div>
	<nav class="p-8 flex items-center space-x-4">
		<a href="/">
			<img
				src="/profile.png"
				class="w-12 h-12 m-0 inline-block"
				alt="Avatar of Sean Washington"
			>
			<span class="sr-only">Sean Washington</span>
		</a>
		<a
			class="no-underline text-neutral-500 dark:text-neutral-400"
			href="/posts"
		> Blog </a>
		<a
			class="no-underline text-neutral-500 dark:text-neutral-400"
			href="/bookmarks"
		> Bookmarks </a>
		<a
			class="no-underline text-neutral-500 dark:text-neutral-400"
			href="/uses"
		> Uses </a>
	</nav>

	<main class="p-8 pt-0 max-w-3xl">
		<slot />
	</main>
</div>

<footer class="p-8 text-xs flex items-center space-x-2">
	<span>© Sean Washington.</span>
	<a href="https://github.com/seanwash/seanwash-kit">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="w-4 h-4"
		>
			<path
				fill-rule="evenodd"
				d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
				clip-rule="evenodd"
			></path>
		</svg>
		<span class="sr-only">View Source</span>
	</a>
</footer>
