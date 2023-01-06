<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<template>
  <div class="home"><HelloWorld :msg="t('message.welcome')" /></div>
</template>
