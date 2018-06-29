<template>
        <div>          
                <p class="toggleKeys" v-on:click="togglePublic = !togglePublic">Show Public Key</p>
            <div class="keywrapper">
                <p v-if="togglePublic" class="keys">Public Key: {{public_key}}</p>
            </div>
                <p class="toggleKeys" v-on:click="togglePrivate = !togglePrivate">Show Private Key</p>
            <div class="keywrapper">
                <p v-if="togglePrivate" class="keys">Private Key: {{private_key}}</p>
            </div>
            
        </div>


</template>

<script>
export default {
    data () {
        return {
            togglePublic: true,
            togglePrivate: true,
        }
    },
    computed: {
        public_key(){
            return this.$store.state.public_key;
        },
        private_key(){
            return this.$store.state.private_key;
        }
    }
 }
</script>

<style>
    .keywrapper{
        width: 97%;
        margin-top: -10px;
        margin-left: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .toggleKeys{      
        margin-left: 10px;
        padding: 10px;
        width: 20%;
        background-color: #555555;
        color: white;
        border: 2px solid #555555;
        -webkit-transition-duration: 0.4s;
        cursor: pointer;border-radius: 4px;
    }

    .toggleKeys:hover{
        background-color: white; 
        color: black; 
    }

    .keys{
        width:95%;
        white-space: pre-wrap;
        word-wrap: break-word;
        padding: 10px;
     }

</style>