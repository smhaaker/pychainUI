<template>

        <!-- <div class="center">
            <div class="keywrapper">
                <p class="toggleKeys" v-on:click="togglePublic = !togglePublic">togglePublic</p>
                <p v-if="togglePublic" class="keys">Public Key: {{public_key}}</p>
            </div>
        </div>

        <div class="center">
            <div class="keywrapper">
                <p class="toggleKeys" v-on:click="togglePrivate = !togglePrivate">togglePrivate</p>
                <p v-if="togglePrivate" class="keys">Private Key: {{private_key}}</p>
            </div>
        </div> -->
        <!-- <p class="btn btn-lg btn-primary" v-on:click="togglePrivate = !togglePrivate">togglePrivate</p> -->
        <!-- <p v-if="togglePublic" class="keys">Public Key: {{public_key}}</p> -->
        <!-- <p v-if="togglePrivate" class="keys">Private Key: {{private_key}}</p> -->
        <div>          
                <p class="toggleKeys" v-on:click="togglePublic = !togglePublic">ShowPublic</p>
            <div class="keywrapper">
                <p v-if="togglePublic" class="keys">Public Key: {{public_key}}</p>
            </div>
                <p class="toggleKeys" v-on:click="togglePrivate = !togglePrivate">ShowPrivate</p>
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
    .center{
        border: 1px solid black;
 
    }

    .keywrapper{
        width: 95%;
        margin-top: -10px;
        margin-left: 10px;
        /* border: 2px solid black; */
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .toggleKeys{      
        margin-left: 10px;
        color: brown;
        padding: 10px;
        line-height: 0px;
        background-color: black;
        width: 13%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .keys{
        width:95%;
        white-space: pre-wrap;
        word-wrap: break-word;
        padding: 10px;
     }

</style>