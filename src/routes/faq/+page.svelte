<script>
	/** @type {import('./$types').PageData} */
    import { PortableText } from '@portabletext/svelte';
	export let data;
    console.log(data)
</script>

<section class="styled-container">
    {#each data.faqs as qa}
        <h3>{qa.question}</h3>
        <PortableText value={qa.answer} />
    {/each}
</section>