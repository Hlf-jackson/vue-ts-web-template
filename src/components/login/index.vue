<template>
  <div class="container">
    <div class="logo">
      <!-- <img :src="logo" width="240" /> -->
      <!-- <div class="logo-text">Arco Design Pro</div> -->
    </div>
    <!-- <LoginBanner /> -->
    <div class="content">
      <div class="content-inner">
        <div class="login-form-wrapper">
          <!-- <div class="login-form-title">欢迎登录系统</div> -->
          <el-tabs v-model="loginStatus" @tab-click="handleClick" class="demo-tabs">
            <el-tab-pane label="Login" name="login">
              <div class="login-form-sub-title"></div>
              <div class="login-form-error-msg">{{ errorMessage }}</div>
              <el-form ref="loginRuleForm" :model="userFormData" class="login-form" layout="vertical" :rules="loginRules">
                <el-form-item field="emailAddress" :rules="loginRules.emailAddress" hide-label prop="emailAddress">
                  <el-input v-model="userFormData.emailAddress" placeholder="Email Address"> </el-input>
                </el-form-item>
                <el-form-item field="password" :rules="loginRules.password" hide-label prop="password">
                  <el-input v-model="userFormData.password" placeholder="Password" allow-clear> </el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="handleSubmit(loginRuleForm)">登录</el-button>
                  <el-button @click="resetForm(loginRuleForm)">重置</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="Registration" name="register">
              <el-form ref="resRuleForm" :model="resFormData" class="login-form" layout="vertical" :rules="resRules">
                <el-form-item field="emailAddress" :rules="resRules.emailAddress" hide-label prop="emailAddress">
                  <el-input v-model="resFormData.emailAddress" placeholder="Email Address"> </el-input>
                </el-form-item>
                <el-form-item field="password" :rules="resRules.password" hide-label prop="password">
                  <el-input v-model="resFormData.password" placeholder="Password" allow-clear> </el-input>
                </el-form-item>
                <el-form-item field="password" :rules="resRules.comfirmPassword" hide-label prop="comfirmPassword">
                  <el-input v-model="resFormData.comfirmPassword" placeholder="Comfirm Password" allow-clear> </el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="createSubmit(resRuleForm)">创建账号</el-button>
                  <!-- <el-button @click="resetForm(resRuleForm)">重置</el-button> -->
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="footer">
        <!-- <Footer /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ElMessage, FormInstance, FormRules, TabsPaneContext } from 'element-plus'
  import { useUserStore } from '../../store/index'
  import useLoading from '../../hooks/loading'
  // import { ReqParams } from '../../api/user/types'
  // import Footer from '@components/footer/index.vue'
  // import LoginBanner from './components/banner.vue'
  // import LoginForm from './components/login-form.vue'
  // import logo from '@/assets/icons/svg/logo.svg'

  // interface Props {
  //   loginStatus: string
  // }
  // withDefaults(defineProps<Props>(), {
  //   loginStatus: 'login',
  // })
  const props = defineProps({
    // 可以拿到它的值
    loginStatus: String,
  })
  const theme = localStorage.getItem('theme')
  if (theme == 'dark') {
    document.documentElement.classList.add('dark')
    document.body.setAttribute('arco-theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    document.body.removeAttribute('arco-theme')
  }

  const router = useRouter()
  const errorMessage = ref('')
  const { loading, setLoading } = useLoading()
  const userStore = useUserStore()

  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
  }

  const userFormData = reactive({
    emailAddress: '',
    password: '',
    comfirmPassword: '',
  })
  const resFormData = reactive({
    emailAddress: '',
    password: '',
    comfirmPassword: '',
  })
  const loginRuleForm = ref<FormInstance>()
  const resRuleForm = ref<FormInstance>()
  const loginRules = reactive<FormRules>({
    emailAddress: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur',
      },
    ],
    password: [
      {
        required: true,
        message: '密码不能为空',
        trigger: 'blur',
      },
    ],
    comfirmPassword: [
      {
        required: true,
        message: '密码不能为空',
        trigger: 'blur',
      },
    ],
  })
  const resRules = reactive<FormRules>({
    emailAddress: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur',
      },
    ],
    password: [
      {
        required: true,
        message: '密码不能为空',
        trigger: 'blur',
      },
    ],
    comfirmPassword: [
      {
        required: true,
        message: '密码不能为空',
        trigger: 'blur',
      },
    ],
  })
  const handleSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    // await formEl.validate((valid, field) => {
    //   if (valid) {
    //     ElMessage.success('欢迎使用')
    //     router.push('/')
    //     userStore.info()
    //   } else {
    //     ElMessage.error('错误信息')
    //   }
    // })
  }
  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }

  const createSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    // await formEl.validate((valid, field) => {
    //   if(!valid) {
    //     ElMessage.error('错误信息')
    //     return false
    //   }
    //   ElMessage.success('注册成功')
    // })
  }
</script>

<style lang="less" scoped>
  .container {
    display: flex;
    height: 100vh;

    .banner {
      width: 550px;
      background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
    }

    .content {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      padding-bottom: 40px;
      .login-form {
        &-wrapper {
          width: 320px;
        }

        &-title {
          color: var(--color-text-1);
          font-weight: 500;
          font-size: 24px;
          line-height: 32px;
        }

        &-sub-title {
          color: var(--color-text-3);
          font-size: 16px;
          line-height: 24px;
        }

        &-error-msg {
          height: 32px;
          color: rgb(var(--red-6));
          line-height: 32px;
        }

        &-password-actions {
          display: flex;
          justify-content: space-between;
        }

        &-register-btn {
          color: var(--color-text-3) !important;
        }
      }

      /deep/.demo-tabs > .el-tabs__content {
        padding: 32px;
        color: #6b778c;
        font-size: 32px;
        font-weight: 600;
      }
    }

    .footer {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
    }
  }

  .logo {
    position: fixed;
    top: 24px;
    left: 22px;
    z-index: 1;
    display: inline-flex;
    align-items: center;

    &-text {
      margin-right: 4px;
      margin-left: 4px;
      color: var(--color-fill-1);
      font-size: 20px;
    }
  }
</style>
