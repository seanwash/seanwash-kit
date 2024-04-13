<script lang="ts">
	import type { PageData } from './$types';
	import { formatLocaleDate } from '$lib/format.js';

	export let data: PageData;
</script>

<h1 class="mb-0">{data.post.title}</h1>
<time datetime={data.post.published_at}>{formatLocaleDate(data.post.published_at)}</time>

{@html data.post.body}
