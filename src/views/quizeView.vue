<script setup>
import { useRoute } from "vue-router";
import OptionsSection from "../components/optionsSection.vue";
import HeaderSection from "../components/HeaderSection.vue";
import results from "../components/results.vue"
import q from "../data/quize.json";
import { ref,computed } from "vue";

const route = useRoute();
const id = route.params.id;
const data = q.find((quiz) => quiz.id == id);
let currentQuestionIndex = ref(0);
let correctanswers = ref(0);



const onOptionSelected = (isCorrect) => {

  if(isCorrect){
    correctanswers.value++
  }
  currentQuestionIndex.value++
};

const status = computed(()=>`${currentQuestionIndex.value}/${data.questions.length}`)
const barPercentage = computed(()=>`${currentQuestionIndex.value/data.questions.length*100}%`)
const Finalresults = computed(()=>`${ correctanswers.value}/${data.questions.length}`)







</script>

<template>
  <div class="flex flex-col justify-center items-center overflow-hidden p-10">
    <div>
      <HeaderSection :currentNum="status" :barStatus="barPercentage" />
    </div>

    <div class="w-full">
      
      <OptionsSection v-if="currentQuestionIndex.valueOf()<data.questions.length"
        :question="data.questions[currentQuestionIndex.valueOf()]"
        @selectOption="onOptionSelected"
      />
      <results :result="Finalresults" v-else/>
    </div>
  </div>
</template>

<style scoped></style>
