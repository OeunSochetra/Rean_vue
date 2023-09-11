<template>
    <div>
        <ul>
            <li>
                {{ todo.text }}
            </li>
        </ul>
    </div>
  </template>
  
  <script setup lang="js">
  import { defineProps } from 'vue';
  
  const props = defineProps({
    todo: Object,
  });
  </script>