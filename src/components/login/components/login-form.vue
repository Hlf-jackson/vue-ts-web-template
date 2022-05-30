<template>
  <div class="login-form-wrapper">
    <!-- <div class="login-form-title">欢迎登录系统</div> -->
    <el-tabs v-model="activeTab" @tab-click="handleClick" class="demo-tabs">
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
</template>

<script lang="ts" setup>
  import { ElMessage, FormInstance, FormRules, TabsPaneContext } from 'element-plus'
  import { useUserStore } from '../../../store/index'
  import useLoading from '../../../hooks/loading'
  import { ReqParams } from '../../../api/user/types'

  const router = useRouter()
  const errorMessage = ref('')
  const { loading, setLoading } = useLoading()
  const userStore = useUserStore()
  const activeTab = ref('login')

  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
  }

  const userFormData = reactive({
    emailAddress: '',
    password: '',
    comfirmPassword: ''
  })
  const resFormData = reactive({
    emailAddress: '',
    password: '',
    comfirmPassword: ''
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
    if(!formEl) return
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
</style>
