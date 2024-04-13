<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData
</script>

<h1 id="uses">Uses</h1>
<p>A list of various tools and services that I use and recommend.</p>

<ul class="space-y-4">
	{#each data.tools as tool}
		<li>
			<article class="space-y-1">
				<h1 class="text-base">
					<a target="_blank" href={tool.url}>{tool.name}</a>
					<span class="capitalize text-neutral-400 font-light">({tool.free ? 'Free' : 'Paid'})</span>
				</h1>

				{@html tool.description}
			</article>
		</li>
	{/each}
</ul>
