<script setup>

const props = defineProps({
  currentNum: String,
  barStatus:String,
})
</script>

<template>
  <div class="w-full flex justify-center items-center p-10 mt-1">
    <div class="lg:w-[400px]">
      <div class="font-bold text-[30px]">Question {{currentNum}}`</div>
      <div
        class="w-[240px] max-w-[244px] h-[50px] border-2 border-amber-300 mt-5 flex flex-row"
      >
        
      <div class="bg-amber-300" :style="{ width:barStatus, height:'47px' }"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
