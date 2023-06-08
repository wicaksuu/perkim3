<script setup>
import { Head } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
defineProps({
    Kode: String,
});
</script>

<template>
    <Head title="Validasi" />

    <AuthenticationCard class="pb-12">
            <div class="flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Logo_kabupaten_madiun.gif/100px-Logo_kabupaten_madiun.gif" alt="Pemerintah Kabupaten Madiun">
            </div>
            <div class="text-center font-bold text-xl font-serif">
                PEMERINTAH KABUPATEN MADIUN
            </div>
            <div class="text-center font-semibold font-serif">
                Si-PEDALRUM
            </div>
            <div class="text-center font-semibold text-red-500">
                Kode Dokumen Tidak Sah
            </div>
            <hr>
            <div class="text-sm text-center text-zinc-600">No. Penerbitan {{ Kode }}</div>

            <div class="mt-4">
                Kode QR yang di scan tidak sah dan tidak ditemukan pada database <i><a class="text-blue-500 hover:text-blue-700" :href="route('home')">sipedalrum.madiunkab.go.id</a></i> mohon scan ulang dokumen.
            </div>

            <div class="mt-8 text-sm">
                <i class="text-yellow-400">Dokumen yang di anggap sah adalah dokumen yang sesuai dengan arsip dokumen yang tersimpan pada aplikasi 
                    <a class="text-blue-500 hover:text-blue-700" :href="route('home')">sipedalrum.madiunkab.go.id</a>
                </i>                
            </div>
            
    </AuthenticationCard>
</template>