<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { Link } from "@inertiajs/vue3";
const props = defineProps({
    data: Object,
});
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="p-2 text-end">
                    
                        <Link class="bg-green-600 text-white py-1 px-2 text-sm rounded" :href="route('pengajuan')">
                            + Tambah Pengajuan
                        </Link>
                </div>
                <div
                    class="bg-white overflow-hidden shadow-xl sm:rounded-lg"
                >
                    <div class="overflow-x-auto">                
                        <table class='min-w-full whitespace-wrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
                            <thead class="bg-gray-900">
                                <tr class="text-white">
                                    <th class="font-semibold text-sm uppercase px-4 py-3 tracking-wider"> No. </th>
                                    <th class="font-semibold text-sm uppercase px-6 py-4 tracking-wider"> Nama Perumahan </th>
                                    <th class="font-semibold text-sm uppercase px-6 py-4 tracking-wider"> No. Pengajuan </th>
                                    <th class="font-semibold text-sm uppercase px-6 py-4 tracking-wider"> Alamat Perumahan </th>
                                    <th class="font-semibold text-sm uppercase px-6 py-4 tracking-wider"> Status </th>
                                    <th class="font-semibold text-sm uppercase px-6 py-4 text-center tracking-wider"> Aksi </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr v-for="item in props.data" :key="item.id">
                                    <td class="px-4 py-3"> 
                                    {{ item.id }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-wrap">
                                        <p class=""> {{ item.nama_perumahan }} </p>
                                        <p class="text-gray-500 text-sm font-semibold tracking-wide"> {{ item.user.name }} </p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-wrap">
                                        <p class=""> {{ item.kode_unik }} </p>
                                        <p class="text-gray-500 text-sm font-bold tracking-wide"> Baru </p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-wrap"> 
                                        {{ item.alamat_perumahan }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-wrap"> 
                                        <span class="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> {{ item.status }} </span> 
                                    </td>
                                    <td class="px-6 py-4 text-center"> 
                                        
                                        <a target="_blank" :href="'https://www.google.com/maps/search/?api=1&query=' + item.koordinat_perumahan + ''" class="text-purple-800 hover:underline pl-2">Maps</a>

                                        <a href="#" class="text-purple-800 hover:underline pl-2">Riwayat</a> 
                                        <a target="_blank" :href="'validate/' + item.kode_unik" class="text-purple-800 hover:underline pl-2">Dokumen</a> 
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>
    </AppLayout>
</template>
