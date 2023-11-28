<script setup lang="ts">
import { Address } from '../../models/Address';
    
    const props = defineProps<{
        address: Address
    }>()

</script>

<template>
    <div className="card-body p-5 text-gray-500 text-sm">
        <div class="flex flex-row align-bottom">
            <p class="text-black font-semibold">{{ address.name }}</p>
            <input type="radio" name="radio-2" className="relative radio radio-secondary radio-xs bg-white border-white checked:border-secondary" />
        </div>
                    
        <div class="mt-2">
            <p>{{ address.location }}</p>
        </div>
    </div>
</template>
