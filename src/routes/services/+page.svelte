<script>

    import ServiceCard from '../../components/ServiceCard.svelte';
    export let data;

</script>
<style>
    h1 {
        text-align: center;
    }
</style>

<svelte:head>
    <title>Check Out the Services We Provide</title>
    <meta name="description" content="Learn about the process steps and benefits to our various services." />
</svelte:head>


<section class="styled-container">
    <h1>Our Services</h1>
    <div class="card-container">
        {#each data.services as service}
            <ServiceCard service={service} />
        {/each}
    </div>
</section>