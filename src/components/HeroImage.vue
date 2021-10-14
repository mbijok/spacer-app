<template>
  <div class="heroimage"></div>
</template>

<script setup></script>
<style>
.heroimage {
  position: fixed;
  z-index: -1;
  inset: 0;
  background-image: url('/src/assets/heroimage.jpg');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
}
.heroimage::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.33);
}
</style>
