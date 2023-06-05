<script setup>
defineProps({
    message: String,
});
</script>

<template>
    <div class="grid grid-cols-1">
        <div class="card">
            <div class="card-body pb-0">
                <h6 class="mb-1 text-15 text-gray-700">Upload Dokumen</h6>
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

                            <h5 class="text-gray-600 dark:text-gray-100">
                                {{}}
                            </h5>
                        </div>
                    </form>

                    <div class="text-center mt-4">
                        <button
                            type="button"
                            class="btn bg-violet-500 border-violet-500 hover:bg-violet-700 text-white focus:bg-violet-700 focus:ring focus:ring-violet-50"
                        >
                            Send Files
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
