<template>
    <the-header title="RememberMe"></the-header>  
    <p>*** Please choose a direction from menu above!</p>
    <div class="px4 text-center">
        <button @click="navigateBack"> Go Back </button> &nbsp;
        <button @click="navigateToResources">Go To Resources Manualy</button> &nbsp;
        <button @click="navigateBack">Go forward</button> &nbsp;    
    </div> 

    <router-view></router-view>
</template>

<script>

import TheHeader from './components/layouts/TheHeader';
    export default {
        components: { TheHeader },
        methods: {
            navigateToResources(){

                this.$router.push('/the-resources')
                this.$router.forward()             
            },
            navigateBack(){
                 this.$router.back()
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    * {
        box-sizing: border-box;
    }

    html {
        font-family: 'Roboto', sans-serif;
    }

    body {
        margin: 0;
    }

    p {
        font-size: 12px; 
        text-align: center;
        padding-left: 15px;
        color: grey;
    }
    .px4 {
        padding: 5px 15px!important;;
    }

    .text-center {
        text-align: center!important;
    }
</style>