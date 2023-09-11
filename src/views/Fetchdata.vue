<template>
  <div class="font-[600] text-red-400 text-xl">Hello from fetch data</div>
  <div class="flex items-center justify-center pt-10">
    
    <div class="loader" v-if="loading"></div>
    <div class="grid gap-x-8 gap-y-4 grid-cols-5" v-else>

        <div class="" v-for="user in users " :key="user.id">

                <div class="card  ">

                <img class="rounded-[50px]" :src="user.avatar_url" alt="User Avatar" width="50" height="50"  >
                <div>
                <a class="text-white font-[400] " :href="user.html_url" target="_blank">{{ user.login }}</a>
                </div>
                </div>

        </div>
    </div>
  </div>
  
</template>


<script setup lang="js">

    import axios from 'axios';
    import { ref, onMounted } from 'vue';

    const url = 'https://api.github.com/users';
    const users = ref([]);
    const loading = ref(true);

    onMounted(() => {
    fetchData()
    })

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            users.value = response.data
        } catch(error){
            console.log(error);
        } {loading.value = false}
        console.log(users)
    }
</script>

<!-- <script >
import axios from "axios";

const url = "https://api.github.com/users";

export default {
  data() {
    return {
      users:[],
      loading: true
    };
  }, created(){this.fetchData()},

  methods: {
    async fetchData() {
      try {
        const response = await axios.get(url);
        this.users = response.data;
      } catch (error) {
        console.log("Error fetching data:", error);
      } this.loading = false
      console.log(this.user)
    },
  },
};

</script> -->


 <style>

.card {
 width: 190px;
 height: 254px;
 background: #f77171;
 padding: 2rem 1.5rem;
 transition: box-shadow .3s ease, transform .2s ease;
 border-radius: 10px;
}

</style> 