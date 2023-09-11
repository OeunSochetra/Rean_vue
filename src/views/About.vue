
<template>

    <div class="flex flex-col">
        
       <h1 class="text-4xl font-[500]">{{ message }}</h1> 
        
  
    <div class="flex flex-col ">
    <button @click="reverseMessage" >reverseMessage</button>
    <button class="top-10" @click=" message += 'Hello Wrold'">Append !</button>
    </div>
    <div class="pt-10">
    <a href="https://uiverse.io/alexruix/weak-lionfish-37" @click.prevent="notify" >Please Click Link</a>
    </div>

    <div>
        <p :title="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, omnis quae exceptur.</p>
    </div>
    <div>
        <p :class="{ red:isRed}" @click="toggleRed" >Lorem ipsum dolor sit amet, consectetur adipisicing elito.</p>
    </div>
    <div>
        <p :style="{color}" @click="toggleColor">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>


    <div class="pt-10 ">
        <div class="gap-10 flex ">
        <div>
        <button @click="show = !show" >Toggle List</button>
        </div>
        <div>
        <button @click="list.push(list.length + 1)">Psuh Number</button>
        </div>
        <div>
        <button @click="list.pop(list.length - 1 )">Pop Number</button>
        </div>
        <div>
        <button @click="list.reverse()">Reverse</button>
        </div>

        </div>



        <div class="pt-10 fomt-[500] " >
            <ul v-if="show && list.length">
                <li v-for="item in list">{{ item }}</li>
            </ul>
                <p v-else-if="list.length">List is not empty is hidden</p>
                <p v-else>List is empty</p>
        </div>
    </div>

    <div class="pt-10">
    <Form></Form>
    </div>
    <div>
        <SimpleComponents></SimpleComponents>
    </div>
</div>



</template>

<script setup lang="js">

import Form from "@/components/Form.vue"
import SimpleComponents from "@/components/SimpleComponents.vue";

import { ref } from 'vue';

 const message = ref('Hello World!');
 const isRed = ref(true);
 const color = ref('green');
 const show = ref(true);
 const list = ref([1,2,3,4]);
 
 const toggleRed = () => {
    isRed.value = !isRed.value;
 };

 function toggleColor() {
  color.value = color.value === 'green' ? 'blue' : 'green'
}


 const reverseMessage = () => {
    message.value = message.value.split('').reverse('').join('')
 }

 const notify = () => {
    alert('You clicked the link')
 }

</script>



<style>
.red {
    color: red;
}

</style>