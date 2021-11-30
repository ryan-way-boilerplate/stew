import './global.css';

import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
    ryan: 'ryan'
	}
});

export default app;
