<script setup lang="ts">
import { ref, reactive,watch,computed  } from 'vue'

   const score = ref(0)
    const number = ref(0)

   const numbers  = reactive<any>({
         age: 0,
         name1: 'Jonh Doe',
   });
   const author = reactive({
     score: 10,
    
   });
 //   const computed = computed(() => {
 //        return `${author.score} === 10 ? 'Yes' : 'No'`
   // })

   const createNumber = () => {
       number.value++;
       numbers.age++;
   }

 


</script>

<template>
    <div>
   <p v-if="score > 10 " style="color: red;">show pass</p>
    <p v-else style="color: blue;">show fail</p>
//    <p>{{ author.score === 10 ? 'Yes' : 'No' }}</p>
    <button @click="createNumber" >click:{{ number }}</button> 
    <h1>My name is Jonh Doe</h1>
    <h2>My age is 25</h2>
    </div>
</template>

<style lang="scss" scoped>

</style>