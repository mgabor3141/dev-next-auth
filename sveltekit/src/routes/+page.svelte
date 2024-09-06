<script lang="ts">
	import { remult, type UserInfo } from 'remult';
	import { onMount } from 'svelte';
	import { AuthController } from '../shared/AuthController';

	// SvelteKit server Way
	export let data;
	$: remult.user = data.remultUser;

	// Controller way
	let user: UserInfo | undefined;
	onMount(async () => {
		user = await AuthController.currentUser();
	});
</script>

<div>
	<h1>todos</h1>
	<main>
		<!-- SvelteKit server Way -->
		{#if remult.user}
			<img src={remult.user.image} alt="profile pic" />
			<p>Welcome, {remult.user?.name}!</p>
			<a href="/auth/signout">Sign out </a>
		{:else}
			<p>Not logged in.</p>
			<a href="/auth/signin">Sign in </a>
		{/if}
		<br />
		<br />
		<!-- Controller way -->
		{#if user}
			<img src={user.image} alt="profile pic" />
			<p>Welcome, {user.name}!</p>
			<a href="/auth/signout">Sign out </a>
		{:else}
			<p>Not logged in.</p>
			<a href="/auth/signin">Sign in </a>
		{/if}
	</main>
</div>

<style>
	img {
		border-radius: 50%;
		width: 30px;
	}
</style>
