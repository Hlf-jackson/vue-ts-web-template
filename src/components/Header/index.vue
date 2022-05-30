<template>
  <header class="bg-white antialiased Male text-slate-500 dark:text-slate-400 dark:bg-slate-900">
    <div
      class="top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"
    >
      <div class="mx-auto max-w-8xl">
        <div class="px-4 py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10">
          <div class="relative flex items-center text-2xl sm:text-2xl font-blimone justify-evenly">
            <router-link to="/" class="mr-3 flex-none w-[2.0625rem] md:w-auto leading-6 dark:text-slate-200">Fast-ey</router-link>
            <div class="relative items-center hidden lg:flex">
              <nav class="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
                <ul class="flex space-x-24">
                  <li>
                    <router-link to="/home" class="hover:text-sky-500 dark:hover:text-sky-400">首页</router-link>
                  </li>
                  <li>
                    <router-link to="/exchange" class="hover:text-sky-500 dark:hover:text-sky-400">交易</router-link>
                  </li>
                  <li>
                    <router-link to="/help" class="hover:text-sky-500 dark:hover:text-sky-400">帮助中心</router-link>
                  </li>
                  <li>
                    <router-link to="/about" class="hover:text-sky-500 dark:hover:text-sky-400">关于我们</router-link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <el-button @click="handleBtn('login')">Login</el-button>
              <el-button @click="handleBtn('register')" type="primary">Registration</el-button>
            </div>
            <!-- <div class="flex items-center pl-6 ml-6 border-l border-slate-200 dark:border-slate-800">
              <el-tooltip :content="theme === 'light' ? '设置暗黑主题' : '设置明亮主题'">
                <el-button
                  class="nav-btn"
                  :shape="'circle'"
                  type="info"
                  plain
                  :icon="theme === 'dark' ? Sunny : Moon"
                  circle
                  size="small"
                  @click="toggleTheme()"
                >
                </el-button>
              </el-tooltip>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <el-drawer v-model="drawer" size="400px">
      <Login :loginStatus="loginStatus" />
    </el-drawer>
  </header>
</template>
<script setup lang="ts">
  import SvgIcon from '../SvgIcon/index.vue'
  // import { ref } from 'vue'
  // import { useDark, useToggle } from '@vueuse/core'
  import { useAppStore, useUserStore } from '@/store'
  import { Sunny, Moon } from '@element-plus/icons-vue'
  // import Login from '@components/login/index.vue'
  const loginStatus: any = ref('login')
  const drawer = ref(false)
  const handleBtn = (status: String) => {
    loginStatus.value = status
    drawer.value = !drawer.value
  }
  const title = ref('I want to study typescript')
  // 检测浏览器系统主题
  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
  const appStore = useAppStore()
  // const useStore = useUserStore()
  const theme = computed(() => {
    return appStore.theme
  })
  const isDark = useDark({
    selector: 'body',
    attribute: 'arco-theme',
    valueDark: 'dark',
    valueLight: 'light',
    storageKey: 'arco-theme',
    onChanged(dark: boolean) {
      appStore.toggleTheme(dark)
    },
  })
  const toggleTheme = useToggle(isDark)
</script>
<style lang="less">
  .prose {
    color: #334155;
    font-size: 0.875em;
    font-variant-ligatures: none;
    code {
      color: #0f172a;
      font-family: Fira Code VF, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
      &::before {
        content: '`';
      }
      &::after {
        content: '`';
      }
    }
    &.dark\:prose-dark {
      color: #94a3b8;
      code {
        color: #e2e8f0;
      }
    }
  }
  .justify-evenly {
    justify-content: space-evenly;
  }
  .login-wrap {
    position: absolute;
    right: 20px;
  }
</style>
