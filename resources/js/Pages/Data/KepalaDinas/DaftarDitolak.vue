<script setup>
import AppLayoutKepalaDinas from "@/Layouts/AppLayoutKepalaDinas.vue";
import "@/assets/libs/dropzone/min/dropzone.min.js";
import PrimaryButton from "@/Components/PrimaryButton.vue";
</script>


<template>
    <AppLayoutKepalaDinas title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Daftar Dokumen Ditolak
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div
                    class="bg-white overflow-hidden shadow-xl sm:rounded-lg pl-4 pt-4 pr-4 pb-10"
                >
                <center>
                                    <table>
                                        <thead class="text-sm text-gray-700 ">
                                            <tr>
                                                <th scope="col" class="px-2 py-2">
                                                    No
                                                </th>
                                                <th scope="col" class="px-2 py-2">
                                                    Nama Badan Usaha
                                                </th>
                                                <th scope="col" class="px-2 py-2">
                                                    Nama Perumahan
                                                </th>
                                                <th scope="col" class="px-2 py-2">
                                                    No. Pengesahan
                                                </th>
                                                <th scope="col" class="px-2 py-2">
                                                    No. Pengajuan
                                                </th>

                                                <th scope="col" class="px-2 py-2">
                                                    Jenis Pengajuan
                                                </th>

                                                <th scope="col" class="px-2 py-2">
                                                    Alamat Perumahan 
                                                </th>
                                                <th scope="col" class="px-2 py-2">
                                                    Tanggal Penolakan 
                                                </th>
                                                <th scope="col" class="px-2 py-2">
                                                    Status
                                                </th>
                                                <th scope="col" class="px-2 py-2">
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            <tr class="bg-white border-b border-gray-50 ">
                                                <th scope="row" class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                                    1
                                                </th>
                                                <td class="px-2 py-2 ">
                                                    PT. Nusa
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    Perumahan Hijau
                                                </td>
                                                <td class="px-2 py-2 ">                                                    
                                                    JSADN87SAD8Y6897
                                                </td>
                                                <td class="px-2 py-2 ">                                                    
                                                    DAYU6GJASJHD876N
                                                </td>
                                                <th scope="col" class="px-2 py-2">
                                                    Perubahan
                                                </th>
                                                <td class="px-2 py-2 ">
                                                    Jl. Borobudur Madiun ....
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    
                                                    <div class="text-blue-300">
                                                        10:30:00 23-07-2023
                                                    </div>
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <div class="text-red-700">
                                                         Ditolak

                                                    </div>
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <div class="p-1">
                                                        <PrimaryButton>Notifikasi</PrimaryButton>
                                                    </div>
                                                </td>
                                            </tr>
                                            
                                            <tr class="bg-white border-b border-gray-50 ">
                                                <th scope="row" class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                                    2
                                                </th>
                                                <td class="px-2 py-2 ">
                                                    PT. Cipta Karya
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    Perumahan Hijau
                                                </td>
                                                <td class="px-2 py-2 ">                                                    
                                                    -
                                                </td>
                                                <td class="px-2 py-2 ">                                                    
                                                    KJHDKJHADS874219
                                                </td>
                                                <th scope="col" class="px-2 py-2">
                                                    Baru
                                                </th>
                                                <td class="px-2 py-2 ">
                                                    Jl. Borobudur Madiun ....
                                                </td>
                                                <td class="px-2 py-2 ">

                                                    <div class="text-blue-300">
                                                        10:30:00 23-07-2023
                                                    </div>
                                                    
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <div class="text-red-500">
                                                         Ditolak

                                                    </div>
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <div class="p-1">
                                                        <PrimaryButton>Notifikasi</PrimaryButton>
                                                    </div>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                    </center>

                </div>
            </div>
        </div>
    </AppLayoutKepalaDinas>
</template>
