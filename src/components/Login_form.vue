<template>
    <div class="flex">
      <div class="color__space h-[840px] w-[750px]">
        <div class="text-white pt-[380px] ml-[225px]">
          <h1 class="font-[700] text-4xl">SuperLive</h1>
          <p class="text-md">The most popular live stream solutions.</p>
        </div>
      </div>
      <div
        class="flex max-w-full items-center justify-center h-[840px] w-[750px]"
      >
        <div>
          <h1 class="text-2xl font-[700]">Hello Again!</h1>
          <p class="text-md pt-2 font-[200]">Welcome back</p>
          <form class="pb-[50px] pt-4" @submit.prevent="handleSubmit">
            <div class="relative">
              <svg
                class="absolute w-5 h-5 left-3 top-5 opacity-30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                ></path>
              </svg>
  
              <input
                class="p-[15px] w-[350px] pl-9 border-2 rounded-[5px]"
                type="text"
                placeholder="User name"
                v-model="username"
                @blur="validationUsername"
              />
              <p
                class="text-red-400 text-sm text-[13px] font-[400]"
                v-if="isError.username"
              >
                {{ isError.username }}
              </p>
            </div>
            <div class="relative pt-5">
              <svg
                class="absolute w-5 h-5 left-3 top-9 opacity-30"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z"></path>
              </svg>
              <div @click="togglePasswordVisibility">
                  <svg class="absolute cursor-pointer w-5 h-5 top-9 opacity-30 left-[300px]" xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                  </svg>
              </div>
              
              <input
                class="p-[15px] w-[350px] pl-10 border-2 rounded-[5px]"
                placeholder="Password"
                :type="showPassword ? 'text' : 'password' "
                v-model="password"
                @change="onChange"
                @blur="validationPassword"
              />
              <p
                class="text-red-400 text-[13px] font-[400]"
                v-if="isError.password"
              >
                {{ isError.password }}
              </p>
            </div>
            <div class="pt-7 gap-2 flex flex-col items-center justify-center">
              <button type="submit"  >Login</button>
              <div>
                <p class="text-sm cursor-pointer">Forget Password?</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, computed } from "vue";
  
  const isError = reactive({ username: "", password: "" });
  const username = ref("");
  const password = ref("");
  const showPassword = ref(false);
  
  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value
  }
  
  const validationUsername = () => {
    isError.username = username.value === "" ? "Please input username" : "";
  };
  
  const validationPassword = () => {
    isError.password = password.value === "" ? "Please input password" : "";
  };
  
  console.log(username);
  
  const handleSubmit = () => {
    validationUsername();
    validationPassword();
  };
  
  // const errorUsername = computed (() =>{
  //   return username.value === "" ? "Please input username" : '';
  // })
  
  // const errorPassword = computed (() => {
  //   return password.value === "" ? "Please input password " : '';
  // })
  
  //   if(password.value === "" ) {
  //     isError.password='password cannot be empty'
  //   } else(isError.password = "")
  // }
  </script>
  
  <style>
  .color__space {
    background-image: linear-gradient(to left bottom, #bb411b, #764264, #2641aa);
  }
  </style>
  