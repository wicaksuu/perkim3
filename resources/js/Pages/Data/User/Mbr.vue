<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import AppLayout from "@/Layouts/AppLayout.vue";
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import Checkbox from '@/Components/Checkbox.vue';

const sertifikat_tanah = ref(null);
const akta_jual_beli = ref(null);
const bukti_pelunasan_sppt_pbb = ref(null);
const keberadaan_perumahan = ref(null);
const gambar_rencana_zip = ref(null);
const gambar_rencana_pdf = ref(null);

const form = useForm({
    luas_lahan: '',
    kode_unik: 'MBR',
    persyaratan_prasarana_saran_dan_utilitas_umum: false,
    wajib: false,
    persyaratan_penyajian_gambar_rencana_tapak: false,
    ref_sertifikat_tanah: null,
    ref_akta_jual_beli: null,
    ref_bukti_pelunasan_sppt_pbb: null,
    ref_keberadaan_perumahan: null,
    ref_gambar_rencana_zip: null,
    ref_gambar_rencana_pdf: null,
    luas_ruang_milik_jalan:'',
    tempat_ibadah:'',
    ruang_terbuka_hijau:'',
    makam: '',
    tgl_jadwaal_rencana_dimulainya_pembangunan:'',
    tanggal_jadwal_rencana_dimulainya_pemasaran:'',
    tanggal_jadwal_dimulainya_perjanjian_jual_beli:'',
    tanggal_jadwal_rencana_selesai_pembangunan_psu:'',
    tanggal_jadwal_rencana_penyerahan_psu:'',
    
});


// upload dokumen
const submit = () => {
    if (sertifikat_tanah.value) {
        form.ref_sertifikat_tanah = sertifikat_tanah.value.files[0];
    }
    if (akta_jual_beli.value) {
        form.ref_akta_jual_beli = akta_jual_beli.value.files[0];
    }
    if (bukti_pelunasan_sppt_pbb.value) {
        form.ref_bukti_pelunasan_sppt_pbb = bukti_pelunasan_sppt_pbb.value.files[0];
    }
    if (keberadaan_perumahan.value) {
        form.ref_keberadaan_perumahan = keberadaan_perumahan.value;
    }

    if (gambar_rencana_zip.value) {
        form.ref_gambar_rencana_zip = gambar_rencana_zip.value;
    }
    if (gambar_rencana_pdf.value) {
        form.ref_gambar_rencana_pdf = gambar_rencana_pdf.value;
    }

    form.post(route('kirim-submit'), {
        errorBag: 'submit',
        preserveScroll: true,
        onSuccess: () => clearPhotoFileInput(),
    });
};

const clearPhotoFileInput = () => {
    if (sertifikat_tanah.value?.value) {
        sertifikat_tanah.value.value = null;
    }
    if (akta_jual_beli.value?.value) {
        akta_jual_beli.value.value = null;
    }
    if (bukti_pelunasan_sppt_pbb.value?.value) {
        bukti_pelunasan_sppt_pbb.value.value = null;
    }
    if (keberadaan_perumahan.value?.value) {
        keberadaan_perumahan.value.value = null;
    }
    if (gambar_rencana_zip.value?.value) {
        gambar_rencana_zip.value.value = null;
    }
    if (gambar_rencana_pdf.value?.value) {
        gambar_rencana_pdf.value.value = null;
    }
};

