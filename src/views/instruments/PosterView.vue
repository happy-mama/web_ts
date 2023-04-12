<script lang="ts">
import { defineComponent } from 'vue';
import axios from "axios";

export default defineComponent({
    data() {
        return {
            useApi: "",
            post: {
                header: "",
                text: ""
            },
            errors: {
                header: "",
                text: ""
            }
        };
    },
    methods: {
        sendPost() {

            if (!this.post.header) {
                return this.errors.header = "*required field"
            }

            if (!this.post.text) {
                return this.errors.text = "*required field"
            }

            this.errors.text = ""
            this.errors.header = ""

            axios.post(this.apiLink + "/web/post", {
                auth: this.$cookies.get("token"),
                data: {
                    header: this.post.header,
                    text: this.post.text
                }
            }).then(res => {
                if (res.data.error) {
                    console.log(res.data.error)
                } else {
                    alert("sended")
                }
            }).catch(e => {
                console.log(e)
            })
        },
        updateQueryApi() {
            if (this.$route.query.api) {
                if (this.$route.query.api == "rancor" || this.$route.query.api == "sereja") {
                    this.useApi = this.$route.query.api
                } else {
                    this.useApi = "rancor"
                }
            } else {
                this.useApi = "rancor"
            }
        }
    },
    mounted() {
        this.updateQueryApi()
    }
});
</script>

<template>
    <div class="embed">
        <div class="header">Poster</div>
        <div class="text">
            Here you can create a post on this site or on sereja.huesos.net<br><br>
            Choose Api:
            <select v-model="useApi" name="Api" id="Api">
                <option value="rancor">rancor</option>
                <option value="sereja">sereja</option>
            </select><br><br>
            Write some text:<br>
            <input v-model="post.header" placeholder="post header">
            <p class="error">{{ errors.header }}</p><br>
            <input v-model="post.text" placeholder="post text">
            <p class="error">{{ errors.text }}</p><br>
            <button @click="sendPost()">Send</button>
        </div>
    </div>
</template>