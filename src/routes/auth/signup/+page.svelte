<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div>
	<h1>Sign up</h1>
	<form method="post" use:enhance class="flex m-3">
		<label for="username">Username</label>
		<input name="username" id="username" />
		<label for="password">Password</label>
		<input type="password" name="password" id="password" />
		<input type="submit" />
	</form>
	<a href="/auth/login" class="border border-gray-400 px-2 py-1">Sign in</a>
</div>
