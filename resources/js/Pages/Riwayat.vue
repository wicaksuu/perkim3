<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import "@/assets/libs/dropzone/min/dropzone.min.js";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { Link } from "@inertiajs/vue3";
</script>

<style>
@import "@/assets/libs/dropzone/min/dropzone.min.css";

@import "@/assets/libs/@simonwep/pickr/themes/classic.min.css";
@import "@/assets/libs/@simonwep/pickr/themes/monolith.min.css";
@import "@/assets/libs/@simonwep/pickr/themes/nano.min.css";

@import "@/assets/libs/flatpickr/flatpickr.min.css";
</style>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Riwayat Dokumen
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div
                    class="bg-white overflow-hidden shadow-xl sm:rounded-lg pl-4 pt-4 pr-4"
                >
                <center>
                                    <table class="center">
                                        <thead class="text-sm text-gray-700 dark:text-gray-100">
                                            <tr>
                                                <th scope="col" class="px-2 py-2">
                                                    No
                                                </th>
                                                <th scope="col" class="px-2 py-2">
                                                    Nama Badan Usaha
                                                </th>
                                                <th scope="col" class="px-2 py-2">
                                                    Nomor Pengajuan
                                                </th>
                                                <th scope="col" class="px-2 py-2">
                                                    Jenis Pengajuan
                                                </th>
                                                <th scope="col" class="px-2 py-2">
                                                    Nama Perumahan
                                                </th>

                                                <th scope="col" class="px-2 py-2">
                                                    Alamat Perumahan 
                                                </th>
                                                <th scope="col" class="px-2 py-2">
                                                    Update Terakhir
                                                </th>
                                                <th scope="col" class="px-2 py-2">
                                                    Riwayat
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white border-b border-gray-50 dark:bg-zinc-700 dark:border-zinc-600">
                                                <th scope="row" class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                                    1
                                                </th>
                                                <td class="px-2 py-2 ">
                                                    PT. Sejahtera
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    1CNSD87312NKJASD
                                                </td>
                                                <th scope="col" class="px-2 py-2">
                                                    Baru
                                                </th>
                                                <td class="px-2 py-2 ">
                                                    Perumahan Hijau
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    Jl. Panjaitan Madiun ....
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <div class="text-blue-300">
                                                        10:30:00 23-07-2023
                                                    </div>
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <div class="text-green-500">
                                                       Disahkan

                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b border-gray-50 dark:bg-zinc-700 dark:border-zinc-600">
                                                <th scope="row" class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                                    2
                                                </th>
                                                <td class="px-2 py-2 ">
                                                    PT. Sejahtera
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    1CNSD87312NKJASD
                                                </td>
                                                <th scope="col" class="px-2 py-2">
                                                    Baru
                                                </th>
                                                <td class="px-2 py-2 ">
                                                    Perumahan Hijau
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    Jl. Panjaitan Madiun ....
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <div class="text-blue-300">
                                                        10:30:00 23-06-2023
                                                    </div>
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <div class="text-yellow-700">
                                                        Diproses

                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b border-gray-50 dark:bg-zinc-700 dark:border-zinc-600">
                                                <th scope="row" class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                                    3
                                                </th>
                                                <td class="px-2 py-2 ">
                                                    PT. Sejahtera
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    1CNSD87312NKJASD
                                                </td>
                                                <th scope="col" class="px-2 py-2">
                                                    Baru
                                                </th>
                                                <td class="px-2 py-2 ">
                                                    Perumahan Hijau
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    Jl. Panjaitan Madiun ....
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <div class="text-blue-300">
                                                        10:30:00 23-05-2023
                                                    </div>
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <div class="text-blue-500">
                                                        Update Data dan/atau Dokumen
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b border-gray-50 dark:bg-zinc-700 dark:border-zinc-600">
                                                <th scope="row" class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                                    4
                                                </th>
                                                <td class="px-2 py-2 ">
                                                    PT. Sejahtera
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    1CNSD87312NKJASD
                                                </td>
                                                <th scope="col" class="px-2 py-2">
                                                    Baru
                                                </th>
                                                <td class="px-2 py-2 ">
                                                    Perumahan Hijau
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    Jl. Panjaitan Madiun ....
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <div class="text-blue-300">
                                                        10:30:00 23-04-2023
                                                    </div>
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <div class="text-red-500">
                                                        Verifikasi Ditolak
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b border-gray-50 dark:bg-zinc-700 dark:border-zinc-600">
                                                <th scope="row" class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                                    5
                                                </th>
                                                <td class="px-2 py-2 ">
                                                    PT. Sejahtera
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    1CNSD87312NKJASD
                                                </td>
                                                <th scope="col" class="px-2 py-2">
                                                    Baru
                                                </th>
                                                <td class="px-2 py-2 ">
                                                    Perumahan Hijau
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    Jl. Panjaitan Madiun ....
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <div class="text-blue-300">
                                                        10:30:00 23-03-2023
                                                    </div>
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <div class="text-yellow-700">
                                                        Diproses

                                                    </div>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                    </center>

                </div>
            </div>
        </div>
    </AppLayout>
</template>
