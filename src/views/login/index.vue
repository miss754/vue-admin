<template>
  <div id="login">
    <div class="login-warp">
      <ul class="menuTab">
        <li
          v-for="(tab, index) in menuTabEvent.menuTab"
          :key="index"
          :class="['tabItem', {'activeTab': tab.active}]"
          @click="menuTabEvent.changeTab(tab)"
        >{{tab.title}}</li>
      </ul>
      <!-- 表单 --> 
      <el-form
        ref="ruleFormRef"
        :model="modelEvent.ruleForm"
        status-icon
        :rules="modelEvent.rules"
        label-width="80px"
        class="login-ruleForm"
        label-position="top"
      >
        <el-form-item label="邮箱" prop="pass">
          <el-input v-model="modelEvent.ruleForm.email" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input v-model="modelEvent.ruleForm.pass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input class="inline" v-model="modelEvent.ruleForm.code" autocomplete="off" />
          <el-button class="">获取验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="block" @click="submitForm(ruleFormRef)">确认</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';
import { validateEmail, validatePass, validateCode } from '@/utils/validate.js'

export default defineComponent({
  setup(props) {
    const menuTabEvent = reactive({
      menuTab: [
        { title: '登录', value: 'login', active: true, },
        { title: '注册', value: 'register', active: false, },
      ],
      activeTab: 'login',
      changeTab(tab) {
        menuTabEvent.activeTab = tab.value;
        menuTabEvent.menuTab.forEach(element => {
          element.active = false;
        });
        tab.active = true;
      }
    })

    const ruleFormRef = ref()
    const modelEvent = reactive({
      ruleForm: {
        email: '',
        pass: '',
        code: '',
      },
      rules: {
        email: [{ validator: validateEmail, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }],
        code: [{ validator: validateCode, trigger: 'blur' }],
      },
      submitForm(ruleFormRef) {

      }
    })

    return {
      menuTabEvent,
      ruleFormRef,
      modelEvent,
    }
  }
})
</script>

<style lang="scss" scoped>
#login {
  height: 100vh;
  background: #344a5f;
  .login-warp {
    width: 340px;
    margin: 0 auto;
    padding-top: 100px;
    .menuTab {
      text-align: center;
      .tabItem {
        display: inline-block;
        width: 88px;
        line-height: 34px;
        color: #fff;
        border-radius: 2px;
        cursor: pointer;
        &.activeTab{
          background: rgba(0, 0, 0, 0.1);
          color: #0ff;
        }
      }
    }
    .login-ruleForm{
      ::v-deep(.el-form-item__content) {
        .inline {
          width: 67%;
          margin-right: 10px;
        }
      }
      ::v-deep(.el-form-item__label){
        color: #fff;
      }
      .block{
        display: block;
        width: 100%;
      }
    }
  }
}
</style>