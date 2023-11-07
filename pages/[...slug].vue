<script setup>
const { slug } = useRoute().params

const { locale } = useI18n() 

const url = slug && slug.length > 0 &&  slug !== '/' ? slug.join('/') : 'home'

const story = await useAsyncStoryblok(
  url.replace(/\/$/, ''),
  { version: useRoute().query._storyblok ? 'draft': 'published', language: locale.value }
)

console.log(url)
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>