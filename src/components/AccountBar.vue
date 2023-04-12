<script lang="ts">
import { defineComponent } from 'vue';
import axios from "axios";

export default defineComponent({
    data() {
        return {
            logined: false,
            login: localStorage.getItem("login"),
            clickPath: "/"
        }
    },
    methods: {
        loginByJWT(token: string) {
            axios.get(this.apiLink + "/web/user/jwt", {
                headers: {
                    Authorization: `${token}`
                }
            }).then(res => {

                const data = res.data
                console.log(data)

                if (data.error) {
                    console.log("error while logining..", data.error)
                } else {
                    localStorage.setItem("logined", "1")
                    localStorage.setItem("login", data.auth.login)
                    localStorage.setItem("email", data.auth.email)

                    this.logined = true
                    this.login = data.auth.login
                    this.clickPath = `/user/${this.login}`

                    this.emitter.emit("logined", null)
                }
            })
        }
    },
    mounted() {
        if (this.$cookies.get("token")) {
            this.loginByJWT(this.$cookies.get("token"));
        }
        this.emitter.on("loginUpdate", () => {
            this.login = localStorage.login
        })
    }
})
</script>

<template>
    <div class="account">
        <RouterLink v-if="logined" class="login" :to="clickPath">
            <li class="login-link">
                {{ login }}
            </li>
        </RouterLink>
        <RouterLink v-if="!logined" class="auth" to="/auth">
            <li class="auth-link">
                LOGIN
            </li>
        </RouterLink>
    </div>
</template>