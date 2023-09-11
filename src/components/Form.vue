<template>

    <div>
        <div>
            <input type="text" v-model="text">
            <p>{{ text }}</p>
        </div>

        <div>
            <h1>check box</h1>
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">check is : {{ checked }}</label> 
        </div>
        <div class="pt-10">
            <h1>Check Name</h1>
            <input type="checkbox" id="jack" value="Jack" v-model="checkName">
            <label for="jack">Jack</label>
            <input type="checkbox" id="jonh" value="Jonh" v-model="checkName">
            <label for="jonh">Jonh</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkName">
            <label for="mike">Mike</label>
            <p>Check Name : <pre>{{ checkName }}</pre></p>
        </div>

        <div class="pt-10">
            <h1>Pick number</h1>
            <input type="radio" id="one" value="One" v-model="picked">
            <label for="one">One</label>
            <input type="radio" id="two" value="Two" v-model="picked">
            <label for="two">Two</label>
            <p>Pick: <pre>{{ picked }}</pre></p>
        </div>

        <div class="pt-10">
            <h1>Select</h1>
            <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option >A</option>
                <option >B</option>
                <option >C</option>
            </select>
            <span> your select is :{{ selected }}</span>
        </div>

        <div class="pt-10">
            <h1>Multi Select</h1>
            <select v-model="multiSelect" multiple style="width: 100px;">
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <span>Your select is : {{ multiSelect }}</span>
        </div>
    </div>
    

</template>


<script setup lang="js">
import { ref } from 'vue';


    const text = ref("");
    const checked = ref(true);
    const checkName = ref(['Jack']);
    const picked = ref('');
    const selected = ref('');
    const multiSelect = ref(['A']);

</script>