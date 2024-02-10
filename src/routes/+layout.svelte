<svelte:head>
    <title>Welcome to Suds and Hoses Pressure Washing!</title>
</svelte:head>

<script>
	// import '$lib/css/animation.css'
	import "@picocss/pico/css/pico.css";
	import "$lib/css/main.css"
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	export let data;
	console.log(data.socials[0])

</script>

<style>

	
</style>

<body>
	<Header companyData={ data.company }/>
	<main>
		<slot />
	</main>
	<Footer socials={ data.socials } />
</body>

