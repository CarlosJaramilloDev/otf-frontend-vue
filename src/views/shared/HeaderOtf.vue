<template>
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="logo">
        <h1>
          <router-link :to="{ name: 'draft-user-list' }"
            >OTF Backend Test</router-link
          >
        </h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <router-link class="nav-link" :to="{ name: 'draft-user-create' }">
              New user
            </router-link>
          </li>
          <li>
            <router-link class="nav-link" :to="{ name: 'draft-user-list' }">
              My users (Draft)
            </router-link>
          </li>
          <li>
            <router-link class="getstarted nav-link" :to="{ name: 'published-user-list' }">
              Synchronized table
            </router-link>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
</template>