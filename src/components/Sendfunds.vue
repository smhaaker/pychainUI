<template>
    <div>
        <p>Send funds</p>
        <input type="text"  placeholder="pycoin address: 30819f300d06092a....">
        <button class="button">SEND</button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    /* Move to sendfunds */
    input[type=text]{
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 3px solid #ccc;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        outline: none;
        border-radius: 10px;
    }
    input[type=text]:focus {
        border: 3px solid #555;
        background-color: gray;
        color: white;
    }
    .button {
        margin-left: 10px;
        padding: 10px;
        width: 20%;
        background-color: #555555;
        color: white;
        border: 2px solid #555555;
        -webkit-transition-duration: 0.4s;
        cursor: pointer;border-radius: 4px;
    }
    .button:hover{
        background-color: white; 
        color: black; 
    }
    .button:active{
        background-color: red;
    }

</style>
