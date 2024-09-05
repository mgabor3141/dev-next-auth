<script lang="ts">
	import { remult, type UserInfo } from 'remult';
	import { onMount } from 'svelte';
	import { AuthController } from '../shared/AuthController';

	let user: UserInfo | undefined;

	onMount(async () => {
		user = await AuthController.currentUser();
	});
</script>

<div>
	<h1>todos</h1>
	<main>
		{#if user}
			<p>Welcome, {user.name}!</p>
			<a href="/auth/signout">Sign out </a>
		{:else}
			<p>Not logged in.</p>
			<a href="/auth/signin">Sign in </a>
		{/if}
	</main>
</div>
