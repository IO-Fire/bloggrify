<template>
    <div>
        <component
            :is="imgComponent"
            v-if="enableAttrs"
            :src="refinedSrc"
            :alt="alt"
            :width="width"
            :height="height"
            v-bind="$attrs"
        />
        <component
            :is="imgComponent"
            v-else
            :src="refinedSrc"
            :alt="alt"
            :width="width"
            :height="height"
        />
        <div v-if="alt" class="text-sm  text-center text-gray-600 dark:text-gray-300 mt-1">
            {{ alt }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo'
import { useRuntimeConfig, computed, resolveComponent } from '#imports'

const imgComponent = useRuntimeConfig().public.mdc.useNuxtImage ? resolveComponent('NuxtImg') : 'img'

const props = defineProps({
    src: {
        type: String,
        default: ''
    },
    alt: {
        type: String,
        default: ''
    },
    width: {
        type: [String, Number],
        default: undefined
    },
    height: {
        type: [String, Number],
        default: undefined
    },
    enableAttrs: {
        type: Boolean,
        default: false,
        required: false
    }
})

const refinedSrc = computed(() => {
    if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
        const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL))
        if (_base !== '/' && !props.src.startsWith(_base)) {
            return joinURL(_base, props.src)
        }
    }
    return props.src
})
</script>
