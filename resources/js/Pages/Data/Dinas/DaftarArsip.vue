<script setup>
import AppLayoutDinas from "@/Layouts/AppLayoutDinas.vue";
const props = defineProps({
    data: Object,
});
</script>


<template>
    <AppLayoutDinas title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Daftar Arsip
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div
                    class="bg-white overflow-hidden shadow-xl sm:rounded-lg pl-4 pt-4 pr-4 pb-10"
                >
                
                </div>
            </div>
        </div>
    </AppLayoutDinas>
</template>
