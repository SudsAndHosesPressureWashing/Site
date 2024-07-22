<script>
	/** @type {import('./$types').PageData} */
	import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/utils/image';
	import BeforeAfterImage from '../../../components/BeforeAfterImage.svelte';
	import ImageCluster from '../../../components/ImageCluster.svelte';
	export let data;
	let section = data.project.section || []
	let sections = data.project.sections || []
	let images = section.filter(item => item._type == 'image');
	let otherTypes = sections.filter(item => item != null && item._type != 'image')
	let allSections = images.concat(otherTypes)
	
</script>

<style>
	* {
		color: white;
	}

	h1 {
		text-align: center;
	}

	section {
		padding: 1rem;
	}

	section {
		justify-content: center;
	}

	img {
		margin-inline: auto;
		margin-block: 1rem;
		display: block;
	}

</style>

<svelte:head>
    <title>{data.project.name}</title>
    <meta name="description" content="{data.project.name}" />
</svelte:head>

<section class="styled-container">
	<h1>{data.project.name}</h1>

	<BeforeAfterImage 
		beforeandafterimage={data.project.mainBeforeAndAfter}
	/>
	{#if sections}
		{#each allSections as section} 
			{#if section._type == "blockdocument"}
				
				<PortableText onMissingComponent={false} value={section.longDescription} />

			{:else if section._type=="beforeandafterimage"}
				<BeforeAfterImage beforeandafterimage={section} />
			{:else if section._type=="imagecluster"}
				<ImageCluster imagecluster={section}/>
			{:else if section._type=="image"}
				<img alt="{section.asset._ref}" src={urlFor(section).width(500).fit("crop").url()} />
			{/if}

		{/each} 
	{/if}
</section>
