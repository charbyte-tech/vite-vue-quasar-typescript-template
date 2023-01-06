<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useQuasar } from "quasar";
import { ref } from "vue";
const { t } = useI18n();
const $q = useQuasar();
const isActive = ref($q.dark.isActive);
const changed = (value: boolean) => {
  $q.dark.set(value);
};
</script>
<template>
  <q-toggle
    color="white"
    icon="star"
    unchecked-icon="light_mode"
    icon-color="grey-5"
    v-model="isActive"
    :label="t('message.dark_mode_label', isActive ? 0 : 1)"
    @update:model-value="changed"
  />
</template>
