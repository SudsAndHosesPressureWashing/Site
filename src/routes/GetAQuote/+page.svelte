<script>
    import CheckableService from '../../components/CheckableService.svelte';
    export let data;
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
    input[type="submit"] {
        background-color: var(--transparent-red);
        border: white 1px dashed;
    }

    input[type="submit"]:hover {
        background-color: var(--transparent-red);
        border: white 1px solid;
        text-decoration: underline;
    }
</style>
<form class="styled-container" method="post" name="quote" data-netlify="true" action="https://formsubmit.co/c41680c9166ee9328c4cdbf17b88ad0d">
    <input type="hidden" name="_next" value="/thankyou">
    <input type="hidden" name="_subject" value="New Quote Request">
    <input type="text" name="_honey" style="display:none">
    <h2>Click On The Services You'd Like Quoted</h2>
    <div class="services-container">
        {#each data.services as service }
            <CheckableService service = {service} />
        {/each}
    </div>
    
    <fieldset>
        <label for="name">Name</label><input type="name" name="name" id="name"/>
        <label for="email">Email</label><input type="email" name="email" id="email"/>
        <label for="phone">Phone</label><input type="phone" name="phone" id="phone"/>
        <label for="other">Any Other Information We Should Know?</label><textarea name="other" id="other"/>
        <input type="submit" value="Submit" />
    </fieldset>
    

</form>
