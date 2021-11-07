<script>
	import { fade } from 'svelte/transition';
	export let pokeman;
</script>

<a
	class="list-none p-1 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href={`/pokemon/${pokeman.id}`}
	transition:fade
>
	<img class="w-[200px]" src={pokeman.image} alt={pokeman.name} />
	<h2 class="uppercase text-[18px]">{pokeman.id}. {pokeman.name}</h2>
</a>
