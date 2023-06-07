<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import AppLayout from "@/Layouts/AppLayout.vue";
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import Checkbox from '@/Components/Checkbox.vue';

const kode_a = ref(null);
const kode_b = ref(null);
const kode_c = ref(null);
const kode_d = ref(null);
const kode_e = ref(null);
const kode_f = ref(null);
const kode_g = ref(null);
const kode_h = ref(null);
const kode_i = ref(null);
const kode_j = ref(null);
const kode_k = ref(null);
const kode_l = ref(null);
const mbrOrNon = ref(null);

const form = useForm({
    nama_perumahan: '',
    koordinat_perumahan: '',
    alamat_perumahan: '',
    klasifikasi_usaha_41011: false,
    klasifikasi_usaha_68111: false,
    klasifikasi_kegiatan_usaha_sesuai_tercantum_dalam_akte_pendirian: false,
    nomor_induk_berusaha: '',
    ref_kode_a: null,
    ref_kode_b: null,
    ref_kode_c: null,
    ref_kode_d: null,
    ref_kode_e: null,
    ref_kode_f: null,
    ref_kode_g: null,
    ref_kode_h: null,
    ref_kode_i: null,
    ref_kode_j: null,
    ref_kode_k: null,
    ref_kode_l: null,
    ref_mbrOrNon: "MBR",
});


// upload dokumen
const submit = () => {
    if (kode_a.value) {
        form.ref_kode_a = kode_a.value.files[0];
    }
    if (kode_b.value) {
        form.ref_kode_b = kode_b.value.files[0];
    }
    if (kode_c.value) {
        form.ref_kode_c = kode_c.value.files[0];
    }
    if (kode_d.value) {
        form.ref_kode_d = kode_d.value.files[0];
    }
    if (kode_e.value) {
        form.ref_kode_e = kode_e.value.files[0];
    }
    if (kode_f.value) {
        form.ref_kode_f = kode_f.value.files[0];
    }
    if (kode_g.value) {
        form.ref_kode_g = kode_g.value.files[0];
    }
    if (kode_h.value) {
        form.ref_kode_h = kode_h.value.files[0];
    }
    if (kode_i.value) {
        form.ref_kode_i = kode_i.value.files[0];
    }
    if (kode_j.value) {
        form.ref_kode_j = kode_j.value.files[0];
    }
    if (kode_k.value) {
        form.ref_kode_k = kode_k.value.files[0];
    }
    if (kode_l.value) {
        form.ref_kode_l = kode_l.value.files[0];
    }
    if (mbrOrNon.value) {
        form.ref_mbrOrNon = mbrOrNon.value;
    }

    form.post(route('submit'), {
        errorBag: 'submit',
        preserveScroll: true,
        onSuccess: () => clearInput(),
    });
};

const clearInput = () => {
    if (kode_a.value?.value) {
        kode_a.value.value = null;
    }
    if (kode_b.value?.value) {
        kode_b.value.value = null;
    }
    if (kode_c.value?.value) {
        kode_c.value.value = null;
    }
    if (kode_d.value?.value) {
        kode_d.value.value = null;
    }
    if (kode_e.value?.value) {
        kode_e.value.value = null;
    }
    if (kode_f.value?.value) {
        kode_f.value.value = null;
    }
    if (kode_g.value?.value) {
        kode_g.value.value = null;
    }
    if (kode_h.value?.value) {
        kode_h.value.value = null;
    }
    if (kode_i.value?.value) {
        kode_i.value.value = null;
    }
    if (kode_j.value?.value) {
        kode_j.value.value = null;
    }
    if (kode_k.value?.value) {
        kode_k.value.value = null;
    }
    if (kode_l.value?.value) {
        kode_l.value.value = null;
    }
};

