<script context="module" lang="ts">
	import { publicPages } from '$lib/consts';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load(session) {
		const { path } = session.page;
		console.log('path', path, session.session.isLoggedIn);
		if (publicPages.includes(path)) {
			return {};
		}

		if (!session.session.isLoggedIn) {
			return {
				status: 301,
				redirect: '/'
			};
		}
		return {};
	}
</script>

<script>
	import Nav from '../components/nav.svelte';
	import { session } from '$app/stores';
	import Cookies from 'js-cookie';
	function login() {
		Cookies.set('token', 'haha');
		window.location.reload();
	}
	function logout() {
		Cookies.remove('token');
		window.location.reload();
	}
	$: {
		console.log('render', $session.isLoggedIn);
	}
</script>

<div class="p-8 max-w-6xl mx-auto DIV">
	<Nav />
	{#if $session.isLoggedIn}
		<button on:click={logout} class="font-bold hover:underline">Logout</button>
	{:else}
		<button on:click={login} class="font-bold hover:underline">Login</button>
	{/if}
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	.DIV {
		margin: 6px;
	}
</style>
