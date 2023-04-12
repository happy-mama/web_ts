<script lang="ts">
import { defineComponent } from 'vue';
import axios from "axios";

export default defineComponent({
    data() {
        return {
            Qlogin: this.$route.params.login,
            login: "",
            email: "",
            password: "",
            errors: {
                login: "",
                email: "",
                password: ""
            }
        }
    },
    methods: {
        save() {

            axios.put(this.apiLink + "/web/user/jwt", {
                jwt: this.$cookies.get("token"),
                put: {
                    login: this.login,
                    email: this.email,
                    password: this.password
                }
            }).then(res => {

                const data = res.data
                console.log(data)

                if (data.error) {

                    console.log("some jopa")

                } else {

                    localStorage.login = data.auth.login
                    localStorage.email = data.auth.email
                    this.$cookies.set("token", data.jwt)

                    this.emitter.emit("loginUpdate")

                }
            })

        }
    },
    mounted() {
        this.login = localStorage.login
        this.email = localStorage.email

        this.emitter.on("logined", () => {
            this.login = localStorage.login
            this.email = localStorage.email
        })
    }
})

</script>

<template>
    <div class="embed">
        <div class="header">account settings</div>
        <div class="level">
            Login:<br>
            <input type="text" placeholder="Login" v-model="login">
            <p class="special">{{ errors.login }}</p><br>
            Email:<br>
            <input type="text" placeholder="Email" v-model="email">
            <p class="special">{{ errors.email }}</p><br>
            Password:<br>
            <input type="text" placeholder="password" v-model="password">
            <p class="special">{{ errors.password }}</p><br>
            <button @click="save()">Save</button><br>
        </div>
    </div>
</template>