</script>
<template>

    <AppLayout title="Pengajuan">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Pengajuan
            </h2>

        </template>

        <form @submit.prevent="submit">
            <div class="py-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div class="m-4">
                            <h6 class="text-15 font-semibold text-gray-700 p-4">
                                1. Data Perumahan
                                <hr>
                            </h6>
                            <div class="container mx-auto">
                                <div class="lg:flex">
                                    <div class="lg:w-1/2 px-4">
                                        <div class="mb-4">
                                            <InputLabel for="nama_perumahan" value="Nama Perumahan" />
                                            <TextInput id="nama_perumahan" ref="currentPasswordInput" v-model="form.nama_perumahan" type="text" class="mt-1 block w-full" autocomplete="current-password" placeholder="Griya***" />
                                            <InputError :message="form.errors.nama_perumahan" class="mt-2" />                                    
                                        </div>
                                        <div class="mb-4">
                                            <InputLabel for="koordinat_perumahan" value="Koordinat Perumahan" />
                                            <TextInput id="koordinat_perumahan" ref="currentPasswordInput" v-model="form.koordinat_perumahan" type="text" class="mt-1 block w-full" autocomplete="current-password" placeholder="-7.5374307,111.6302997" />
                                            <InputError :message="form.errors.koordinat_perumahan" class="mt-2" />                                    
                                        </div>
                                    </div>
                                    <div class="lg:w-1/2 px-4">
                                        <div class="mb-4">
                                            <InputLabel for="alamat_perumahan" value="Alamat Perumahan" />
                                            <TextInput id="alamat_perumahan" ref="currentPasswordInput" v-model="form.alamat_perumahan" type="text" class="mt-1 block w-full" autocomplete="current-password" placeholder="Jl. Sul***" />
                                            <InputError :message="form.errors.alamat_perumahan" class="mt-2" />                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-4">
                            <h6 class="text-15 font-semibold text-gray-700 p-4">
                                2. Administrasi
                                <hr>
                            </h6>
                            <div class="container mx-auto">
                                <div class="lg:flex">
                                    <div class="px-4">
                                        <div class="mb-4">
                                            <InputLabel value="Klasifikasi Usaha" />
                                            <div class="flex items-center pt-4">
                                                <div class="pr-4">
                                                    <label class="flex items-center">
                                                        <Checkbox v-model:checked="form.klasifikasi_usaha_41011" name="klasifikasi_usaha_41011" />
                                                        <span class="ml-2 text-sm text-gray-600">Klasifikasi Usaha 41011</span>
                                                    </label>
                                                        <InputError :message="form.errors.klasifikasi_usaha_41011" class="mt-2" />  
                                                </div>
                                                <div class="pr-4">
                                                    <label class="flex items-center">
                                                        <Checkbox v-model:checked="form.klasifikasi_usaha_68111" name="klasifikasi_usaha_68111" />
                                                        <span class="ml-2 text-sm text-gray-600">Klasifikasi Usaha 68111</span>
                                                    </label>
                                                        <InputError :message="form.errors.klasifikasi_usaha_68111" class="mt-2" />  
                                                </div>
                                                <div class="pr-4">
                                                    <label class="flex items-center">
                                                        <Checkbox v-model:checked="form.klasifikasi_kegiatan_usaha_sesuai_tercantum_dalam_akte_pendirian" name="klasifikasi_kegiatan_usaha_sesuai_tercantum_dalam_akte_pendirian" />
                                                        <span class="ml-2 text-sm text-gray-600">Klasifikasi kegiatan usaha sesuai tercantum dalam akte pendirian</span>
                                                    </label>
                                                        <InputError :message="form.errors.klasifikasi_kegiatan_usaha_sesuai_tercantum_dalam_akte_pendirian" class="mt-2" />  
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-4">
                                            <InputLabel for="nomor_induk_berusaha" value="Nomor Induk Berusaha" />
                                            <TextInput id="nomor_induk_berusaha" ref="currentPasswordInput" v-model="form.nomor_induk_berusaha" type="text" class="mt-1 block w-full" autocomplete="current-password" placeholder="321***" />
                                            <InputError :message="form.errors.nomor_induk_berusaha" class="mt-2" />                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div class="m-4">
                            <h6 class="text-15 font-semibold text-gray-700 p-4">
                                2.1 Dokumen Administrasi
                                <hr>
                            </h6>
                            <div class="container mx-auto">
                                <div class="lg:flex">
                                <div class="px-4">
                                    <div class="mb-8">
                                        <InputLabel value="Kesesuaian Kegiatan Pemanfaatan Ruang/Keterangan Rencana Kabupaten" />
                                            <label class="block mt-3">
                                                <span class="sr-only">Pilih File</span>
                                                <input ref="kode_a" type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                                            </label>    
                                        <InputError :message="form.errors.ref_kode_a" class="mt-2" />                     
                                    </div>
                                    <div class="mb-8">
                                        <InputLabel value="Memiliki dokumen lingkungan hidup" />
                                            <label class="block mt-3">
                                                <span class="sr-only">Pilih File</span>
                                                <input ref="kode_b" type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                                            </label>    
                                        <InputError :message="form.errors.ref_kode_b" class="mt-2" />                     
                                    </div>
                                    <div class="mb-8">
                                        <InputLabel value="Surat pernyataan bermeterai dari pemohon yang menyatakan bahwa bentuk tapak dalam gambar rencana tapak sudah sesuai dengan gambar pada buku sertifikat dan sesuai ukuran dilokasi saat ini" />
                                            <label class="block mt-3">
                                                <span class="sr-only">Pilih File</span>
                                                <input ref="kode_c" type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                                            </label>    
                                        <InputError :message="form.errors.ref_kode_c" class="mt-2" />                     
                                    </div>

                                    <div class="mb-8">
                                        <InputLabel value="Surat Pernyataan bermeterai yang menyatakan bahwa bangunan tidak berada dalam sempadan sungai / danau (disesuaikan lokasi)" />
                                            <label class="block mt-3">
                                                <span class="sr-only">Pilih File</span>
                                                <input ref="kode_d" type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                                            </label>    
                                        <InputError :message="form.errors.ref_kode_d" class="mt-2" />                     
                                    </div>

                                    <div class="mb-8">
                                        <InputLabel value="Surat Pernyataan bermeterai yang menyatakan bahwa bangunan tidak berada dalam sempadan jaringan irigasi (disesuaikan lokasi)" />
                                            <label class="block mt-3">
                                                <span class="sr-only">Pilih File</span>
                                                <input ref="kode_e" type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                                            </label>    
                                        <InputError :message="form.errors.ref_kode_e" class="mt-2" />                     
                                    </div>

                                    <div class="mb-8">
                                        <InputLabel value="Surat Pernyataan bermeterai yang menyatakan bahwa bangunan didirikan sesuai ketentuan Garis Sempadan Bangunan" />
                                            <label class="block mt-3">
                                                <span class="sr-only">Pilih File</span>
                                                <input ref="kode_f" type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                                            </label>    
                                        <InputError :message="form.errors.ref_kode_f" class="mt-2" />                     
                                    </div>

                                    <div class="mb-8">
                                        <InputLabel value="Surat Pernyataan Kesanggupan menyediakan sarana utilitas : Jaringan listrik, Jaringan air bersih, Jaringan air limbah dan air kotor dan prasarana dan sarana tempat sampah" />
                                            <label class="block mt-3">
                                                <span class="sr-only">Pilih File</span>
                                                <input ref="kode_g" type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                                            </label>    
                                        <InputError :message="form.errors.ref_kode_g" class="mt-2" />                     
                                    </div>

                                    <div class="mb-8">
                                        <InputLabel value="Surat Keterangan bebas genangan/banjir dari instansi yang berwenang " />
                                            <label class="block mt-3">
                                                <span class="sr-only">Pilih File</span>
                                                <input ref="kode_h" type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                                            </label>    
                                        <InputError :message="form.errors.ref_kode_h" class="mt-2" />                     
                                    </div>

                                    <div class="mb-8">
                                        <InputLabel value="Surat keanggotaan dari asosiasi / organisasi pembangunan perumahan atau pengembang" />
                                            <label class="block mt-3">
                                                <span class="sr-only">Pilih File</span>
                                                <input ref="kode_k" type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                                            </label>    
                                        <InputError :message="form.errors.ref_kode_k" class="mt-2" />                     
                                    </div>

                                    <div class="mb-8">
                                        <InputLabel value="Surat rekomendasi yang diterbitkan oleh asosiasi / organisasi pembangunan perumahan atau pengembang yang ada di Kabupaten Madiun" />
                                            <label class="block mt-3">
                                                <span class="sr-only">Pilih File</span>
                                                <input ref="kode_l" type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                                            </label>    
                                        <InputError :message="form.errors.ref_kode_l" class="mt-2" />                     
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
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div class="m-4">
                            <div class=" p-4">
                                <h6 class="text-15 font-semibold text-gray-700">
                                    2.2 Dokumen Administrasi
                                </h6>
                                <p>Menyediakan lahan pemakaman dilokasi perumahan paling sedikit 2% dari luas lahan perumahan</p>
                                <i class="font-semibold">jika tidak, pilih salah satu di bawah ini</i>
                                <hr>
                            </div>
                            <div class="container mx-auto">
                                <div class="lg:flex">
                                <div class="px-4">
                                    <div class="mb-8">
                                        <InputLabel value="Menyediakan tempat pemakaman pada lahan milik sendiri diluar lokasi perumahan paling sedikit 2% dari luas lahan perumahan" />
                                            <label class="block mt-3">
                                                <span class="sr-only">Pilih File</span>
                                                <input ref="kode_i" type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                                            </label>    
                                        <InputError :message="form.errors.ref_kode_i" class="mt-2" />                     
                                    </div>
                                    <div class="mb-8">
                                        <InputLabel value="Surat Pernyataan dari Kepala Desa/Lurah setempat yang menyatakan tidak keberatan digunakan untuk warga perumahan yang meninggal" />
                                            <label class="block mt-3">
                                                <span class="sr-only">Pilih File</span>
                                                <input ref="kode_j" type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                                            </label>    
                                        <InputError :message="form.errors.ref_kode_j" class="mt-2" />                     
                                    </div>
                                </div>   
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      

            <div class="pt-12 pb-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div class="m-4">
                            <div class=" p-4">
                                <h6 class="text-15 font-semibold text-gray-700">
                                    Data Perumahan
                                </h6>
                                <hr>
                            </div>
                            <div class="container mx-auto">
                                <div class="lg:flex">
                                    <div class="px-4">
                                        <div class="mb-4">
                                            <div class="mb-3">
                                                <label class="block font-medium text-gray-700 mb-2">Peruntukan Pembangunan Perumahan</label>
                                                <select v-model="mbrOrNon" class="w-full rounded border-gray-100 py-2.5 text-sm text-gray-500 focus:border focus:border-violet-500 focus:ring-0" >
                                                    <option value="MBR">MBR Luas Lahan 0.5ha sd 5.0ha </option>
                                                    <option value="NON MBR Jumlah Unit Kurang dari 100">NON MBR Jumlah Unit Kurang dari 100 </option>
                                                    <option value="NON MBR Jumlah Unit 100 sd 3000">NON MBR Jumlah Unit 100 sd 3000 </option>
                                                    <option value="NON MBR Jumlah Unit Lebih dari 3000">NON MBR Jumlah Unit Lebih dari 3000 </option>
                                                </select>
                                                <InputError :message="form.errors.ref_mbrOrNon" class="mt-2" />                                    

                                            </div>                    
                                        </div>
                                    </div>                                   
                                </div>
                            </div>
                        </div>

                        <div class="p-4 text-end">
                            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing" >
                                Submit
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    </AppLayout>
</template>
