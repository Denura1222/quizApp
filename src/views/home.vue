<script setup>
import quzeCard from "../components/quizcard.vue";
import q from "../data/quize.json";

import { ref, watch } from "vue";

const quizes = ref(q);
</script>

<template>
  <div className="w-full h-full p-10">
    <nav className="flex flex-row gap-4 items-center">
      <div className="font-bold text-[40px]">Quizes</div>
      <input
        className="bg-slate-200 p-1 rounded-lg h-[40px]"
        placeholder="search..."
      />
    </nav>

    <div className="w-full flex justify-center">
      <div className="mt-20 grid grid-cols-3  w-2/3">
        <quzeCard v-for="(quiz, index) in quizes" :key="quiz.id" :quiz="quiz" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
