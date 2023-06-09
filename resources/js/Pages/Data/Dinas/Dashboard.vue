<script setup>
import AppLayoutDinas from "@/Layouts/AppLayoutDinas.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
const props = defineProps({
    data: Object,
});
</script>


<template>
    <AppLayoutDinas title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Daftar Pengajuan
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
                                                    Lokasi Perumahan 
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
                                            
                                            <tr class="bg-white border-b border-gray-50 " v-for="item in props.data" :key="item.id">
                                                <th scope="row" class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                                    {{ item.id }}
                                                </th>
                                                <td class="px-2 py-2 ">
                                                    PT. Nusa
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    {{ item.nama_perumahan }}
                                                </td>
                                                <td class="px-2 py-2 ">                                                    
                                                    
                                                </td>
                                                <td class="px-2 py-2 ">                                                    
                                                    {{ item.kode_unik }}
                                                </td>
                                                <th scope="col" class="px-2 py-2">
                                                    Baru
                                                </th>
                                                <td class="px-2 py-2 ">
                                                    {{ item.alamat_perumahan }}
                                                </td>
                                                <td class="px-2 py-2 ">
                                                          <a target="_blank" :href="'https://www.google.com/maps/search/?api=1&query=' + item.koordinat_perumahan + ''" class="text-purple-800 hover:underline pl-2">Maps</a>
                                                </td>
                                                <td class="px-2 py-2 ">
                                                    <div class="text-yellow-700">
                                                         {{ item.status }}
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
                                    </center>

                </div>
            </div>
        </div>
    </AppLayoutDinas>
</template>
