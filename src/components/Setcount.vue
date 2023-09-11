<template>
    <div class="count">
        <button @click="increment">+</button>
        <h1>{{ count }}</h1>
        <button @click="decrement">-</button><br>
        <hr>
        <p>The counter is : {{ oddOrEven }}</p>
    </div>
</template>

<script setup>
import { ref,computed } from 'vue';

    const count = ref(0);
    const increment = () =>{
        count.value++;
    };
    const decrement = () => {
        count.value--;
    };
const oddOrEven = computed( () =>{
    if(count.value % 2 === 0) return 'Even'
    if(count.value % 2 == !0) return 'odd'
})

</script>

<style>

.count {
    display: flex;
    margin-top: 100px;
    gap:50px
}


</style>