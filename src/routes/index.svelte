<script>
	import PokemanCard from '../components/pokemonCard.svelte';
	import { pokemon, fetchPokemon } from '../store/pokestore';

	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...$pokemon];
		}
	}

	fetchPokemon();
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<h1 class="text-[32px] text-center my-8 uppercase">SvelteKit Pokedex</h1>
<input
	class="w-full rounded-md text-[16px] p-1 border-2 border-gray-200"
	bind:value={searchTerm}
	placeholder="Search Pokemon"
/>
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as pokeman}
		<PokemanCard {pokeman} />
	{/each}
</div>