</script>
<template>

    <AppLayout title="Pengajuan">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Pengajuan Peruntukan MBR
            </h2>

        </template>

        <form @submit.prevent="submit">
            <div class="py-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div class="m-4">
                            <h6 class="text-15 font-semibold text-gray-700 p-4">
                                Data Perumahan
                                <hr>
                            </h6>
                            <div class="container mx-auto">
                                <div class="lg:flex">
                                    <div class="lg:w-1/2 px-4">
                                        <div class="mb-4">
                                            <InputLabel for="luas_lahan" value="Luas Lahan (m2)" />
                                            <TextInput id="luas_lahan" ref="currentPasswordInput" v-model="form.luas_lahan" type="number" class="mt-1 block w-full" autocomplete="current-password" placeholder="100" />
                                            <InputError :message="form.errors.luas_lahan" class="mt-2" />                                    
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
                                Upload Dokumen Pendukung
                                <hr>
                            </h6>
                            <div class="container mx-auto">
                                <div class="lg:flex">
                                <div class="px-4">
                                    <div class="mb-8">
                                        <InputLabel value="Sertifikat Tanah" />
                                            <label class="block mt-3">
                                                <span class="sr-only">Choose File</span>
                                                <input ref="sertifikat_tanah" type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                                            </label>    
                                        <InputError :message="form.errors.ref_sertifikat_tanah" class="mt-2" />                     
                                    </div>
                                    <div class="mb-8">
                                        <InputLabel value="Akte jual beli/akte pengikatan perjanjian jual beli tanah/akte pelepasan hak atas tanah dari pemilik tanah kepada Badan Hukum" />
                                            <label class="block mt-3">
                                                <span class="sr-only">Choose File</span>
                                                <input ref="akta_jual_beli" type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                                            </label>    
                                        <InputError :message="form.errors.ref_akta_jual_beli" class="mt-2" />                     
                                    </div>
                                    <div class="mb-8">
                                        <InputLabel value="Bukti pelunasan SPPT-PBB tahun terakhir pada saat diajukan permohonan" />
                                            <label class="block mt-3">
                                                <span class="sr-only">Choose File</span>
                                                <input ref="bukti_pelunasan_sppt_pbb" type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                                            </label>    
                                        <InputError :message="form.errors.ref_bukti_pelunasan_sppt_pbb" class="mt-2" />                     
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
                                                <label class="block font-medium text-gray-700 mb-2">Keberadaan Perumahan</label>
                                                <select v-model="keberadaan_perumahan" class="w-full rounded border-gray-100 py-2.5 text-sm text-gray-500 focus:border focus:border-violet-500 focus:ring-0" >
                                                    <option value="Satu Lokasi">Satu Lokasi </option>
                                                </select>
                                                <InputError :message="form.errors.ref_keberadaan_perumahan" class="mt-2" />                                    

                                            </div>                    
                                        </div>
                                    </div>                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pb-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div class="m-4">
                            <h6 class="text-15 font-semibold text-gray-700 p-4">
                                PERSYARATAN PRASARANA, SARANA DAN UTILITAS UMUM (PSU)
                                <hr>
                            </h6>
                            <div class="container mx-auto">
                                <div class="lg:flex">
                                <div class="px-4">
                                    <div class="mb-8">                                   
                                        <div class="pr-4">
                                            <p>1. Jalan masuk / jalan utama / jalan pembagi dengan lebar ruang milik jalan (pagar ke pagar rumah/ROW) paling sedikit 7 meter dan lebar perkerasan jalan paling sedikit 3,5 meter</p>
                                            <p>2. Jalan pembantu dengan lebar ruang milik jalan (pagar ke pagar/ROW) paling sedikit 6 meter dan lebar perkerasan jalan paling sedikit 3,0 meter</p>
                                            <p>3. Jalan buntu dengan ketentuan panjang jalan maksimal 60 m (empat puluh meter) dan sudah termasuk ruang untuk berputar kendaraan roda 4 (empat)</p>
                                            <p>4. Setiap sudut persimpangan jalan harus dibuat lengkungan</p>
                                            <p>5. Menyediakan lahan untuk tempat ibadah seluas minimal 60 m2 jika jumlah rumah lebih atau sama dengan 50 unit </p>
                                            <p>6. Proporsi Prasarana, Sarana dan Utilitas Umum (PSU) terhadap luas lahan perumahan paling sedikit 30% (tiga puluh persen) untuk luas lahan lebih kecil atau sama dengan 25 hektar</p>
                                            <p>7. Proporsi Prasarana, Sarana dan Utilitas Umum (PSU) terhadap luas lahan perumahan paling sedikit 40% (empat puluh persen) untuk luas lahan lebih dari 25 hektar</p>
                                            <p>8. Lahan pemakaman pada lahan milik sendiri yang disediakan dilokasi perumahan dan/atau diluar lokasi perumahan diperhitungkan dalam proporsi PSU</p>
                                            <p>9. Panjang deret rumah disesuaikan terhadap antisipasi dampak kebakaran dan estetika kenyamanan penghuni atau upayakan panjang deret rumah maksimal 60 meter</p>
                                            <p>10. Terdapat ruang terbuka hijau antara lain seperti taman, tempat main anak, lapangan olahraga, atau jalur hijau</p>
                                            <label class="flex items-center pt-12">
                                                <Checkbox v-model:checked="form.persyaratan_prasarana_saran_dan_utilitas_umum" name="persyaratan_prasarana_saran_dan_utilitas_umum" />
                                                    <span class="ml-2 text-sm text-gray-600">Dengan ini saya setuju dengan semua persyaratan di atas</span>
                                            </label>
                                            <InputError :message="form.errors.persyaratan_prasarana_saran_dan_utilitas_umum" class="mt-2" />  
                                        </div>
                                    </div>

                                    
                                </div>   
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pb-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div class="m-4">
                            <h6 class="text-15 font-semibold text-gray-700 p-4">
                                DATA PRASARANA, SARANA DAN UTILITAS UMUM (PSU)
                                <hr>
                            </h6>
                            <div class="container mx-auto">
                                <div class="lg:flex">
                                    <div class="px-4">
                                        <div class="mb-4">
                                            <InputLabel for="luas_ruang_milik_jalan" value="Luas ruang milik jalan (pagar ke pagar/ROW) (m2)" />
                                            <TextInput id="luas_ruang_milik_jalan" ref="luas_ruang_milik_jalan" v-model="form.luas_ruang_milik_jalan" type="number" class="mt-1 block w-full" autocomplete="luas_ruang_milik_jalan" placeholder="100" />
                                            <InputError :message="form.errors.luas_ruang_milik_jalan" class="mt-2" />                                    
                                        </div>
                                        <div class="mb-4">
                                            <InputLabel for="tempat_ibadah" value="Tempat ibadah (m2)" />
                                            <TextInput id="tempat_ibadah" ref="currentPasswordInput" v-model="form.tempat_ibadah" type="number" class="mt-1 block w-full" autocomplete="current-password" placeholder="100" />
                                            <InputError :message="form.errors.tempat_ibadah" class="mt-2" />                                    
                                        </div>
                                        <div class="mb-4">
                                            <InputLabel for="ruang_terbuka_hijau" value="Ruang terbuka hijau (taman, tempat main, lapangan olahraga, dan/atau jalur hijau) (m2)" />
                                            <TextInput id="ruang_terbuka_hijau" ref="currentPasswordInput" v-model="form.ruang_terbuka_hijau" type="number" class="mt-1 block w-full" autocomplete="current-password" placeholder="100" />
                                            <InputError :message="form.errors.ruang_terbuka_hijau" class="mt-2" />                                    
                                        </div>
                                        <div class="mb-4">
                                            <InputLabel for="makam" value="Makam (lahan pemakaman pada lahan perumahan dan/atau milik sendiri diluar lokasi perumahan) (m2)" />
                                            <TextInput id="makam" ref="currentPasswordInput" v-model="form.makam" type="number" class="mt-1 block w-full" autocomplete="current-password" placeholder="100" />
                                            <InputError :message="form.errors.makam" class="mt-2" />                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pb-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div class="m-4">
                            <h6 class="text-15 font-semibold text-gray-700 p-4">
                                PERSYARATAN PENYAJIAN GAMBAR RENCANA TAPAK / SITE PLAN
                                <hr>
                            </h6>
                            <div class="container mx-auto">
                                <div class="lg:flex">
                                <div class="px-4">
                                    <div class="mb-8">                                   
                                        <div class="pr-4">
                                            <p>1. Skala gambar antara 1 : 1000 sampai 1 : 200</p>
                                            <p>2. batas bingkai gambar mengikuti margin sebagai berikut : 2 cm inside dari garis sisi kiri luar dan 1 cm inside dari garis sisi atas, bawah dan kanan</p>
                                            <p>3. Digambar dalam format DWG (AutoCAD-2007) dan dikompres dalam format zip</p>
                                            <p>4. Bentuk tapak dalam gambar rencana tapak sudah sesuai dengan gambar pada buku sertifikat dan sesuai ukuran dilokasi saat ini</p>
                                            <p>5. digambar dan direncana oleh tenaga ahli yang memiliki sertifikat keahlian </p>
                                            <p>6. Contoh Format Kop Gambar Rencana Tapak <a class="hover:text-blue-700 text-blue-500" href="http://">Download Contoh</a></p>
                                            <label class="flex items-center pt-12">
                                                <Checkbox v-model:checked="form.persyaratan_penyajian_gambar_rencana_tapak" name="persyaratan_penyajian_gambar_rencana_tapak" />
                                                    <span class="ml-2 text-sm text-gray-600">Dengan ini saya setuju dengan semua persyaratan di atas</span>
                                            </label>
                                            <InputError :message="form.errors.persyaratan_penyajian_gambar_rencana_tapak" class="mt-2" />  
                                        </div>
                                    </div>

                                    
                                </div>   
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pb-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div class="m-4">
                            <h6 class="text-15 font-semibold text-gray-700 p-4">
                                INFORMASI LAIN YANG HARUS DIISI SEBAGAI BENTUK PENGAWASAN (MONEV) PEMBANGUNAN, PENGENDALIAN PSU, DAN PENGENDALIAN JUAL BELI
                                <hr>
                            </h6>
                            <div class="container mx-auto">
                                <div class="lg:flex">
                                    <div class="lg:w-1/2 px-4">
                                        <div class="mb-4">
                                            <InputLabel for="tgl_jadwaal_rencana_dimulainya_pembangunan" value="Tanggal jadwal rencana dimulainya pembangunan" />
                                            <TextInput  id="tgl_jadwaal_rencana_dimulainya_pembangunan" ref="tgl_jadwaal_rencana_dimulainya_pembangunan" v-model="form.tgl_jadwaal_rencana_dimulainya_pembangunan" type="date" class="mt-1 block w-full" autocomplete="tgl_jadwaal_rencana_dimulainya_pembangunan" placeholder="100" />
                                            <InputError :message="form.errors.tgl_jadwaal_rencana_dimulainya_pembangunan" class="mt-2" />                                    
                                        </div>
                                        <div class="mb-4">
                                            <InputLabel for="tanggal_jadwal_rencana_dimulainya_pemasaran" value="Tanggal jadwal rencana dimulainya pemasaran" />
                                            <TextInput id="tanggal_jadwal_rencana_dimulainya_pemasaran" ref="currentPasswordInput" v-model="form.tanggal_jadwal_rencana_dimulainya_pemasaran" type="date" class="mt-1 block w-full" autocomplete="current-password" placeholder="100" />
                                            <InputError :message="form.errors.tanggal_jadwal_rencana_dimulainya_pemasaran" class="mt-2" />                                    
                                        </div>
                                        <div class="mb-4">
                                            <InputLabel for="tanggal_jadwal_dimulainya_perjanjian_jual_beli" value="Tanggal jadwal rencana dimulainya Perjanjian Pendahuluan Jual Beli (PPJB)" />
                                            <TextInput id="tanggal_jadwal_dimulainya_perjanjian_jual_beli" ref="currentPasswordInput" v-model="form.tanggal_jadwal_dimulainya_perjanjian_jual_beli" type="date" class="mt-1 block w-full" autocomplete="current-password" placeholder="100" />
                                            <InputError :message="form.errors.tanggal_jadwal_dimulainya_perjanjian_jual_beli" class="mt-2" />                                    
                                        </div>
                                    </div>
                                    
                                    <div class="lg:w-1/2 px-4">    
                                        <div class="mb-4">
                                            <InputLabel for="tanggal_jadwal_rencana_selesai_pembangunan_psu" value="Tanggal jadwal rencana selesainya pembangunan PSU" />
                                            <TextInput id="tanggal_jadwal_rencana_selesai_pembangunan_psu" ref="currentPasswordInput" v-model="form.tanggal_jadwal_rencana_selesai_pembangunan_psu" type="date" class="mt-1 block w-full" autocomplete="current-password" placeholder="100" />
                                            <InputError :message="form.errors.tanggal_jadwal_rencana_selesai_pembangunan_psu" class="mt-2" />                                    
                                        </div>
                                        <div class="mb-4">
                                            <InputLabel for="tanggal_jadwal_rencana_penyerahan_psu" value="Tanggal jadwal rencana penyerahan PSU ( 1 tahun setelah selesai pembangunan)" />
                                            <TextInput id="tanggal_jadwal_rencana_penyerahan_psu" ref="currentPasswordInput" v-model="form.tanggal_jadwal_rencana_penyerahan_psu" type="date" class="mt-1 block w-full" autocomplete="current-password" placeholder="100" />
                                            <InputError :message="form.errors.tanggal_jadwal_rencana_penyerahan_psu" class="mt-2" />                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             <div class="pb-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div class="m-4">
                            <h6 class="text-15 font-semibold text-gray-700 p-4">
                                Upload Gambar
                                <hr>
                            </h6>
                            <div class="container mx-auto">
                                <div class="lg:flex">
                                <div class="px-4">
                                    <div class="mb-8">
                                        <InputLabel value="PENGAJUAN GAMBAR RENCANA TAPAK / SITE PLAN (FORMAT DWG AutoCAD-2007) dan dikompres dalam format zip )" />
                                            <label class="block mt-3">
                                                <span class="sr-only">Choose File</span>
                                                <input id="gambar_rencana_zip" ref="gambar_rencana_zip" type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                                            </label>    
                                        <InputError :message="form.errors.ref_gambar_rencana_zip" class="mt-2" />                     
                                    </div>
                                    <div class="mb-8">
                                        <InputLabel value="PENGAJUAN GAMBAR RENCANA TAPAK / SITE PLAN (FORMAT PDF) YANG SUDAH TER-TANDATANGANI DAN BERSTEMPEL" />
                                            <label class="block mt-3">
                                                <span class="sr-only">Choose File</span>
                                                <input id="gambar_rencana_pdf" ref="gambar_rencana_pdf" type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                                            </label>    
                                        <InputError :message="form.errors.ref_gambar_rencana_pdf" class="mt-2" />                     
                                    </div>                                    
                                </div>   
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             <div class="pb-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div class="m-4">
                            <h6 class="text-15 font-semibold text-gray-700 p-4">
                                Validasi dan Persetujuan
                                <hr>
                            </h6>
                            <div class="container mx-auto">
                                <div class="lg:flex">
                                    <div class="px-4">
                                        <div class="mb-8">
                                                <label class="flex items-center pt-8">
                                                    <Checkbox v-model:checked="form.wajib" name="wajib" />
                                                        <span class="ml-2 text-sm font-semibold text-gray-600">
                                                            Demikian Isian Permohonan ini saya buat dengan sebenarnya dan penuh rasa tanggung jawab. Jika dikemudian hari ditemui bahwa data/dokumen yang saya sampaikan tidak benar dan ada pemalsuan, maka saya bersedia dikenakan sanksi berupa sanksi administratif, sanksi Daftar Hitam Hitam, gugatan secara perdata, dan/atau pelaporan secara pidana kepada pihak berwenang sesuai dengan ketentuan peraturan perundang-undangan.
                                                        </span>
                                                </label>
                                                <InputError :message="form.errors.wajib" class="mt-2" />        
                                        </div>                                 
                                    </div>                                      
                                </div>


                                <div class="p-4 text-end">
                                    <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing" >
                                        Kirim
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    </AppLayout>
</template>
