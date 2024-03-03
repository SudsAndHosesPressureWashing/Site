<script>
	/** @type {import('./$types').PageData} */
	import {PortableText} from '@portabletext/svelte'
	import { urlFor } from '$lib/utils/image';
	import Step from '../../../components/Step.svelte';
	export let data;
	console.log(data)
</script>
<style>
	* {
		color: white;
	}
	h1 {
		text-align: center;
	}
	h2 {
		text-align: center;
	}
	img {
		margin-inline: auto;
		display: block;
		margin-block: 1rem;
		box-shadow: 10px 10px rgba(255, 255, 255, 0.4);
	}

	section {
		padding: 1rem;
	}
	.steps-container {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>
<section class="styled-container">
	<h1>{data.name}</h1>
	<img src={urlFor(data.mainImage).width(500).fit("crop").url()} alt="{data.shortDescription}"/>
	<PortableText 
		value={data.longDescription}
	/>
	
	<!-- <div>{@html data.longDescription}</div> -->
</section>
{#if data.steps}
<section class="styled-container">
	
	<h2>Steps In Our Process</h2>
	<div class="steps-container">
	{#each data.steps as step}
		<Step step={step}/>
	{/each}
	</div>
</section>
{/if}