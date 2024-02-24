<script>
    import CheckableService from '../../components/CheckableService.svelte';
    export let data;
    console.log(data)
</script>
<style>

    .services-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        justify-content: center;

    }
    h2 {
        text-align: center;
    }
    label {
        color: white;
        text-align: center;
    }
    fieldset {
        max-width: 40rem;
        margin-inline: auto;
    }
    input {
        text-align: center;
    }
</style>
<form class="styled-container" action="/sendquote" method="post" netlify>
    <h2>Click On The Services You'd Like Quoted</h2>
    <div class="services-container">
        {#each data.services as service }
            <CheckableService service = {service} />
        {/each}
    </div>
    
    <fieldset>
        <label for="name">Name</label><input type="name" id="name"/>
        <label for="email">Email</label><input type="email" id="email"/>
        <label for="phone">Phone</label><input type="phone" id="phone"/>
        <label for="other">Any Other Information We Should Know?</label><textarea type="text" id="other"/>
        <input type="submit" value="submit" />
    </fieldset>

</form>