<template>
    <div>
        <div>
            {{ error }}
        </div>
        <div>
            {{ success }}
        </div>
    </div>
</template>


<script>
export default {
    data (){
        return{
            // success: null,
            // error: null
        }
    },
    props:{
        success: null,
        error: null
    }
}
</script>

<style>
    .alert{
        margin-top: 10px;
        border-radius: 5px;
        padding: 15px;
        border: 1px solid gray;
    }
    .alert-danger{
        background-color: white;
        border: 2px solid red;
        font-size: 0.9em;
    }
    .alert-success{
        background-color: white;
        border: 2px solid greenyellow;
    }
</style>
