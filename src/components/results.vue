<script setup>

const props = defineProps({
    result:String
 
})
</script>

<template>
  <div class="w-full flex justify-center items-center mt-1 absolute">
    <div class="lg:w-[400px]">
        <div class="text-[30px] font-extrabold">Result: {{ result }} </div>
      
    </div>
  </div>
</template>

<style scoped></style>