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
const bentukBadanUsaha = ref(null);
const form = useForm({
    _method: 'PUT',
    query: 'datapemohon',
    ref_bentukBadanUsaha: props.user.ref_bentukBadanUsaha,
    nama_pemohon: props.user.nama_pemohon,
    tempat_lahir_pemohon: props.user.tempat_lahir_pemohon,
    tanggal_lahirpemohon: props.user.tanggal_lahirpemohon,
    jabatan_pemohon: props.user.jabatan_pemohon,
    npwp_pemohon: props.user.npwp_pemohon,
    nik_pemohon: props.user.nik_pemohon,
    nomor_telepon_pemohon: props.user.nomor_telepon_pemohon,
    nomor_whatsapp_pemohon: props.user.nomor_whatsapp_pemohon,
    alamat_pemohon: props.user.alamat_pemohon,
});
const updateProfileInformation = () => {
    if (bentukBadanUsaha.value) {
        form.ref_bentukBadanUsaha = bentukBadanUsaha.value;
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
                Data Pemohon
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
                                Bentuk Usaha / Badan Usaha
                            </h6>
                        </div>
                        <div class="card-body">
                            <div class="grid grid-cols-12 gap-5">
                                <div class="col-span-12 lg:col-span-6">
                                    <div class="mb-4">
                                            <div v-if="props.user.ref_bentukBadanUsaha === null">
                                            <select id="bentukBadanUsaha" v-model="bentukBadanUsaha" class="w-full rounded border-gray-100 py-2.5 text-sm text-gray-500 focus:border focus:border-violet-500 focus:ring-0" >
                                                <option value="Badan Hukum">Badan Hukum </option>
                                            </select>
                                            <InputError :message="form.errors.ref_bentukBadanUsaha" class="mt-2" />
                                            </div>
                                            <div class="mb-1 text-15 text-gray-700" v-else>
                                               {{ props.user.ref_bentukBadanUsaha }}
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
                                            <InputLabel for="nama_pemohon" value="Nama Pemohon" />
                                            <TextInput  id="nama_pemohon" v-model="form.nama_pemohon" type="text" class="mt-1 block w-full" placeholder="Wic***" />
                                            <InputError :message="form.errors.nama_pemohon" class="mt-2" />                                    
                                        </div>

                                        <div class="mb-4">
                                            <InputLabel for="tempat_lahir_pemohon" value="Tempat Lahir" />
                                            <TextInput id="tempat_lahir_pemohon" v-model="form.tempat_lahir_pemohon" type="text" class="mt-1 block w-full" placeholder="Mad***" />
                                            <InputError :message="form.errors.tempat_lahir_pemohon" class="mt-2" />                                    
                                        </div>

                                    <div class="mb-4">
                                            <InputLabel for="tanggal_lahirpemohon" value="Tanggal Lahir" />
                                            <TextInput id="tanggal_lahirpemohon" v-model="form.tanggal_lahirpemohon" type="date" class="mt-1 block w-full" placeholder="Mad***" />
                                            <InputError :message="form.errors.tanggal_lahirpemohon" class="mt-2" />                                
                                    </div>

                                    <div class="mb-4">
                                            <InputLabel for="jabatan_pemohon" value="Jabatan Pemohon" />
                                            <TextInput id="jabatan_pemohon" v-model="form.jabatan_pemohon" type="text" class="mt-1 block w-full" placeholder="Direk***" />
                                            <InputError :message="form.errors.jabatan_pemohon" class="mt-2" />   
                                    </div>

                                    <div class="mb-4">
                                            <InputLabel for="npwp_pemohon" value="NPWP Pemohon" />
                                            <TextInput id="npwp_pemohon" v-model="form.npwp_pemohon" type="text" class="mt-1 block w-full" placeholder="35***" />
                                            <InputError :message="form.errors.npwp_pemohon" class="mt-2" />   
                                    </div>
                                </div>
                                <div class="col-span-12 lg:col-span-6">
                                    <div class="mb-4">
                                            <InputLabel for="nik_pemohon" value="Nomor Induk Kependudukan" />
                                            <TextInput id="nik_pemohon" v-model="form.nik_pemohon" type="text" class="mt-1 block w-full" placeholder="35***" />
                                            <InputError :message="form.errors.nik_pemohon" class="mt-2" />   
                                    </div>
                                    <div class="mb-4">
                                            <InputLabel for="nomor_telepon_pemohon" value="Nomor Telepon" />
                                            <TextInput id="nomor_telepon_pemohon" v-model="form.nomor_telepon_pemohon" type="text" class="mt-1 block w-full" placeholder="035***" />
                                            <InputError :message="form.errors.nomor_telepon_pemohon" class="mt-2" />   
                                    </div>
                                    <div class="mb-4">
                                            <InputLabel for="nomor_whatsapp_pemohon" value="Nomor Whatsapp" />
                                            <TextInput id="nomor_whatsapp_pemohon" v-model="form.nomor_whatsapp_pemohon" type="text" class="mt-1 block w-full" placeholder="035***" />
                                            <InputError :message="form.errors.nomor_whatsapp_pemohon" class="mt-2" />  
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
                                            <TextInput id="alamat_pemohon" v-model="form.alamat_pemohon" type="text" class="mt-1 block w-full" placeholder="Jl.***" />
                                            <InputError :message="form.errors.alamat_pemohon" class="mt-2" />  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                        <div v-if="props.user.ref_bentukBadanUsaha === null" class="p-4 text-end">

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
    </form>
    </AppLayout>
</template>
