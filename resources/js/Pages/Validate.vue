<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';

defineProps({
    Arsip: String,
});
</script>

<template>
    <Head title="Validasi" />

    <AuthenticationCard>
        <template #logo>
            <AuthenticationCardLogo />
        </template>

            <div class="text-center font-bold">
                Dokumen Ini Telah di Terbitkan
            </div>
            <hr>
            <div class="bg-transparent p-4 overflow-x-auto">
                <table class="table-auto bg-transparent">
                    <tbody>
                    <tr>
                        <td class="text-sm whitespace-wrap">Pengesahan</td>
                        <td class="text-sm pl-5 whitespace-wrap"> : </td>
                        <td class="text-sm whitespace-wrap">10:30:22 09/06/2023</td>
                    </tr>
                    <tr>
                        <td class="text-sm whitespace-wrap">Oleh</td>
                        <td class="text-sm pl-5 whitespace-wrap"> : </td>
                        <td class="text-sm whitespace-wrap">Kepala Dinas Perumahan dana Kawasan Pemukiman Kabupaten Madiun</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <hr>
            <div class="bg-transparent p-4 overflow-x-auto">
                <table class="table-auto bg-transparent">
                    <tbody>
                    <tr>
                        <td class="text-sm whitespace-wrap">Diterbitkan</td>
                        <td class="text-sm pl-5 whitespace-wrap"> : </td>
                        <td class="text-sm whitespace-wrap">10:45:10 09/06/2023</td>
                    </tr>
                    <tr>
                        <td class="text-sm whitespace-wrap">Oleh</td>
                        <td class="text-sm pl-5 whitespace-wrap"> : </td>
                        <td class="text-sm whitespace-wrap">Kepala Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kabupaten Madiun</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="mt-4 text-sm">
                Arsip Dokumen Dapat dilihat pada :
            </div>


            <div class="flex items-center justify-center mt-4">
                <a target="_blank" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" :href="Arsip">
                    Lihat Dokumen
                </a>
            </div>

            <div class="mt-4 text-sm">
                <i class="text-red-400">Dokumen yang di anggap sah sesuai dengan arsip dokumen yang tersimpan pada aplikasi 
                    <Link class="text-blue-500 hover:text-blue-700" href="https://sipedalrum.madiunkab.go.id">sipedalrum.madiunkab.go.id</Link>
                </i>                
            </div>
            
    </AuthenticationCard>
</template>