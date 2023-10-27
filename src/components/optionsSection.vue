<script setup>
const { question } = defineProps(["question"]);
</script>

<template>
  <div class="bg-slate-200 w-full h-full p-4">
    <div class="w-[400px]"></div>
    <div class="font-bold text-[30px]">{{ question.text }}</div>
  </div>
</template>

<style scoped></style>
