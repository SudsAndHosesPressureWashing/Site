<style>
    div {
        transform-origin: center;
    }
    .top, .middle, .bottom {
        transform-origin: center;
        width: 20px;
        height: 3px;
        margin-block: 4px;
        margin-inline: auto;
        background-color: white;
        border-radius: 3px;
        transform-origin: center center;
    }

    button {
        background-color: rgba(0,0,0,0);
        border: red 5px solid;
        padding: 5px;
   
    }


    .x > .top {
        transition: 1s;
        transform: 
            rotate(45deg) 
            /* translateX(0.5px)  */
            translateY(5px); 


    }

    .x > .middle {
        display: none;
    }

    .x > .bottom {
        transition: 1s;

        transform: 
            rotate(-45deg) 
            /* translateX(0.5px) */
            translateY(-5px); 
    }

    .icon {
        margin: auto;
        width: max-content;
        transition: 1s;
        border: red 1px solid;
    }

</style>
<script>
    let open = false;
</script>
<button on:click={()=>open = !open} aria-controls="primary-naviation" aria-expanded="{open}">
    <div class='icon {open? 'x':''}'>
        <div class="top"></div>
        <div class="middle"></div>
        <div class="bottom"></div>
    </div>
</button>