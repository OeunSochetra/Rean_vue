<template>
    <button @click="$emit('buttonClicked')" >{{ text }}</button>
</template>


<script setup>
 const props = defineProps({
    text : {
        type: String,
        default:'No spacified'
    }
 })
 const emit = defineEmits([
    "buttonClicked"
 ])
</script>



























