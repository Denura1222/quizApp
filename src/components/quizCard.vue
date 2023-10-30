<script setup>
import { useRouter } from "vue-router";
const { quiz } = defineProps(["quiz"]);

const router = useRouter();

const navigate = () => {
  router.push(`/quiz/${quiz.id}`);
};

</script>

<template>
  <div
    className="w-[300px] h-[25 0px] shadow-md rounded-lg hover:opacity-90 cursor-pointer flex flex-col gap-2 overflow-hidden mb-10"
    @click="navigate"
  >
    <img :src="quiz.img" alt="image" />
    <div className="p-2">
      <div className="font-bold text-lg text-slate-500">{{ quiz.name }}</div>
      <div className="text-sm">{{ quiz.questions.length }} questions</div>
    </div>
  </div>
</template>

<style scoped></style>
