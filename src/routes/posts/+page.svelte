<script lang="ts">
	import type { PageData } from './$types';
	import { formatLocaleDate } from '$lib/format.js';

	export let data: PageData;
</script>

<h1 id="blog">Blog</h1>

<div class="space-y-4">
	{#each data.posts as post}
		<article>
			<h2 class="mb-0 text-2xl font-semibold tracking-tight ">
				<a
					class="no-underline"
					href="/posts/{post.slug}"
				>{post.title}</a>
			</h2>

			<time
				class="text-sm"
				datetime={post.published_at}
			>{formatLocaleDate(post.published_at)}</time>

			{@html post.excerpt}

			<a href="/posts/{post.slug}">Read more →</a>
		</article>
	{/each}
</div>
