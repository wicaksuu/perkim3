<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';

defineProps({
    Arsip: String,
    Kode:String,
    Data:Object,
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
            <div class="text-center font-semibold text-blue-500">
                Dokumen Ini Telah di Terbitkan
            </div>
            <hr>
            <div class="text-sm text-center text-zinc-600">No. Penerbitan {{ Kode }}</div>
            <div class="text-sm text-center text-zinc-600">{{ Data.nama_perumahan }} ({{ Data.alamat }})</div>

            <div class="bg-transparent p-4 overflow-x-auto">
                <table class="table-auto bg-transparent">
                    <tbody>
                    <tr>
                        <td class="text-sm whitespace-wrap">Pengesahan</td>
                        <td class="text-sm pl-5 whitespace-wrap"> : </td>
                        <td class="text-sm whitespace-wrap">{{ Data.tanggal_pengesahan }}</td>
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
                        <td class="text-sm whitespace-wrap">{{ Data.tanggal_diterbitkan }}</td>
                    </tr>
                    <tr>
                        <td class="text-sm whitespace-wrap">Oleh</td>
                        <td class="text-sm pl-5 whitespace-wrap"> : </td>
                        <td class="text-sm whitespace-wrap">Kepala Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kabupaten Madiun</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <hr>
            <div class="mt-4 text-sm">
                Arsip Dokumen Dapat dilihat Pada :
            </div>

            <div class="flex items-center justify-center mt-4">
                <a target="_blank" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" :href="Arsip">
                    Lihat Dokumen
                </a>
            </div>

            <div class="mt-4 text-sm">
                <i class="text-yellow-400">Dokumen yang di anggap sah adalah dokumen yang sesuai dengan arsip dokumen yang tersimpan pada aplikasi 
                    <a class="text-blue-500 hover:text-blue-700" :href="route('home')">sipedalrum.madiunkab.go.id</a>
                </i>                
            </div>
            
    </AuthenticationCard>
</template>