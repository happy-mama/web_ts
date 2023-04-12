<script lang="ts">
import { defineComponent } from 'vue';
import axios from "axios";

export default defineComponent({
    data() {
        return {
            errors: {
                login: "",
                password: ""
            },
            inputs: {
                login: "",
                password: ""
            },
            params: {
                method: "",
                url: "web/users",
                params: {},
                data: {}
            }
        }
    },
    methods: {
        async register() {

            axios.post(this.apiLink + "/web/user", {
                data: {
                    login: this.inputs.login,
                    password: this.inputs.password
                }
            }).then(res => {
                const data = res.data
                console.log(data)
            })

        },

        async login() {

            const token = `Bearer ${this.inputs.login}:${this.inputs.password}`

            axios.get(this.apiLink + "/web/user", {
                headers: {
                    Authorization: `${token}`
                }
            }).then(res => {
                const data = res.data

                if (data.error) {
                    switch (data.error) {
                        case "ECHECK: checkUserLorPE_RULE": {
                            this.errors.login = "*Empty login or password";
                        } break;
                        case "ENOUSER": {
                            this.errors.login = "*Wrong login or password";
                        } break;
                        case "EPARAMSBUSY": {
                            this.errors.login = "*Login is busy";
                        } break;
                        default: {
                            this.errors.login = ""
                            this.errors.password = ""
                        }
                    }
                } else {
                    this.$cookies.set("token", data.jwt)
                    window.location.replace("/")
                    localStorage.setItem("login", data.auth.login)
                    localStorage.setItem("email", data.auth.email)
                    localStorage.setItem("logined", "1")
                }
            })
        }
    }
})
</script>

<template>
    <div class="inline-element">
        <div class="box-auth">
            <div class="header">AUTH</div>
            <div class="auth-error">{{ errors.login }}</div>
            <input v-model="inputs.login" class="login" placeholder="login">
            <input v-model="inputs.password" type="password" class="password" placeholder="password">
            <div class="auth-error">{{ errors.password }}</div>
            <button @click="register()" class="blue">REGISTER</button>
            <button @click="login()" class="green">LOGIN</button>
        </div>
    </div>
</template>