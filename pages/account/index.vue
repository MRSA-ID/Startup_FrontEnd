<template>
  <div class="project-page">
    <section class="dashboard-header pt-5">
      <div class="container mx-auto relative">
        <Navbar />
      </div>
    </section>
    <section class="container mx-auto pt-8">
      <div class="flex justify-between items-center">
        <div class="w-full mr-6">
          <h2 class="text-4xl text-gray-900 mb-2 font-medium">Account Settings</h2>
        </div>
      </div>
      <!-- <div class="flex justify-between items-center">
        <div class="w-3/4 mr-6">
          <h3 class="text-2xl text-gray-900 mb-4">Create New Projects</h3>
        </div>
        <div class="w-1/4 text-right">
          <button
            @click="save"
            class="bg-green-button hover:bg-green-button text-white font-bold px-4 py-1 rounded inline-flex items-center"
          >
            Save
          </button>
        </div>
      </div> -->
      <div class="block mb-2">
        <div class="w-full lg:max-w-full lg:flex mb-4">
          <div
            class="w-full border border-gray-400 bg-white rounded p-8 flex flex-col justify-between leading-normal"
          >
            <form class="w-full">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-2/4 flex text-right mb-5 items-center gap-4 ml-3">
                  <div class="shrink-0">
                    <img class="h-32 w-32 object-cover rounded-full" :src="$axios.defaults.baseURL + users.image_url"
                    :alt="users.image_url.split('/')[1]" />
                  </div>
                  <label class="block">
                    <span class="sr-only">Choose profile photo</span>
                    <input type="file" ref="file" @change="selectFile" class="block w-full text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100
                    "/>
                  </label>
                </div>
                <div class="w-full px-3 mb-6 ">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Contoh: Demi Gunpla Demi Istri"
                    v-model="users.name"
                  />
                </div>
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Occupation
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    v-model="users.occupation"
                  />
                </div>
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3"
                  >
                    Email
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Deskripsi singkat mengenai projectmu"
                    v-model="users.email"
                  />
                </div>
              </div>
              <button
                @click="save"
                class="bg-green-button hover:bg-green-button text-white font-bold px-4 py-2 rounded inline-flex items-center"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div class="cta-clip -mt-20"></div>
    <section class="call-to-action bg-purple-progress pt-64 pb-10"></section>
    <Footer />
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({ $axios }) {
    const { data:users} = await $axios.$get('/api/v1/users/fetch',{
      headers: { "ngrok-skip-browser-warning": true }
    })
    // console.log(users)
    return { users }
  },
  // watch: {
  //   '$route.query': '$load',
  // },
  data() {
    return {
      selectedFiles: undefined,
    }
  },
  methods: {
    async selectFile() {
      this.selectedFiles = this.$refs.file.files

      let formData = new FormData()
      if(this.selectedFiles != undefined) {
        formData.append('avatar', this.selectedFiles.item(0))
      }

      try {
        let response = await this.$axios.post(
          '/api/v1/avatars',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        console.log(response)
        if (response.data.meta.code === 200) {
          this.load()
          this.selectedFiles = undefined
        }
      } catch (error) {
        console.log(error)
      }
    },
    async load() {
      const user = await this.$axios.get(
        '/api/v1/users/fetch'
      )
      this.users = user.data
    },
    async save() {
      try {
        let response = await this.$axios.$put(
          '/api/v1/users/' + this.$route.params.id,
          {
            name: this.users.name,
            occupation: this.users.occupation,
            email: this.users.email,
          }
        )
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
