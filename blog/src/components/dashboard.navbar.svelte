<script context="module" >
	import {useAuthListener}  from '../utils/authListener';
	let userDetails;
	userDetails = useAuthListener();
</script>

<script lang="ts">
	import profile from '../assets/images/user/profile_picture.jpg';
	import { userSignout } from '../utils/firebase.apis';
    
	import { localStore } from '../services/localStorage';
	
	export let active: string;
	export let search: boolean = false;

	 
     localStore.subscribe((value: string) => value && (userDetails = JSON.parse(value)));

	let user: {
		loggedIn: boolean;
		user: {};
		dropdown: boolean;
	} = {
		loggedIn: userDetails ? true : false,
		user: userDetails,
		dropdown: false
	};
    
    

	function handleClick(e) {
		e.preventDefault();
		search = !search;
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	function handleSignout() {
		const message = userSignout();
		console.log(message);
	}



</script>

<nav
	on:click={() => {
		search = false;
		user.dropdown = false;
	}}
	class="navbar"
>
	<div class="navbar-block">
		<form
			on:submit={handleSubmit}
			style="border: {search ? '1.5px solid #000' : 0}"
			class="navbar-search"
		>
			<input
				on:click={(e) => e.stopPropagation()}
				style="display: {search ? 'block' : 'none'}"
				class="navbar-input"
				type="text"
			/>
			<button
				on:click={(e) => {
					e.stopPropagation();
					handleClick(e);
				}}
				class="navbar-icon-button"
			>
				<svg
					width="30"
					height="30"
					viewBox="0 0 30 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z"
						stroke="black"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M26.25 26.25L20.8125 20.8125"
						stroke="black"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</form>
		{#if user.loggedIn}
			<div class="user">
				<button class="user-bell">
					<svg
						width="30"
						height="30"
						viewBox="0 0 30 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M22.5 10C22.5 8.01088 21.7098 6.10322 20.3033 4.6967C18.8968 3.29018 16.9891 2.5 15 2.5C13.0109 2.5 11.1032 3.29018 9.6967 4.6967C8.29018 6.10322 7.5 8.01088 7.5 10C7.5 18.75 3.75 21.25 3.75 21.25H26.25C26.25 21.25 22.5 18.75 22.5 10Z"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M17.1625 26.25C16.9428 26.6288 16.6273 26.9433 16.2478 27.1619C15.8683 27.3805 15.438 27.4956 15 27.4956C14.5621 27.4956 14.1318 27.3805 13.7522 27.1619C13.3727 26.9433 13.0573 26.6288 12.8375 26.25"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
				<div
					on:click={(e) => {
						user.dropdown = true;
						e.stopPropagation();
					}}
					class="user-image-button"
				>
					<img class="profile-img" src={profile} alt="user's profile" />
				</div>
			</div>
		{:else}
			<button on:click={(e) => (location.href = '/login')} class="navbar-login-button">Login</button
			>
		{/if}
		<div style="display: {user.dropdown ? 'flex' : 'none'}" class="user-dropdown-options">
			<div class="container-top">
				<h2 class="user-name">Aslam Idrisi</h2>
				<p class="user-username gray">@willtheastro</p>
			</div>
			<div class="container-bottom">
				<a href="/dashboard" class="dropdown-link">Dashboard</a>
				<a href="/dashboard/writepost" class="dropdown-link">Write a Post</a>
				<a href="/dashboard/settings" class="dropdown-link">Settings</a>
				<a href="/helps" class="dropdown-link">Help</a>
				<button on:click={handleSignout} class="dropdown-link sign-out-button">Sign out</button>
			</div>
		</div>
	</div>
</nav>

<slot></slot>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap');
	a {
		text-decoration: none;
	}

    

	a,
	* {
		font-family: 'Libre Baskerville', serif;
	}

	button,
	a {
		cursor: pointer;
		transform: scale(1);
	}

	a:hover,
	button:hover {
		transition: transform 400ms;
		transform: scale(1.05);
	}

	.navbar {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
        grid-column: 2/3;
		grid-row: 1/2;
	}

	.navbar-block {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	

	.navbar-search {
		display: flex;

		margin-right: 10px;
		height: 44px;
		overflow: hidden;
		border-radius: 10px;
	}

	.navbar-input {
		width: 340px;
		outline: 0;
		box-sizing: border-box;
		border: 0;
		transition: width 500ms;
		font-size: 20px;
		padding-left: 10px;
	}

	.navbar-icon-button {
		padding: 5px;
		background-color: transparent;
		outline: 0;
		border: 0;
		margin: 0;
	}

	.navbar-login-button {
		border: 1.5px solid black;
		border-radius: 10px;
		width: 135px;
		height: 46px;
		background-color: transparent;
		font-size: 20px;
	}

	.user {
		width: 145px;
		display: flex;
		justify-content: space-around;
	}

	.user-bell {
		outline: 0;
		border: 0;
		background-color: transparent;
	}

	.user-image-button {
		border-radius: 50%;
		overflow: hidden;
		width: 60px;
		height: 60px;
		position: relative;
		cursor: pointer;
	}

	.profile-img {
		object-position: center;
		object-fit: contain;
		width: 100%;
		height: 100%;
	}

	.user-dropdown-options {
		flex-direction: column;
		position: absolute;
		width: 171px;
		height: 223px;
		background-color: #fefefe;
		top: 90px;
		right: 20px;
		border-radius: 0 0 10px 10px;
		filter: drop-shadow(0px 0px 5px rgba(228, 228, 228, 0.25));
	}

	.container-top {
		border-bottom: 1px solid #c4c4c4;
		padding: 1em 1.5em;
		height: 20%;
	}

	.user-name {
		font-size: 16px;
		color: #000;
		margin: 0;
		margin-top: 10px;
		font-weight: bold;
	}

	.user-username {
		font-size: 14px;
		color: rgba(28, 28, 28, 0.8);
		margin: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.container-bottom {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		height: 80%;
		padding-left: 1.5em;
	}

	.dropdown-link {
		text-decoration: none;
		color: #000;
	}

	.sign-out-button {
		padding: 0;
		outline: 0;
		border: 0;
		font-size: 16px;
		background-color: transparent;
		width: 70px;
	}

	@media (min-width: 600px) {
		.navbar {
			flex-direction: row;
			justify-content: flex-end;
		}

		.navbar-block {
			flex-direction: row;
		}


		.navbar-icon-button {
			padding: 5px;
			background-color: transparent;
			outline: 0;
			border: 0;
			margin: 0;
		}

		.navbar-login-button {
			border: 1.5px solid black;
			border-radius: 10px;
			width: 135px;
			height: 46px;
			background-color: transparent;
			font-size: 20px;
		}
	}
</style>
