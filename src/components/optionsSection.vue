<script setup>
const { question } = defineProps(["question"]);
const emit = defineEmits(["selectOption"]);

const isCorrectAnswer = (isCorrect) => {
  emit("selectOption", isCorrect);
};
</script>

<template>
  <div class="w-full h-full p-4">
    <div class="font-bold text-[30px]">{{ question.text }}</div>
    <div v-for="option in question.options" :key="option.id">
      <div class="mt-5">
        <div
          class="flex flex-row mb-4 cursor-pointer hover:opacity-70"
          @click="isCorrectAnswer(option.isCorrect)"
        >
          <div
            class="w-[70px] h-[70px] bg-amber-500 opacity-50 p-1 overflow-hidden flex justify-center items-center font-bold text-xl"
          >
            {{ option.label }}
          </div>
          <div
            class="w-[600px] h-[70px] bg-amber-100 opacity-50 overflow-hidden flex items-center p-5 text-xl"
          >
            {{ option.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
