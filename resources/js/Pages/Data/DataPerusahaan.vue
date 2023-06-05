<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
</script>
<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Data Perusahaan
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
                                Data Dasar
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
                                            Nama Perusahaan
                                        </label>
                                        <input
                                            class="w-full rounded border-gray-100 placeholder:text-sm focus:border focus:border-violet-500 focus:ring-0"
                                            type="text"
                                            placeholder="Dinas Perkim"
                                            id="example-text-input"
                                        />
                                    </div>
                                </div>
                                <div class="col-span-12 lg:col-span-6">
                                    <div class="mb-4">
                                        <div class="mb-3">
                                            <label
                                                class="block font-medium text-gray-700 mb-2"
                                                >Status Badan Usaha</label
                                            >
                                            <select
                                                class="w-full rounded border-gray-100 py-2.5 text-sm text-gray-500 focus:border focus:border-violet-500 focus:ring-0"
                                            >
                                                <option>Pusat</option>
                                                <option>Cabang</option>
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
                                Alamat Usaha
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
                                            Titik Koordinat
                                        </label>
                                        <input
                                            class="w-full rounded border-gray-100 placeholder:text-sm focus:border focus:border-violet-500 focus:ring-0"
                                            type="text"
                                            placeholder="latitude,longitude"
                                            id="example-text-input"
                                        />
                                    </div>
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
                                        <label
                                            for="example-text-input"
                                            class="block font-medium text-gray-700 mb-2"
                                            >Nama
                                        </label>
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
                                            >NPWP Badan Usaha
                                        </label>
                                        <input
                                            class="w-full rounded border-gray-100 placeholder:text-sm focus:border focus:border-violet-500 focus:ring-0"
                                            type="text"
                                            placeholder="35***"
                                            id="example-text-input"
                                        />

                                        <SecondaryButton
                                            class="mt-2 mr-2"
                                            type="button"
                                            @click.prevent="selectNewPhoto"
                                        >
                                            Upload Bukti
                                        </SecondaryButton>
                                    </div>

                                    <div class="mb-4">
                                        <label
                                            for="example-text-input"
                                            class="block font-medium text-gray-700 mb-2"
                                            >Nomor Telepon Badan Usaha
                                        </label>
                                        <input
                                            class="w-full rounded border-gray-100 placeholder:text-sm focus:border focus:border-violet-500 focus:ring-0"
                                            type="text"
                                            placeholder="08**"
                                            id="example-text-input"
                                        />
                                    </div>
                                    <div class="mb-4">
                                        <label
                                            for="example-text-input"
                                            class="block font-medium text-gray-700 mb-2"
                                            >Nomor Whatsapp Badan Usaha
                                        </label>
                                        <input
                                            class="w-full rounded border-gray-100 placeholder:text-sm focus:border focus:border-violet-500 focus:ring-0"
                                            type="text"
                                            placeholder="08**"
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
                                            >Email Badan Usaha
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
                                            >Nomor Akta Pendirian /Nomor Surat
                                            Keputusan
                                        </label>
                                        <input
                                            class="w-full rounded border-gray-100 placeholder:text-sm focus:border focus:border-violet-500 focus:ring-0"
                                            type="text"
                                            placeholder="perkim@madiunkab.go.id"
                                            id="example-text-input"
                                        />

                                        <SecondaryButton
                                            class="mt-2 mr-2"
                                            type="button"
                                            @click.prevent="selectNewPhoto"
                                        >
                                            Upload Bukti
                                        </SecondaryButton>
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
