<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData
</script>

<h1 id="bookmarks">Bookmarks</h1>
<p>A list of articles, videos, and sites that have resonated with me.</p>

<ul class="space-y-4">
	{#each data.bookmarks as bookmark}
		<li>
			<article class="space-y-1">
				<h1 class="text-base">
					<a target="_blank" href={bookmark.url}>{bookmark.name}</a>
					<span class="capitalize text-neutral-400 font-light">({bookmark.type.join(', ')})</span>
				</h1>

				{@html bookmark.description}
			</article>
		</li>
	{/each}
</ul>
