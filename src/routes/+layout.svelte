<svelte:head>
    <title>Welcome to Suds and Hoses Pressure Washing!</title>
	<meta property="og:image" content="{urlFor(data.company.logo).width(200).url()}">
</svelte:head>

<script>
	import { urlFor } from '$lib/utils/image';
	import '$lib/css/animation.css'
	import "$lib/css/main.css"
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	export let data;

</script>


<body>
	<Header companyData={ data.company }/>
	<main>
		<slot />
	</main>
	<Footer socials={ data.socials } />
</body>

