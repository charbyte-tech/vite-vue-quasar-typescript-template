<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const miniState = ref(true);
const drawer = ref(false);
const { t } = useI18n();
const drawerClick = (e: { stopPropagation: () => void }) => {
  // if in "mini" state and user
  // click on drawer, we switch it to "normal" mode
  if (miniState.value) {
    miniState.value = false;
    // notice we have registered an event with capture flag;
    // we need to stop further propagation as this click is
    // intended for switching drawer to "normal" mode only
    e.stopPropagation();
  }
};
</script>
<template>
  <q-layout view="hHh lpR fFf" container style="height: 100vh">
    <q-header>
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="drawer = !drawer" />
        <q-toolbar-title>{{ t("message.header_title") }}</q-toolbar-title>
        <LanguageSwitcher />
        <DarkMode />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="!drawer || miniState"
      @click.capture="drawerClick"
      :width="200"
      :breakpoint="500"
      bordered
    >
      <template v-slot:mini>
        <q-scroll-area class="fit mini-slot cursor-pointer">
          <div class="q-py-lg">
            <div class="column items-start">
              <q-icon name="school" color="red" class="mini-icon" />
              <q-icon name="code" color="orange" class="mini-icon" />
              <q-icon name="inbox" color="blue" class="mini-icon" />
              <q-icon name="star" color="orange" class="mini-icon" />
              <q-icon name="send" color="purple" class="mini-icon" />
              <q-icon name="drafts" color="teal" class="mini-icon" />
              <q-icon name="tag_faces" color="yellow" class="mini-icon" />
              <q-icon name="language" color="indigo" class="mini-icon" />
            </div>
          </div>
        </q-scroll-area>
      </template>
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item clickable to="/">
            <q-item-section avatar>
              <q-icon name="school" color="red" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ t("message.menu_home") }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/about">
            <q-item-section avatar>
              <q-icon name="code" color="orange" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ t("message.menu_about") }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="inbox" color="blue" />
            </q-item-section>
            <q-item-section> {{ t("message.menu_inbox") }} </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="star" color="orange" />
            </q-item-section>
            <q-item-section> {{ t("message.menu_star") }} </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="send" color="purple" />
            </q-item-section>
            <q-item-section> {{ t("message.menu_send") }} </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="drafts" color="teal" />
            </q-item-section>
            <q-item-section>{{ t("message.menu_drafts") }} </q-item-section>
          </q-item>
          <q-item
            clickable
            tag="a"
            target="_blank"
            href="https://quasarframework.github.io/quasar-ui-qiconpicker/demo"
          >
            <q-item-section avatar>
              <q-icon name="tag_faces" color="yellow" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ t("message.menu_icons") }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            tag="a"
            target="_blank"
            href="https://vue-i18n.intlify.dev"
          >
            <q-item-section avatar>
              <q-icon name="language" color="indigo" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ t("message.menu_i18n") }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
        <q-btn
          dense
          round
          unelevated
          color="accent"
          icon="chevron_left"
          @click="miniState = true"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <q-page class="q-px-lg q-py-md">
        <router-view />
      </q-page>
    </q-page-container>
    <q-footer reveal>
      <q-toolbar>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<style lang="sass" scoped>
.mini-slot
  transition: background-color .28s
  &:hover
    background-color: rgba(0, 0, 0, .04)

.mini-icon
  font-size: 1.718em
  padding: 2px 16px

  & + &
    margin-top: 18px
</style>
