<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\UpdatesUserProfileInformation;

class UpdateUserProfileInformation implements UpdatesUserProfileInformation
{
    /**
     * Validate and update the given user's profile information.
     *
     * @param  array<string, string>  $input
     */
    public function update(User $user, array $input): void
    {
        if (isset($input['query'])) {
            unset($input['query']);
            unset($input['_method']);
            Validator::make($input, [
                'nama_pemohon' => ['required', 'string', 'max:255'],
                'tempat_lahir_pemohon' => ['required', 'string', 'max:255'],
                'tanggal_lahirpemohon' => ['required', 'string', 'max:255'],
                'jabatan_pemohon' => ['required', 'string', 'max:255'],
                'npwp_pemohon' => ['required', 'string', 'max:255'],
                'nik_pemohon' => ['required', 'string', 'max:255'],
                'nomor_telepon_pemohon' => ['required', 'string', 'max:255'],
                'nomor_whatsapp_pemohon' => ['required', 'string', 'max:255'],
                'alamat_pemohon' => ['required', 'string'],
                'ref_bentukBadanUsaha' => ['required', 'string', 'max:255'],

            ])->validateWithBag('updateProfileInformation');
            $user->forceFill($input)->save();
            return;
        }
        if (isset($input['dataperusahaan'])) {
            unset($input['dataperusahaan']);
            unset($input['_method']);
            Validator::make($input, [
                'nama_badan_usaha' => ['required', 'string', 'max:255'],
                'titik_koordinat' => ['required', 'string', 'max:255'],
                'alamat_badan_usaha' => ['required', 'string', 'max:255'],
                'nama_pimpinan' => ['required', 'string', 'max:255'],
                'npwp_badan_usaha' => ['required', 'string', 'max:255'],
                'nomor_telepon_badan_usaha' => ['required', 'string', 'max:255'],
                'nomor_whatsapp_usaha' => ['required', 'string', 'max:255'],
                'nik_pimpinan' => ['required', 'string', 'max:255'],
                'nomor_akta_pendirian' => ['required', 'string'],
                'ref_status_badan_usaha' => ['required', 'string', 'max:255'],

            ])->validateWithBag('updateProfileInformation');
            $user->forceFill($input)->save();
            return;
        }


        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'photo' => ['nullable', 'mimes:jpg,jpeg,png', 'max:1024'],
        ])->validateWithBag('updateProfileInformation');

        if (isset($input['photo'])) {
            $user->updateProfilePhoto($input['photo']);
        }

        if ($input['email'] !== $user->email &&
            $user instanceof MustVerifyEmail) {
            $this->updateVerifiedUser($user, $input);
        } else {
            $user->forceFill([
                'name' => $input['name'],
                'email' => $input['email'],
            ])->save();
        }
    }

    /**
     * Update the given verified user's profile information.
     *
     * @param  array<string, string>  $input
     */
    protected function updateVerifiedUser(User $user, array $input): void
    {
        $user->forceFill([
            'name' => $input['name'],
            'email' => $input['email'],
            'email_verified_at' => null,
        ])->save();

        $user->sendEmailVerificationNotification();
    }
}
