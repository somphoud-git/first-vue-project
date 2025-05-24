<script setup lang="ts">
import { reactive } from 'vue';

    const form = reactive({
        amout: 0,
        price: 0,
        total: 0,
    });

    const submitData = () => {
        form.total = form.amout * form.price;
    };

</script>

<template>
    <div>
        <h1>Form</h1>
        <p>total price.{{ form.total }}</p>
        <input type="text" v-model="form.amout" placeholder="Enter amout">
        <br>
        <br>
        <input type="text" v-model="form.price" placeholder="Enter price">
        <br>
        <br>
        <button @click="submitData">Summit</button>
        
    </div>
</template>

<style lang="scss" scoped>

</style>