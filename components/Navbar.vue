<template>
  <header class="flex items-center flex-col lg:flex-row">
    <div class="w-full relative flex justify-between lg:w-auto">
      <div style="height: 54px" class="pr-5">
        <img src="/logo.png" alt="logo" class="h-full" />
      </div>
      <button
        type="button"
        class="lg:hidden cursor-pointer items-center flex"
        @click="MenuOpen()"
      >
        <CloseIcon v-if="open" class="w-8 h- fill-white hover:fill-[#1abc9c]" />
        <MenuIcon v-else class="w-8 h-8 fill-white hover:fill-[#1abc9c]" />
      </button>
    </div>
    <div
      :class="open ? 'top-10' : 'top-[-500%] lg:z-0'"
      class="w-full transform flex flex-col absolute z-10 py-5 mt-10 rounded-lg lg:mt-0 lg:py-0 bg-white lg:bg-transparent lg:relative lg:flex-row transition-all duration-300 ease-in-out"
    >
      <ul
        class="flex items-center flex-col w-full gap-4 lg:gap-0 lg:w-auto lg:flex-row"
      >
        <li>
          <NuxtLink
            class="text-slate-800 lg:text-white hover:text-teal-500 text-lg px-4 py-3"
            to="/"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="text-slate-800 lg:text-white hover:text-teal-500 text-lg px-4 py-3"
            to="#"
            >Project</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="text-slate-800 lg:text-white hover:text-teal-500 text-lg px-4 py-3"
            to="#"
            >Features</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="text-slate-800 lg:text-white hover:text-teal-500 text-lg px-4 py-3"
            to="#"
            >Success Stories</NuxtLink
          >
        </li>
      </ul>
      <ul
        class="flex ml-auto items-center w-full justify-center lg:w-auto mt-2 gap-4"
        v-if="!this.$store.state.auth.loggedIn"
      >
        <li>
          <NuxtLink
            to="/register"
            class="inline-block w-full bg-transparent border-white border hover:lg:bg-transparent hover:bg-[#1abc9c] hover:text-white hover:bg-opacity-25 text-slate-800 lg:text-white font-light lg:w-40 text-center px-6 py-1 text-lg rounded-full"
          >
            Sign Up
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/login"
            class="inline-block w-full bg-transparent border-white border hover:lg:bg-transparent hover:bg-[#1abc9c] hover:text-white hover:bg-opacity-25 text-slate-800 lg:text-white font-light lg:w-40 text-center px-6 py-1 text-lg rounded-full"
          >
            My Account
          </NuxtLink>
        </li>
      </ul>
      <div class="w-full lg:w-auto flex ml-auto" v-else>
        <div class="dropdown w-full lg:w-auto lg:inline-block relative z-10">
          <button
            class="bg-white w-full lg:w-auto text-gray-700 font-semibold py-4 px-6 rounded inline-flex items-center"
          >
            <img
              v-if="$store.state.auth.user.image_url"
              :src="$axios.defaults.baseURL + $store.state.auth.user.image_url"
              alt=""
              class="h-10 w-10 rounded-full mr-2"
            />
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
          <ul
            class="dropdown-menu absolute hidden text-gray-700 pt-1 shadow w-full -mt-2"
          >
            <li>
              <NuxtLink
                to="/dashboard"
                class="bg-white hover:bg-gray-100 hover:text-orange-500 py-2 px-4 block whitespace-normal"
              >
                My Dashboard
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/account"
                class="bg-white hover:bg-gray-100 hover:text-orange-500 py-2 px-4 block whitespace-normal"
              >
                Account Settings
              </NuxtLink>
            </li>
            <li>
              <a
                @click="logout()"
                class="bg-white hover:bg-gray-100 hover:text-orange-500 cursor-pointer py-2 px-4 block whitespace-nowrap rounded-b"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CloseIcon from '@/components/icons/CloseIcon.vue'
import MenuIcon from '@/components/icons/MenuIcon.vue'
export default {
  components: {
    CloseIcon,
    MenuIcon,
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
    MenuOpen() {
      this.open = !this.open
    },
  },
}
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
