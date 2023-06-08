<script setup>
import { Head } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
defineProps({
    Kode: String,
});
</script>

<template>
    <Head title="Validasi" />

    <AuthenticationCard>
        <template #logo>
            <AuthenticationCardLogo />
        </template>

            <div class="text-center font-bold text-red-500">
                Nomor Pengesahan 
                {{ Kode }} 
                yang anda masukkan salah, mohon gunakan BarCode yang sesuai dengan arsip yang ada pada akun anda
            </div>
            
    </AuthenticationCard>
</template>