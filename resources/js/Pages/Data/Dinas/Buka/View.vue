<script setup>
import AppLayoutDinas from "@/Layouts/AppLayoutDinas.vue";
import "@/assets/libs/dropzone/min/dropzone.min.js";
const props = defineProps({
    data: Object,
});
console.log(props.data);
</script>

<template >


    <AppLayoutDinas title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Verifikasi Dokumen
            </h2>
        </template>
    </AppLayoutDinas>
</template>