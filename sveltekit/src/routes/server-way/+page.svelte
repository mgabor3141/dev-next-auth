<script lang="ts">
	import { remult } from 'remult';

	export let data;
	$: remult.user = data.remultUser;
</script>

<div>
	<h1>Server Way</h1>
	<main>
		{#if remult.user}
			<img src={remult.user.image} alt="profile pic" />
			<p>Welcome, {remult.user?.name}!</p>
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
