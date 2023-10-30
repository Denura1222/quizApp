<script setup>
import quzeCard from "../components/quizcard.vue";
import q from "../data/quize.json";
import { SignOutButton } from 'vue-clerk'


import { ref } from "vue";
import { useClerk } from 'vue-clerk'
import {RouterLink,RouterView} from "vue-router"
import { useSession,useUser } from 'vue-clerk'

const { isLoaded, session } = useSession()
const { isSignedIn, user } = useUser()

const clerk = useClerk()

const quizes = ref(q);
let input = ref("");

const filter =()=>{
  return q.filter((quize)=> quize.name.toLowerCase().includes(input.value.toLowerCase()))
}




</script>

<template>
  <div className="w-full h-full p-10">
    <nav className="flex flex-row gap-4 items-center justify-between">
      <div class="flex flex-row gap-5 items-center">
        <div className="font-bold text-[40px]">Quizes</div>
      <input
        className="bg-slate-200 p-1 rounded-lg h-[40px]"
        placeholder="search..."
        v-model="input"
        type="text"
      />
      </div>


      <RouterLink v-if="isLoaded && !isSignedIn" class=" bg-red-600 w-[70px] p-2 rounded-lg text-white hover:opacity-90" to="/signIn">
          Sign in
      </RouterLink>
      <SignOutButton v-if="isLoaded && isSignedIn" class=" bg-red-600 w-[100px] p-2 rounded-lg text-white hover:opacity-90" />


    
    </nav>

    <div className="w-full flex justify-center">
      <div v-if="input.valueOf()==null " className="mt-20 grid grid-cols-3  w-2/3">
        <quzeCard v-for="(quiz, index) in filter()" :key="quiz.id" :quiz="quiz" />
      </div>
      <div v-else className="mt-20 grid grid-cols-3  w-2/3">
        <quzeCard v-for="(quiz, index) in filter()" :key="quiz.id" :quiz="quiz" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
