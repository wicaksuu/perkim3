<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import "@/assets/libs/dropzone/min/dropzone.min.js";
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
                Data Pemohon
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div
                    class="bg-white overflow-hidden shadow-xl sm:rounded-lg pl-4 pt-4 pr-4"
                >
                    <div class="grid grid-cols-1">
                        <div class="card">
                            <div class="card-body pb-0">
                                <h6 class="mb-1 text-15 text-gray-700">
                                    Upload Dokumen
                                </h6>
                                <i
                                    >Perubahan Rencana Tapak pada lahan dalam
                                    satu hamparan (hanya 1 kali)</i
                                >
                            </div>
                            <div class="card-body">
                                <div>
                                    <form action="#" class="dropzone">
                                        <div class="fallback">
                                            <input
                                                name="file"
                                                type="file"
                                                multiple="multiple"
                                            />
                                        </div>
                                        <div class="dz-message needsclick">
                                            <div class="mb-3">
                                                <i
                                                    class="text-6xl text-gray-300 bx bx-cloud-upload"
                                                ></i>
                                            </div>

                                            <h5
                                                class="text-gray-600 dark:text-gray-100"
                                            >
                                                Upload Dokumen Kajian dan Gambar
                                                Rencana Tapak Lama yang telah
                                                dilegalisir.
                                            </h5>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

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
                                                <option>Badan Hukum</option>
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
                                        <label
                                            for="example-text-input"
                                            class="block font-medium text-gray-700 mb-2"
                                            >Nama Pemohon
                                        </label>
                                        <i>
                                            bila dikuasakan, surat kuasa untuk
                                            diupload
                                        </i>
                                        <input
                                            class="w-full rounded border-gray-100 placeholder:text-sm focus:border focus:border-violet-500 focus:ring-0"
                                            type="text"
                                            placeholder="Wicak***"
                                            id="example-text-input"
                                        />
                                    </div>
                                    <div class="mb-4">
                                        <label
                                            for="example-text-input"
                                            class="block font-medium text-gray-700 mb-2"
                                            >Tempat Lahir
                                        </label>
                                        <input
                                            class="w-full rounded border-gray-100 placeholder:text-sm focus:border focus:border-violet-500 focus:ring-0"
                                            type="text"
                                            placeholder="Madiun"
                                            id="example-text-input"
                                        />
                                    </div>
                                    <div class="mb-4">
                                        <label
                                            for="example-text-input"
                                            class="block font-medium text-gray-700 dark:text-gray-100 mb-2"
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
                                            >Email
                                        </label>
                                        <input
                                            class="w-full rounded border-gray-100 placeholder:text-sm focus:border focus:border-violet-500 focus:ring-0"
                                            type="email"
                                            placeholder="perkim@madiunkab.go.id"
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
                                            placeholder="perkim@madiunkab.go.id"
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
                                            placeholder="perkim@madiunkab.go.id"
                                            id="example-text-input"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1">
                        <div class="card">
                            <div class="card-body pb-0">
                                <h6 class="mb-1 text-15 text-gray-700">
                                    Upload Surat Kuasa
                                </h6>
                                <i>Upload bila dikuasakan</i>
                            </div>
                            <div class="card-body">
                                <div>
                                    <form action="#" class="dropzone">
                                        <div class="fallback">
                                            <input
                                                name="file"
                                                type="file"
                                                multiple="multiple"
                                            />
                                        </div>
                                        <div class="dz-message needsclick">
                                            <div class="mb-3">
                                                <i
                                                    class="text-6xl text-gray-300 bx bx-cloud-upload"
                                                ></i>
                                            </div>

                                            <h5
                                                class="text-gray-600 dark:text-gray-100"
                                            >
                                                Upload bukti Surat Kuasa
                                                bermaterai.
                                            </h5>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body pb-0">
                            <h6 class="mb-1 text-15 text-gray-700">
                                Alamat Pemohon
                            </h6>
                        </div>
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
                                    <div class="mb-4">
                                        <div class="mb-3">
                                            <label
                                                class="block font-medium text-gray-700 mb-2"
                                                >Provinsi</label
                                            >
                                            <select
                                                class="w-full rounded border-gray-100 py-2.5 text-sm text-gray-500 focus:border focus:border-violet-500 focus:ring-0"
                                            >
                                                <option>Jawa Timur</option>
                                                <option>Jawa Tengah</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-12 lg:col-span-6">
                                    <div class="mb-4">
                                        <div class="mb-3">
                                            <label
                                                class="block font-medium text-gray-700 mb-2"
                                                >Kota/Kabupaten</label
                                            >
                                            <select
                                                class="w-full rounded border-gray-100 py-2.5 text-sm text-gray-500 focus:border focus:border-violet-500 focus:ring-0"
                                            >
                                                <option>Madiun</option>
                                                <option>Kab. Madiun</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="mb-4">
                                        <div class="mb-3">
                                            <label
                                                class="block font-medium text-gray-700 mb-2"
                                                >Kecamatan</label
                                            >
                                            <select
                                                class="w-full rounded border-gray-100 py-2.5 text-sm text-gray-500 focus:border focus:border-violet-500 focus:ring-0"
                                            >
                                                <option>Balerejo</option>
                                                <option>Mejayan</option>
                                            </select>
                                        </div>
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
