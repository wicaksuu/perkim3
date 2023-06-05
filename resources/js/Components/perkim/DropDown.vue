<template>
  <div class="relative">
    <button
      class="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      @click="toggleDropdown"
    >
      {{ selectedOption }}
    </button>
    <div v-show="isDropdownOpen" class="absolute bg-white mt-2 py-2 w-48 rounded shadow-xl">
      <ul>
        <li v-for="(option, index) in options" :key="index">
          <button
            class="w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white"
            @click="selectOption(option)"
          >
            {{ option }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      selectedOption: 'Pilih',
      options: ['Buka', 'Edit'],
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isDropdownOpen = false;
    },
  },
};
</script>
