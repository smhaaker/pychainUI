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
