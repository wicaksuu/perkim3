<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
</script>

<template>
    <Head title="Validasi" />

    <AuthenticationCard>
        <template #logo>
            <AuthenticationCardLogo />
        </template>

            <div>
                Dokumen ini telah di Terbitkan
            </div>

            <div class="mt-4">
            </div>

            <div class="mt-4">
            </div>

            <div class="mt-4">
            </div>


            <div class="flex items-center justify-end mt-4">
            </div>
    </AuthenticationCard>
</template>
