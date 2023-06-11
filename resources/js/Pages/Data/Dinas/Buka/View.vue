<script setup>
import AppLayoutDinas from "@/Layouts/AppLayoutDinas.vue";
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
const props = defineProps({
    data: Object,
});
console.log(props.data);
</script>

<template >


    <AppLayoutDinas title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Verifikasi Dokumen
            </h2>
        </template>

        <div class="pt-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div
                    class="bg-white overflow-hidden shadow-xl sm:rounded-lg pl-4 pt-4 pr-4"
                >

                    <div class="card">
                        <div class="card-body pb-0">
                            <h6 class="mb-1 text-15 text-gray-700">
                                Bentuk Usaha / Badan Usaha
                            </h6>
                        </div>
                        <div class="card-body">
                            <div class="grid grid-cols-12 gap-5">
                                <div class="col-span-12 lg:col-span-6">
                                    <div class="mb-4">
                                        {{ props.data.user.ref_bentukBadanUsaha }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body pb-0">
                            <h6 class="mb-1 text-15 text-gray-700">
                                Data Pemohon
                            </h6>
                        </div>
                        <div class="card-body">
                            <div class="grid grid-cols-12 gap-5">
                                <div class="col-span-12 lg:col-span-6">

                                        <div class="mb-4">
                                            <InputLabel for="nama_pemohon" value="Nama Pemohon" />
                                            <TextInput  id="nama_pemohon" v-model="props.data.user.nama_pemohon" type="text" class="mt-1 block w-full" placeholder="Wic***" />
                                        </div>

                                        <div class="mb-4">
                                            <InputLabel for="tempat_lahir_pemohon" value="Tempat Lahir" />
                                            <TextInput id="tempat_lahir_pemohon" v-model="props.data.user.tempat_lahir_pemohon" type="text" class="mt-1 block w-full" placeholder="Mad***" />
                                        </div>

                                    <div class="mb-4">
                                            <InputLabel for="tanggal_lahirpemohon" value="Tanggal Lahir" />
                                            <TextInput id="tanggal_lahirpemohon" v-model="props.data.user.tanggal_lahirpemohon" type="date" class="mt-1 block w-full" placeholder="Mad***" />
                                    </div>

                                    <div class="mb-4">
                                            <InputLabel for="jabatan_pemohon" value="Jabatan Pemohon" />
                                            <TextInput id="jabatan_pemohon" v-model="props.data.user.jabatan_pemohon" type="text" class="mt-1 block w-full" placeholder="Direk***" />
                                    </div>

                                    <div class="mb-4">
                                            <InputLabel for="npwp_pemohon" value="NPWP Pemohon" />
                                            <TextInput id="npwp_pemohon" v-model="props.data.user.npwp_pemohon" type="text" class="mt-1 block w-full" placeholder="35***" />
                                    </div>
                                </div>
                                <div class="col-span-12 lg:col-span-6">
                                    <div class="mb-4">
                                            <InputLabel for="nik_pemohon" value="Nomor Induk Kependudukan" />
                                            <TextInput id="nik_pemohon" v-model="props.data.user.nik_pemohon" type="text" class="mt-1 block w-full" placeholder="35***" />
                                    </div>
                                    <div class="mb-4">
                                            <InputLabel for="nomor_telepon_pemohon" value="Nomor Telepon" />
                                            <TextInput id="nomor_telepon_pemohon" v-model="props.data.user.nomor_telepon_pemohon" type="text" class="mt-1 block w-full" placeholder="035***" />
                                    </div>
                                    <div class="mb-4">
                                            <InputLabel for="nomor_whatsapp_pemohon" value="Nomor Whatsapp" />
                                            <TextInput id="nomor_whatsapp_pemohon" v-model="props.data.user.nomor_whatsapp_pemohon" type="text" class="mt-1 block w-full" placeholder="035***" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="grid grid-cols-12 gap-5">
                                <div class="col-span-12 lg:col-span-6">
                                    <div class="mb-4">
                                            <InputLabel for="alamat_pemohon" value="Alamat Pemohon" />
                                            <TextInput id="alamat_pemohon" v-model="props.data.user.alamat_pemohon" type="text" class="mt-1 block w-full" placeholder="Jl.***" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="pt-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div
                    class="bg-white overflow-hidden shadow-xl sm:rounded-lg pl-4 pt-4 pr-4"
                >
                    <div class="card">
                        <div class="card-body pb-0">
                            <h6 class="mb-1 text-15 text-gray-700">
                                Data Dasar
                            </h6>
                        </div>
                        <div class="card-body">
                            <div class="grid grid-cols-12 gap-5">
                                <div class="col-span-12 lg:col-span-6">
                                    <div class="mb-4">
                                            <InputLabel for="nama_badan_usaha" value="Nama Badan Usaha" />
                                            <TextInput  id="nama_badan_usaha" v-model="props.data.user.nama_badan_usaha" type="text" class="mt-1 block w-full" placeholder="Wic***" />

                                    </div>
                                </div>
                                <div class="col-span-12 lg:col-span-6">
                                    <div class="mb-4">
                                            <div class="mb-1 text-15 text-gray-700">
                                           Status Badan Usaha {{ props.data.user.ref_status_badan_usaha }}
                                            </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body pb-0">
                            <h6 class="mb-1 text-15 text-gray-700">
                                Alamat Badan Usaha
                            </h6>
                        </div>
                        <div class="card-body">
                            <div class="grid grid-cols-12 gap-5">
                                <div class="col-span-12 lg:col-span-6">
                                    <div class="mb-4">
                                            <InputLabel for="titik_koordinat" value="Titik Koordinat" />
                                            <TextInput  id="titik_koordinat" v-model="props.data.user.titik_koordinat" type="text" class="mt-1 block w-full" placeholder="-7.5374307,111.6302997" />
                                    </div>
                                </div>
                                <div class="col-span-12 lg:col-span-6">
                                    <div class="mb-4">
                                            <InputLabel for="alamat_badan_usaha" value="Alamat Badan Usaha" />
                                            <TextInput  id="alamat_badan_usaha" v-model="props.data.user.alamat_badan_usaha" type="text" class="mt-1 block w-full" placeholder="jl.***" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body pb-0">
                            <h6 class="mb-1 text-15 text-gray-700">
                                Data Pimpinan / Penanggung Jawab
                            </h6>
                        </div>
                        <div class="card-body">
                            <div class="grid grid-cols-12 gap-5">
                                <div class="col-span-12 lg:col-span-6">
                                    <div class="mb-4">
                                            <InputLabel for="nama_pimpinan" value="Nama Pimpinan" />
                                            <TextInput  id="nama_pimpinan" v-model="props.data.user.nama_pimpinan" type="text" class="mt-1 block w-full" placeholder="Wicak***" />
                                    </div>

                                    <div class="mb-4">
                                            <InputLabel for="npwp_badan_usaha" value="NPWP Badan Usaha" />
                                            <TextInput  id="npwp_badan_usaha" v-model="props.data.user.npwp_badan_usaha" type="text" class="mt-1 block w-full" placeholder="35***" />
                                    </div>

                                    <div class="mb-4">
                                            <InputLabel for="nomor_telepon_badan_usaha" value="Nomor Telepon Badan Usaha" />
                                            <TextInput  id="nomor_telepon_badan_usaha" v-model="props.data.user.nomor_telepon_badan_usaha" type="text" class="mt-1 block w-full" placeholder="035***" />
                                    </div>
                                    <div class="mb-4">
                                            <InputLabel for="nomor_whatsapp_usaha" value="Nomor Whatsapp Badan Usaha" />
                                            <TextInput  id="nomor_whatsapp_usaha" v-model="props.data.user.nomor_whatsapp_usaha" type="text" class="mt-1 block w-full" placeholder="085***" />
                                    </div>
                                </div>
                                <div class="col-span-12 lg:col-span-6">
                                    <div class="mb-4">
                                            <InputLabel for="nik_pimpinan" value="Nomor Induk Kependudukan Pimpinan" />
                                            <TextInput  id="nik_pimpinan" v-model="props.data.user.nik_pimpinan" type="text" class="mt-1 block w-full" placeholder="351***" />
                                    </div>
                                    <div class="mb-4">
                                            <InputLabel for="nomor_akta_pendirian" value="Nomor Akta Pendirian /Nomor Surat Keputusan" />
                                            <TextInput  id="nomor_akta_pendirian" v-model="props.data.user.nomor_akta_pendirian" type="text" class="mt-1 block w-full" placeholder="351***" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </AppLayoutDinas>
</template>