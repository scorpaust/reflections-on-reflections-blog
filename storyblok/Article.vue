<template>
    <div v-editable="blok" class="mx-8">
      <img
        :src="blok.image.filename + '/m/1600x0'"
        :alt="blok.image.alt"
        class="mx-auto w-3/4 object-cover"
      />
      <div class="container mx-auto mb-12">
        <h1 class="text-6xl text-gray-800 font-bold mt-12 mb-4">{{ blok.title }}</h1>
        <h2 class="text-2xl text-gray-500 font-bold mb-4">
          {{ blok.description }}
        </h2>
        <div class="text-gray-600 mb-3">{{ localeByAuthor }} <b>{{ blok.author }}</b></div>
        <div v-html="resolvedRichText"></div>
      </div>
    </div>
</template>

<script setup>

  const { locale } = useI18n()

  const props = defineProps({ blok: Object })

  const resolvedRichText = computed(() => props.blok.content ?? renderRichText(props.blok.content));
  
  const localeByAuthor = computed(() => {
    if (locale.value) 
    {
      if (locale.value === 'en')
      {
        return "Written by: "
      }
      else 
      {
        return "Por: "
      }
    }
  })

</script>