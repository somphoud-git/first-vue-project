<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

   const number = ref(0)

   const numbers  = reactive<any>({
         age: 0,
         name1: 'Jonh Doe',
   });
   const author = reactive({
     score: 10,
    
   });
 

   const createNumber = () => {
       number.value++;
       numbers.age++;
   }

</script>

<template>
    <div>
    <p>{{ computed }}</p>
//    <p>{{ author.score === 10 ? 'Yes' : 'No' }}</p>
    <button @click="createNumber" >click:{{ number }}</button> 
    <h1>My name is Jonh Doe</h1>
    <h2>My age is 25</h2>

    </div>
</template>

<style lang="scss" scoped>

</style>