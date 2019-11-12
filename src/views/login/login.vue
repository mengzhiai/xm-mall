<template>
<div class="login">
    <div class="maxbox">
        <div class="title">
            <img src="@/assets/img/logo-txt.png" alt>
        </div>
    </div>
    <div class="login-box">
        <div class="maxbox">
            <div></div>
            <div class="panel" v-if="isLogin==true">
                <div class="tab">
                    <div class="item active">账号登陆</div>
                    <div class="item">扫码登陆</div>
                </div>
                <div class="box">
                    <el-form :model="form" ref="form" :rules="rules" :validate-on-rule-change="false">
                        <el-form-item label prop="userName">
                            <el-input v-model="form.userName" placeholder="邮箱/手机号码/小米ID"></el-input>
                        </el-form-item>
                        <el-form-item label prop="password">
                            <el-input type="password" v-model="form.password" placeholder="请输入密码" @keyup.enter.native="onSubmit('form')"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit('form')" style="width: 100%">登录</el-button>
                        </el-form-item>
                    </el-form>
                    <div class="register">
                        <div class="item">
                            <span>手机短信登陆/注册</span>
                        </div>
                        <div class="item">
                            <span @click="isLogin=false">立即注册</span>
                            <span class="line"></span>
                            <span>忘记密码</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel" v-if="isLogin==false">
                <div class="register-title">注册小米帐号</div>
                <div class="box">
                    <el-form :model="registerForm" ref="registerForm" :rules="registerRules" label-width="80px" :validate-on-rule-change="false">
                        <el-form-item label="用户名" prop="userName">
                            <el-input v-model="registerForm.userName" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" v-model="registerForm.password" placeholder="请输入密码" show-password></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="userName">
                            <el-input type="password" v-model="registerForm.againPassword" placeholder="请输入密码" show-password></el-input>
                        </el-form-item>
                        <div class="agreement">
                            <el-checkbox v-model="agreementChecked">同意<b>用户协议</b></el-checkbox>
                        </div>
                        <el-form-item label="">
                            <el-button type="primary" @click="registerUser('registerForm')" style="width: 100%">立即注册</el-button>
                        </el-form-item>
                        <div class="agreement l">
                            <el-button type="text" @click="isLogin=true">已有账号,进行登录</el-button>
                        </div>
                    </el-form>
                    <div class="register">
                        <div class="item">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        let userName = (rule, value, callbak) => {
            if (!value) {
                return callbak(new Error("用户名不能为空"));
            } else {
                callbak();
            }
        };
        let password = (rule, value, callbak) => {
            if (value) {
                if (value.length < 8 || value.length > 15) {
                    return callbak(new Error("密码长度为8-15位"));
                } else {
                    callbak();
                }
                callbak();
            } else {
                return callbak(new Error("密码不能为空"));
            }
        };

        return {
            form: {},
            rules: {
                userName: [{
                    required: true,
                    message: '用户名不能为空',
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                }]
            },
            registerForm: {
                userName: "",
                password: ""
            },
            registerRules: {
                userName: [{
                    required: true,
                    message: '用户名不能为空',
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    validator: password,
                    trigger: "blur"
                }],
                againPassword: [{
                    required: true,
                    validator: password,
                    trigger: 'blur'
                }]
            },
            isLogin: true,
            agreementChecked: false
        };
    },
    methods: {
        onSubmit(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    let data = {
                        userName: this.form.userName,
                        password: this.form.password
                    }
                    this.axios.post(`/api/login`, data)
                        .then(res => {
                            if (res.data.ok) {
                                this.$message.success(res.data.message);
                                this.$router.push('/homePage');
                                //把登录信息存到localStorage中
                                localStorage.setItem('user', res.data.data.loginPerson)
                                localStorage.setItem('loginStatus', 1)
                            } else {
                                this.$message.warning(res.data.message);
                                /* this.form.userName = "";
                                this.form.password = ""; */
                            }
                        });
                }
            });
        },
        //注册
        registerUser(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    if (this.agreementChecked == false) {
                        this.$message.warning("请先勾选用户协议");
                        return
                    }
                    if (this.registerForm.password !== this.registerForm.againPassword) {
                        this.$message.warning("两次输入的密码不一致,请重新输入");
                        /* this.registerForm.password = "";
                        this.registerForm.againPassword = ""; */
                        return
                    }
                    let data = {
                        userName: this.registerForm.userName,
                        password: this.registerForm.password
                    }
                    this.axios.post('/api/register', data).then(res => {
                        if (res.data.ok) {
                            this.$message.success("注册成功");
                            this.isLogin = true;
                        } else {
                            this.$message.warning(res.data.message);

                        }
                    })

                } else {
                    this.$message.warning("请将注册信息填写完整")
                }
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.login {
    .login-box {
        width: 100%;
        height: 500px;
        background: url("../../assets/img/login.jpeg") top center;
        z-index: 3;

        // text-align: right;
        .maxbox {
            display: grid;
            grid-template-columns: 800px 400px;
        }

        .panel {
            background-color: #fff;
            margin: 50px 20px;
            padding: 40px 20px;

            .tab {
                display: grid;
                grid-template-columns: 50% 50%;
                text-align: center;

                .item {
                    cursor: pointer;
                    font-size: 22px;

                    &:hover {
                        color: #f56600;
                    }
                }

                .active {
                    color: #f56600;
                }

                .item:nth-child(1) {
                    border-right: 1px solid #ccc;
                }
            }

            .box {
                margin: 15px;

                .register {
                    display: flex;
                    justify-content: space-between;

                    .item {
                        span {
                            &:hover {
                                color: #f56600;
                                cursor: pointer;
                            }
                        }

                        .line {
                            margin: 0 10px;
                        }
                    }
                }
            }
        }
    }
}

.register-title {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
}

.agreement {
    margin: 0 0 15px 80px;
}

.agreement.l {
    margin-top: -15px;
}
</style>
