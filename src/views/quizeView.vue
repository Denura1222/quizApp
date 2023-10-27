<script setup>
import { useRoute } from "vue-router";
import OptionsSection from "../components/optionsSection.vue";
import HeaderSection from "../components/HeaderSection.vue";
import q from "../data/quize.json";
import { ref } from "vue";

const route = useRoute();
const id = route.params.id;
const data = q.find((quiz) => quiz.id == id);
const currentQuestionIndex = ref(0);

const onOptionSelected = (isCorrect) => {
  console.log("swujnhsdwidwoidwndiw", data.questions.length);
  if(currentQuestionIndex<=data.questions.length){
    currentQuestionIndex += 1
  }
};
</script>

<template>
  <div class="flex flex-col justify-center items-center overflow-hidden p-10">
    <div>
      <HeaderSection />
    </div>

    <div>
      <OptionsSection
        :question="data.questions[currentQuestionIndex.valueOf()]"
        @selectOption="onOptionSelected"
      />
    </div>
  </div>
</template>

<style scoped></style>
