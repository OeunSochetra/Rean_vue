
<template>
    <div class="main">
      <p  >Hello my is {{ name }}, and I'am {{ age }} year old</p>
      <Mybutton @buttonClicked="showAlert" @click="handleChange" text="Clink On me"  />
      <Setcount/>
      <Maps_and_listKEy/>
    </div>
  </template>
  
   
  
  <script setup>
  import { ref } from 'vue';
  import Mybutton from './components/Mybutton.vue';
  import Setcount from './components/Setcount.vue';
  import Maps_and_listKEy from './components/Maps_and_listKEy.vue';
  
    const name = ref("BOB");
    const age = ref("22");
  
    const handleChange = () => {
      name.value="Oggy";
      age.value="12"
    }
  
    const showAlert = () => {
      alert('Child button was clicked')
    }
  </script>
  
  <style>
  
  .main {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  
  
  </style>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  <!-- 
  {/* <script >
  
  import { ref } from 'vue';
  import Mybutton from './components/Mybutton.vue';
  
    export default {
      setup(){
        const name = ref('Bob');
        const age = ref('20');
  
        const handleChange = () => {
          name.value = 'Oggy'
          age.value = '18'
        }
  
        return{
          name,
          age,
          handleChange
        }
      } ,  components:{
          Mybutton
        }
    }
  </scrip> */} -->
  