<template>
  <header class="flex items-center">
    <div style="height: 54px" class="pr-5">
      <img src="/logo.svg" alt="logo" class="h-full" />
    </div>
    <ul class="flex items-center">
      <li>
        <NuxtLink
          class="text-white hover:text-teal-500 text-lg px-4 py-3"
          to="/"
          >Home</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          class="text-white hover:text-teal-500 text-lg px-4 py-3"
          to="#"
          >Project</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          class="text-white hover:text-teal-500 text-lg px-4 py-3"
          to="#"
          >Features</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          class="text-white hover:text-teal-500 text-lg px-4 py-3"
          to="#"
          >Success Stories</NuxtLink
        >
      </li>
    </ul>
    <ul class="flex ml-auto items-center mt-2" v-if="!this.$store.state.auth.loggedIn">
      <li>
        <NuxtLink
          to="/register"
          class="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full mr-4"
        >
          Sign Up
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/login"
          class="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full"
        >
          My Account
        </NuxtLink>
      </li>
    </ul>
    <div class="flex ml-auto" v-else>
      <div class="dropdown inline-block relative z-10">
        <button class="bg-white text-gray-700 font-semibold py-4 px-6 rounded inline-flex items-center">
          <img v-if="$store.state.auth.user.image_url" :src="$axios.defaults.baseURL + $store.state.auth.user.image_url" alt="" class="h-10 w-10 rounded-full mr-2">
          <span class="mr-1">
            {{ this.$store.state.auth.user.name }}
          </span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 shadow w-full -mt-2">
          <li>
            <NuxtLink to="/dashboard" class="bg-white hover:bg-gray-100 hover:text-orange-500 py-2 px-4 block whitespace-normal">
              My Dashboard
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/dashboard" class="bg-white hover:bg-gray-100 hover:text-orange-500 py-2 px-4 block whitespace-normal">
              Account Settings
            </NuxtLink>
          </li>
          <li>
            <a @click="logout()" class="bg-white hover:bg-gray-100 hover:text-orange-500 cursor-pointer py-2 px-4 block whitespace-nowrap rounded-b">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default{
  methods:{
    async logout(){
      await this.$auth.logout()
    }
  }
}
</script>

<style scoped>
  .dropdown:hover .dropdown-menu{
    display: block;
  }
</style>
