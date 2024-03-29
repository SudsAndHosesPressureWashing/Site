<script>
    import { PortableText } from '@portabletext/svelte';
    import ImageCluster from '../../components/ImageCluster.svelte';
    export let data;
    console.log(data.company.aboutus)
</script>
<style>
    .styled-container {
        padding: 2rem;
    }
</style>
<section class="styled-container">
	{#each data.company.aboutus as section} 
		{#if section._type == "blockdocument"}
			<PortableText value={section.longDescription} />
		{:else if section._type=="beforeandafterimage"}
			<BeforeAfterImage beforeandafterimage={section} />
		{:else if section._type=="imagecluster"}
			<ImageCluster imagecluster={section}/>
		{/if}

	{/each} 
</section>
