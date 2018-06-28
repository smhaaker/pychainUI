<template>
    <div>
        <p class="keys">Public Key: {{public_key}}</p>
        <p class="keys">Private Key: {{private_key}}</p>
    </div>
</template>

<script>
export default {
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
        .keys{
            width: 50%;
            border: 2px solid black;
            white-space: pre-wrap;
            word-wrap: break-word;
            padding: 5px;
        }
</style>