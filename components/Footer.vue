<template>
  <footer class="footer">
    <div class="content">
      <div class="left">
        <p>&copy; {{ new Date().getFullYear() + " " + currentFooterText }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// If you have any specific logic for your footer, you can add it here.

const { locale } = useI18n()

const currentFooterText = computed(() => {
  if (locale.value)
  {
    if (locale.value == 'en')
    {
      return "Evanora Mirrordale's Reflective Realms"
    }
    else 
    {
      return "Reinos Reflexivos de Evanora Mirrordale"
    }
  }
  else 
  {
    return "Evanora Mirrordale's Reflective Realms"
  }
})


</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: #fff;
  padding: 2rem 0;
  font-size: 0.9rem;
  bottom: 0;
  width: 100%;
}

.footer .content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer .content .left,
.footer .content .right {
  display: flex;
}

.footer .content .right a {
  color: #fff;
  padding-left: 2rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer .content .right a:hover {
  color: #1abc9c;
}

@media (max-width: 768px) {
  .footer .content {
    flex-direction: column;
  }

  .footer .content .left,
  .footer .content .right {
    flex-direction: column;
    align-items: center;
  }

  .footer .content .right a {
    padding-left: 0;
    padding-top: 1rem;
  }
}
</style>