<template>
  <div class="h-screen flex justify-center items-center">
    <div
      class="hidden md:block lg:w-1/3 bg-white h-full auth-background rounded-tr-lg rounded-br-lg"
    ></div>
    <div class="w-auto md:w-2/4 lg:w-2/3 flex justify-center items-center">
      <div class="w-full lg:w-1/2 px-10 lg:px-0">
        <h2 class="font-normal mb-6 text-3xl text-white">Sign Up Account</h2>
        <transition>
          <div v-if="errorMsg" class="bg-red-200 text-red-500 py-2 px-3 mb-2 rounded-md flex justify-between gap-5 overflow-hidden font-semibold">
            <span class="text-sm">{{errorMsg}} !</span>
            <button
              @click="closeMsg"
            >
              <CloseIcon class="h-5 w-5 fill-red-500" aria-hidden="true" />
            </button>
          </div>
        </transition>
        <div class="mb-6">
          <div class="mb-4">
            <label class="font-normal text-lg text-white block mb-3"
              >Full Name</label
            >
            <input
              type="text"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Write Your Name Here"
              v-model="register.name"
            />
          </div>
        </div>
        <div class="mb-6">
          <div class="mb-4">
            <label class="font-normal text-lg text-white block mb-3"
              >Occupation</label
            >
            <input
              type="text"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Write your occupation here"
              v-model="register.occupation"
            />
          </div>
        </div>
        <div class="mb-6">
          <div class="mb-4">
            <label class="font-normal text-lg text-white block mb-3"
              >Email Address</label
            >
            <input
              type="email"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Write your email address here"
              v-model="register.email"
            />
          </div>
        </div>
        <div class="mb-6">
          <div class="mb-4">
            <label class="font-normal text-lg text-white block mb-3"
              >Password</label
            >
            <input
              type="password"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Type your password here"
              v-model="register.password"
              @keyup.enter="userRegister"
            />
          </div>
        </div>
        <div class="mb-6">
          <div class="mb-4">
            <button
              @click="userRegister"
              class="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full"
            >
              Continue Sign Up
            </button>
          </div>
        </div>
        <div class="text-center">
          <p class="text-white text-md">
            Already have account?
            <NuxtLink to="/login" class="no-underline text-orange-button"
              >Sign In</NuxtLink
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from "@/components/icons/CloseIcon.vue"
export default {
  layout: 'auth',
  components:{
    CloseIcon
  },
  data() {
    return {
      register: {
        name: '',
        email: '',
        occupation: '',
        password: '',
      },
      errorMsg:''
    }
  },
  methods: {
    async userRegister() {
      try {
        let response = await this.$axios.post('/api/v1/users', this.register)
        console.log(response.data.data.token)
        this.$auth
          .setUserToken(response.data.data.token)
          .then(() => this.$router.push({ path: '/upload' }))
      } catch (error) {
        this.errorMsg = error.response.data.meta.message
        console.log(this.errorMsg)
      }
    },
    closeMsg(){
      this.errorMsg = ''
    }
  },
}
</script>

<style scoped>
.v-enter-from { opacity: 0 }
.v-enter-to   { opacity: 1 }

.v-enter-active,
.v-leave-active {
  transition: opacity .3s ease-in-out
}
.v-leave-from { opacity: 1 }
.v-leave-to   { opacity: 0 }
.auth-background {
  background-image: url('/sign-up-background.jpg');
  background-position: center;
  background-size: cover;
}

</style>
