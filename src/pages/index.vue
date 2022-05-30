<script setup lang="ts">
import { version } from "../../package.json"
import SvgIcon from "@components/SvgIcon/index.vue"
import { useAppStore } from '@/store/modules/app'
import Header from "@components/Header/index.vue"
import { defineComponent } from 'vue'

const appStore = useAppStore()

</script>
<template>
  <div class="dark:text-slate-400 dark:bg-slate-900">
    <Header />
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="less" scoped>

.version {
  display: inline-block;
  padding: 6px;
  margin-left: 6px;
  border-radius: 10px;
}
</style>
