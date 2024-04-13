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
    input, textarea {
        text-align: center;
        background-color: rgba(0,0,0,0);
        border: 1px solid white;
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

    .citystate {
        display: flex;
        justify-content: space-around;
    }

    .citystate > div {
        width: 50%;
        display: inline;
        text-align: right;
        margin: 0.5rem;
    }
</style>

<svelte:head>
    <title>Get a Free Quote</title>
    <meta name="description" content="Select the services you'd like quoted, fill in your information, and we'll reach out to you soon!" />
</svelte:head>

<form class="styled-container" method="post" name="quote" data-netlify="true" action="https://formsubmit.co/sudsandhosesllc@gmail.com">
    <input type="hidden" name="_next" value="https://sudsandhosespressurewashing.com/ThankYou">
    <input type="hidden" name="_subject" value="New Quote Request">
    <input type="text" name="_honey" style="display:none">
    <h2>Click On The Services You'd Like Quoted</h2>
    <fieldset class="services-container">
        {#each data.services as service }
            <CheckableService service = {service} />
        {/each}
    </fieldset>
    
    <fieldset>
        <label for="name">Name</label><input type="name" name="name" id="name"/>
        <label for="email">Email</label><input type="email" name="email" id="email"/>
        <label for="phone">Phone</label><input type="phone" name="phone" id="phone"/>
        <label for="street-address">Address</label><input type="street-address" name="street-address" id="street-address"/>
        <div class="citystate">
            <div><label for="city">City</label><input type="city" name="city" id="city"/></div>
            <div><label for="state">State</label><input type="state" name="state" id="state"/></div>
        </div>
        
        <label for="other">Any Other Information We Should Know?</label><textarea name="other" id="other"/>
        <input type="submit" value="Submit" />
    </fieldset>
    

</form>
