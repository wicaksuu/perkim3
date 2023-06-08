<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { useForm } from '@inertiajs/vue3';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
const form = useForm({
    namaPemohon: '',
    tempatLahir: '',
});
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Data Pemohon
            </h2>
        </template>

        <div class="py-12">
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
                                        <div class="mb-3">
                                            <label
                                                class="block font-medium text-gray-700 mb-2"
                                                >Silahkan Pilih</label
                                            >
                                            <select
                                                class="w-full rounded border-gray-100 py-2.5 text-sm text-gray-500 focus:border focus:border-violet-500 focus:ring-0"
                                            >
                                                <option class="Badan Hukum">Badan Hukum</option>
                                            </select>
                                        </div>
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
                                            <InputLabel for="namaPemohon" value="Nama Pemohon" />
                                            <TextInput id="namaPemohon" v-model="form.namaPemohon" type="text" class="mt-1 block w-full" placeholder="Wic***" />
                                            <InputError :message="form.errors.namaPemohon" class="mt-2" />                                    
                                        </div>

                                        <div class="mb-4">
                                            <InputLabel for="tempatLahir" value="Tempat Lahir" />
                                            <TextInput id="tempatLahir" v-model="form.tempatLahir" type="text" class="mt-1 block w-full" placeholder="Mad***" />
                                            <InputError :message="form.errors.tempatLahir" class="mt-2" />                                    
                                        </div>

                                    <div class="mb-4">
                                        <label
                                            for="example-text-input"
                                            class="block font-medium text-gray-700 mb-2"
                                            >Tanggal Lahir</label
                                        >
                                        <input
                                            class="w-full rounded border-gray-100 placeholder:text-sm focus:border focus:border-violet-500 focus:ring-0"
                                            type="date"
                                            value="2019-08-19"
                                            id="example-date-input"
                                        />
                                    </div>

                                    <div class="mb-4">
                                        <label
                                            for="example-text-input"
                                            class="block font-medium text-gray-700 mb-2"
                                            >Jabatan
                                        </label>
                                        <input
                                            class="w-full rounded border-gray-100 placeholder:text-sm focus:border focus:border-violet-500 focus:ring-0"
                                            type="text"
                                            placeholder="Direktur"
                                            id="example-text-input"
                                        />
                                    </div>

                                    <div class="mb-4">
                                        <label
                                            for="example-text-input"
                                            class="block font-medium text-gray-700 mb-2"
                                            >NPWP Pemohon
                                        </label>
                                        <input
                                            class="w-full rounded border-gray-100 placeholder:text-sm focus:border focus:border-violet-500 focus:ring-0"
                                            type="text"
                                            placeholder="35***"
                                            id="example-text-input"
                                        />
                                    </div>
                                </div>
                                <div class="col-span-12 lg:col-span-6">
                                    <div class="mb-4">
                                        <label
                                            for="example-text-input"
                                            class="block font-medium text-gray-700 mb-2"
                                            >Nomor Induk Kependudukan
                                        </label>
                                        <i>
                                            Pastikan NIK yang di masukkan sesuai
                                            dengan data kependudukan
                                        </i>
                                        <input
                                            class="w-full rounded border-gray-100 placeholder:text-sm focus:border focus:border-violet-500 focus:ring-0"
                                            type="text"
                                            placeholder="351***"
                                            id="example-text-input"
                                        />
                                    </div>
                                    <div class="mb-4">
                                        <label
                                            for="example-text-input"
                                            class="block font-medium text-gray-700 mb-2"
                                            >Nomor Telepon
                                        </label>
                                        <input
                                            class="w-full rounded border-gray-100 placeholder:text-sm focus:border focus:border-violet-500 focus:ring-0"
                                            type="text"
                                            placeholder="035***"
                                            id="example-text-input"
                                        />
                                    </div>
                                    <div class="mb-4">
                                        <label
                                            for="example-text-input"
                                            class="block font-medium text-gray-700 mb-2"
                                            >Nomor Whatsapp
                                        </label>
                                        <input
                                            class="w-full rounded border-gray-100 placeholder:text-sm focus:border focus:border-violet-500 focus:ring-0"
                                            type="text"
                                            placeholder="082***"
                                            id="example-text-input"
                                        />
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
                                        <label
                                            for="example-text-input"
                                            class="block font-medium text-gray-700 mb-2"
                                        >
                                            Alamat
                                        </label>
                                        <input
                                            class="w-full rounded border-gray-100 placeholder:text-sm focus:border focus:border-violet-500 focus:ring-0"
                                            type="text"
                                            placeholder="jl***"
                                            id="example-text-input"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
