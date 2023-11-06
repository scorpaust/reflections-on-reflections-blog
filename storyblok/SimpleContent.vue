<script setup>
  const props = defineProps({ blok: Object })

  const resolvedRichText = computed(() => props.blok.content ?? renderRichText(props.blok.content));
  
</script>

<template>
  <div class="about-container" v-editable="blok">
    <h1 class="title">{{ blok.title }}</h1>
    <div class="bio">
      <img :src="blok.image.filename" alt="Evanora Mirrordale" class="bio-image">
      <div v-html="resolvedRichText"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  // Your script here
}
</script>

<style scoped>
.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
}

.bio {
  align-items: flex-start;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #34495e;
  text-align: left;
}

.bio-image {
  width: 100%;
    float: none;
    margin: 0 auto 1rem;
}

@media (max-width: 600px) {
  .about-container {
    padding: 1rem;
  }

  .title {
    font-size: 2rem;
  }

  .bio {
    font-size: 1rem;
  }

  .bio-image {
    max-width: 100%;
    float: none;
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>