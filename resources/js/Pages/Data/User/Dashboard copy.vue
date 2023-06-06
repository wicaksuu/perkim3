<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import DropDown from "@/Components/perkim/DropDown.vue";
import DD2 from "@/Components/perkim/DD2.vue";
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
                <div
                    class="bg-white overflow-hidden shadow-xl sm:rounded-lg pl-4 pt-4 pr-4 pb-10"
                >

                <PrimaryButton>+ Tambah Pengajuan</PrimaryButton>
                                    <table class="table-auto">
                                        <thead class="text-sm text-gray-700">
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
                                                    No. Pengajuan
                                                </th>

                                                <th scope="col" class="px-2 py-2">
                                                    Jenis Pengajuan
                                                </th>

                                                <th scope="col" class="px-2 py-2">
                                                    Alamat Perumahan 
                                                </th>
                                                <th scope="col" class="px-2 py-2">
                                                    Lokasi Perumahan 
                                                </th>
                                                <th scope="col" class="px-2 py-2">
                                                    Record
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
                                                    PT. Sejahtera
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    Green Garden
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    1CNSD87312NKJASD
                                                </td>
                                                <th scope="col" class="px-2 py-2">
                                                    Baru
                                                </th>
                                                <td class="px-2 py-2 ">
                                                    Jl. Sulawesi Madiun ....
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <PrimaryButton>Maps</PrimaryButton>
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <PrimaryButton>Riwayat</PrimaryButton>
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <div class="text-red-500">
                                                        Verifikasi Ditolak
                                                    </div>
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <div class="p-1">
                                                        <DropDown/>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b border-gray-50 ">
                                                <th scope="row" class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                                    2
                                                </th>
                                                <td class="px-2 py-2 ">
                                                    PT. Sejahtera
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    Citraland
                                                </td>
                                                <td class="px-2 py-2 ">                                                    
                                                    U8U9DJASKJ8NHDKA
                                                </td>
                                                <th scope="col" class="px-2 py-2">
                                                    Baru
                                                </th>
                                                <td class="px-2 py-2 ">
                                                    Jl. Panjaitan Madiun ....
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <PrimaryButton>Maps</PrimaryButton>
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <PrimaryButton>Riwayat</PrimaryButton>
                                                </td>
                                                <td class="px-2 py-2 ">
  <div class="text-green-500">
                                                    Disahkan

  </div>
                                                </td>
                                                <td class="px-2 py-2 ">

                                                    <div class="p-1">
                                                        <DD2/>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b border-gray-50 ">
                                                <th scope="row" class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                                    3
                                                </th>
                                                <td class="px-2 py-2 ">
                                                    PT. Sejahtera
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    Perumahan Hijau
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
                                                    <PrimaryButton>Maps</PrimaryButton>
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <PrimaryButton>Riwayat</PrimaryButton>
                                                </td>
                                                <td class="px-2 py-2 ">
  <div class="text-yellow-700">
                                                    Diproses

  </div>
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <div class="p-1">
                                                        <PrimaryButton>Buka</PrimaryButton>
                                                    </div>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>

                </div>
            </div>
        </div>
    </AppLayout>
</template>
