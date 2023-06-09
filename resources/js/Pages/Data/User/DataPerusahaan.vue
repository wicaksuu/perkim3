<script setup>
import { ref } from 'vue';
import AppLayout from "@/Layouts/AppLayout.vue";
import { useForm } from '@inertiajs/vue3';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import ActionMessage from '@/Components/ActionMessage.vue';

const props = defineProps({
    user: Object,
});

const status_badan_usaha = ref(null);
const form = useForm({
    _method: 'PUT',
    dataperusahaan: 'dataperusahaan',
    ref_status_badan_usaha: props.user.ref_status_badan_usaha,
    nama_badan_usaha: props.user.nama_badan_usaha,
    titik_koordinat: props.user.titik_koordinat,
    alamat_badan_usaha: props.user.alamat_badan_usaha,
    nama_pimpinan: props.user.nama_pimpinan,
    npwp_badan_usaha: props.user.npwp_badan_usaha,
    nomor_telepon_badan_usaha: props.user.nomor_telepon_badan_usaha,
    nomor_whatsapp_usaha: props.user.nomor_whatsapp_usaha,
    nik_pimpinan: props.user.nik_pimpinan,
    nomor_akta_pendirian: props.user.nomor_akta_pendirian,
});
const updateProfileInformation = () => {
    if (status_badan_usaha.value) {
        form.ref_status_badan_usaha = status_badan_usaha.value;
    }
    form.post(route('user-profile-information.update'), {
        errorBag: 'updateProfileInformation',
        preserveScroll: true,
        onSuccess: () => console.log('Data updated successfully'),
    });
};

</script>
<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Data Badan Usaha
            </h2>
        </template>

    <form @submit.prevent="updateProfileInformation">
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
                                            <InputLabel for="nama_badan_usaha" value="Nama Badan Usaha" />
                                            <TextInput  id="nama_badan_usaha" v-model="form.nama_badan_usaha" type="text" class="mt-1 block w-full" placeholder="Wic***" />
                                            <InputError :message="form.errors.nama_badan_usaha" class="mt-2" />    

                                    </div>
                                </div>
                                <div class="col-span-12 lg:col-span-6">
                                    <div class="mb-4">
                                            <InputLabel for="status_badan_usaha" value="Status Badan Usaha" />
                                            <div v-if="props.user.ref_status_badan_usaha === null">
                                                <select id="status_badan_usaha" v-model="status_badan_usaha" class=" mt-1 w-full rounded border-gray-100 py-2.5 text-sm text-gray-500 focus:border focus:border-violet-500 focus:ring-0">                                               
                                                    <option value="Pusat">Pusat </option>
                                                    <option value="Cabang">Cabang </option>
                                                </select>
                                                <InputError :message="form.errors.ref_status_badan_usaha" class="mt-2" />
                                            </div>
                                            <div class="mb-1 text-15 text-gray-700" v-else>
                                            {{ props.user.ref_status_badan_usaha }}
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
                                            <TextInput  id="titik_koordinat" v-model="form.titik_koordinat" type="text" class="mt-1 block w-full" placeholder="-7.5374307,111.6302997" />
                                            <InputError :message="form.errors.titik_koordinat" class="mt-2" />  
                                    </div>
                                </div>
                                <div class="col-span-12 lg:col-span-6">
                                    <div class="mb-4">
                                            <InputLabel for="alamat_badan_usaha" value="Alamat Badan Usaha" />
                                            <TextInput  id="alamat_badan_usaha" v-model="form.alamat_badan_usaha" type="text" class="mt-1 block w-full" placeholder="jl.***" />
                                            <InputError :message="form.errors.alamat_badan_usaha" class="mt-2" />  
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
                                            <TextInput  id="nama_pimpinan" v-model="form.nama_pimpinan" type="text" class="mt-1 block w-full" placeholder="Wicak***" />
                                            <InputError :message="form.errors.nama_pimpinan" class="mt-2" />  
                                    </div>

                                    <div class="mb-4">
                                            <InputLabel for="npwp_badan_usaha" value="NPWP Badan Usaha" />
                                            <TextInput  id="npwp_badan_usaha" v-model="form.npwp_badan_usaha" type="text" class="mt-1 block w-full" placeholder="35***" />
                                            <InputError :message="form.errors.npwp_badan_usaha" class="mt-2" />  
                                    </div>

                                    <div class="mb-4">
                                            <InputLabel for="nomor_telepon_badan_usaha" value="Nomor Telepon Badan Usaha" />
                                            <TextInput  id="nomor_telepon_badan_usaha" v-model="form.nomor_telepon_badan_usaha" type="text" class="mt-1 block w-full" placeholder="035***" />
                                            <InputError :message="form.errors.nomor_telepon_badan_usaha" class="mt-2" />  
                                    </div>
                                    <div class="mb-4">
                                            <InputLabel for="nomor_whatsapp_usaha" value="Nomor Whatsapp Badan Usaha" />
                                            <TextInput  id="nomor_whatsapp_usaha" v-model="form.nomor_whatsapp_usaha" type="text" class="mt-1 block w-full" placeholder="085***" />
                                            <InputError :message="form.errors.nomor_whatsapp_usaha" class="mt-2" /> 
                                    </div>
                                </div>
                                <div class="col-span-12 lg:col-span-6">
                                    <div class="mb-4">
                                            <InputLabel for="nik_pimpinan" value="Nomor Induk Kependudukan Pimpinan" />
                                            <TextInput  id="nik_pimpinan" v-model="form.nik_pimpinan" type="text" class="mt-1 block w-full" placeholder="351***" />
                                            <InputError :message="form.errors.nik_pimpinan" class="mt-2" /> 
                                    </div>
                                    <div class="mb-4">
                                            <InputLabel for="nomor_akta_pendirian" value="Nomor Akta Pendirian /Nomor Surat Keputusan" />
                                            <TextInput  id="nomor_akta_pendirian" v-model="form.nomor_akta_pendirian" type="text" class="mt-1 block w-full" placeholder="351***" />
                                            <InputError :message="form.errors.nomor_akta_pendirian" class="mt-2" /> 
                                    </div>
                                </div>

                            </div>

                                <div v-if="props.user.ref_status_badan_usaha === null" class="p-4 text-end">

                                    <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                                        Saved.
                                    </ActionMessage>
                                    <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing" >
                                        Simpan
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
