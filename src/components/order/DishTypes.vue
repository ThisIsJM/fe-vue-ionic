<script setup lang="ts">
    import { computed, ref } from "vue";
    import { dishTypeSelections } from "../../utils/constants"

    const selectedType = ref<string>('All')

    const isSelected = (type: string) => computed(() => type != selectedType.value).value 
    const onTypeSelect = (type: string) => selectedType.value = type 

</script>
<template>
    <div class="flex flex-row gap-x-2 overflow-scroll">
        <button 
            v-for="dishType in dishTypeSelections"
            class="btn btn-primary rounded-2xl max-w-sm"
            :class="{'btn bg-gray-200 border-gray-200 text-gray-400': isSelected(dishType)}"
            @click="() => {onTypeSelect(dishType)}" 
        >
            {{dishType}}
        </button>
    </div>
</template>