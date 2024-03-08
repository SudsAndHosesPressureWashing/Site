<script>

    import ServiceCard from '../../components/ServiceCard.svelte';
    export let data;

</script>
<style>
    h1 {
        text-align: center;
    }
</style>
<section class="styled-container">
    <h1>Our Services</h1>
    <div class="card-container">
        {#each data.services as service}
            <ServiceCard service={service} />
        {/each}
    </div>
</section>