<template>
    <NuxtLink
      :to="linkPath"   
      v-editable="article"
      class="w-full h-full border rounded-[5px] text-left overflow-hidden"
    >
      <img
        :src="article?.image.filename + '/m/600x0'"
        :alt="article?.image.alt"
        class="w-full h-48 xl:h-72 object-cover pointer-events-none"
      />
      <div class="p-4">
        <h2 class="e-2xle-[#1d243d] font-bold mb-1">
          {{ article?.title }}
        </h2>
        <div class="text-gray-600 mb-3">{{ article?.author }}</div>
        <div class="line-clamp-4">
          {{ article?.description }}
        </div>
      </div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({ article: Object, slug: String })

const article = computed(() => props.article ?? props.article)

const { locale } = useI18n()

const localePath = useLocalePath()

const localeRoute = useLocaleRoute()

const linkPath = computed(() => {
  const route = localeRoute(slug, locale.value)
  return route != null ? route.path : '/'
})
</script>