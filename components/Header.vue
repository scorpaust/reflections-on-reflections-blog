<template>
  <header class="header">
    <div class="content">
      <NuxtLink to="/" class="brand">
        <h1>Reflections on Reflections Blog</h1>
      </NuxtLink>
      <nav class="navigation">
        <ul>
          <!-- Uncomment the below line if you have a blog page -->
          <!-- <li>
            <NuxtLink to="/" class="nav-link">Blog</NuxtLink>
          </li> -->
          <li>
            <NuxtLink to="/about-evanora" class="nav-link">About Me</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: #2c3e50;
  color: #fff;
  padding: 1rem 0;
  font-size: 0.9rem;
  width: 100%;
}

.header .content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.header .brand h1 {
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
}

.header .navigation ul {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.header .navigation ul li {
  padding: 0 1rem;
}

.header .navigation .nav-link {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.header .navigation .nav-link:hover {
  color: #1abc9c;
}

@media (max-width: 768px) {
  .header .content {
    flex-direction: column;
  }

  .header .brand {
    margin-bottom: 1rem;
  }

  .header .navigation ul {
    flex-direction: column;
    align-items: center;
  }

  .header .navigation ul li {
    padding: 0.5rem 0;
  }
}
</style>
