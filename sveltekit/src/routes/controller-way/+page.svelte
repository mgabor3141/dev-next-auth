<script lang="ts">
	import { remult, type UserInfo } from 'remult';
	import { onMount } from 'svelte';
	import { AuthController } from '../../shared/AuthController';

	let user: UserInfo | undefined;
	onMount(async () => {
		user = await AuthController.currentUser();
	});
</script>

<div>
	<h1>Controller way</h1>
	<main>
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
