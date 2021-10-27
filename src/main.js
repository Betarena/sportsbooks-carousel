import App from './App.svelte';

const app = new App({
	target: document.querySelector("#sportsbooks"),
	props: {
		name: 'Betting Sites'
	}
});

export default app;