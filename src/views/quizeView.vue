<script setup>
import { useRoute } from "vue-router";
import OptionsSection from "../components/optionsSection.vue";
import HeaderSection from "../components/HeaderSection.vue";
import q from "../data/quize.json";

const route = useRoute();

const id = route.params.id;
const data = q.find((quiz) => quiz.id == id);

console.log("datassa", data);
</script>

<template>
  <div class="flex flex-col justify-center items-center overflow-hidden p-10">
    <div>
      <HeaderSection />
    </div>

    <div>
      <OptionsSection
        v-for="question in data.questions"
        :key="question.id"
        :question="question"
      />
    </div>
  </div>
</template>

<style scoped></style>
