<template>
    <div>
      <ol>
        <Todo v-for="item in itemsofArray" :key="item.id" :todo="item"></Todo>
      </ol>
    </div>
  </template>
  
  <script setup lang="js">
  import { ref } from 'vue';
  import Todo from '@/components/Todo.vue';
  
  const itemsofArray = ref([
    { id: 1, text: 'consectetur' },
    { id: 2, text: 'laboriosam' },
    { id: 3, text: 'consequuntur' },
  ]);
  </script>