<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";
const { t } = useI18n();
const { locale } = useI18n({ useScope: "global" });
const srcLocale = ref(locale);
const localeOptions = [
  { value: "es-MX", label: "Español" },
  { value: "de", label: "English" },
];
</script>
<template>
  <q-select
    v-model="srcLocale"
    :options="localeOptions"
    :label="t('message.language_label')"
    label-color="white"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 80px"
  />
</template>
