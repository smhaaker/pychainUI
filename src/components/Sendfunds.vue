<template>
    <div>
        <div class="fundsstyle">
            <button class="button">SEND</button>
            <input type="text" placeholder="Send funds: pycoin address: 30819f300d06092a...." />
        </div>
        <!-- <app-funds style="color:white; padding-left: 10px;"></app-funds> -->
    </div>
</template>

<script>
import Funds from './Funds.vue';
export default {
        components:{
            'app-funds': Funds,
        },

}
</script>

<style>
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
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    input[type=text]:focus {
        border: 3px solid #555;
    }
    .button {
        margin-left: 0px;
        padding: 10px;
        width: 20%;
        background-color: #555555;
        color: white;
        border: 2px solid #555555;
        -webkit-transition-duration: 0.4s;
        cursor: pointer;border-radius: 4px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .button:hover{
        background-color: white; 
        color: black; 
    }
    .button:active{
        background-color: red;
    }
    .right{
        float: right;
    }
    .fundsstyle{
        padding-top: 0px;
    }
</style>
