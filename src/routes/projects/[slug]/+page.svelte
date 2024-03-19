<script>
	/** @type {import('./$types').PageData} */
	import {PortableText} from '@portabletext/svelte'
	import BeforeAfterImage from '../../../components/BeforeAfterImage.svelte';
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

	section {
		justify-content: center;
	}

</style>
<section class="styled-container">
	<h1>{data.project.name}</h1>

	<BeforeAfterImage 
		beforeandafterimage={data.project.mainBeforeAndAfter}
	/>
	<!-- {#each data.project.sections as section} -->
		<!-- {#if section._type == "textblock"} -->
		<!-- <PortableText value={section.body} /> -->
		<!-- {section.body} -->
		<!-- {/if} -->
	<!-- {/each} -->
</section>
