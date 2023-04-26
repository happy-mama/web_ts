<script lang="ts">
import { defineComponent } from 'vue';
import axios from "axios";

export default defineComponent({
    data() {
        return {
            thread: "",
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
                thread: this.thread,
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
            if (this.$route.query.thread) {
                this.thread = String(this.$route.query.thread)
            } else {
                this.thread = "main"
            }
        }
    },
    mounted() {
        this.updateQueryApi()
    }
});
</script>

<template>
    <div class="midle" style="min-width: 80%;">
        <div class="e">
            <div class="msg">
                <div class="title">Create post</div>
                <div class="description">
                    Chose thread:
                    <select v-model="thread" id="Api">
                        <option value="main">main</option>
                        <option value="test">test</option>
                    </select><br>
                    <br>
                    <input type="text" v-model="post.header" placeholder="post title">
                    <p class="error">{{ errors.header }}</p><br>
                    <input type="text" v-model="post.text" placeholder="post text">
                    <p class="error">{{ errors.text }}</p><br>
                    <button class="green" @click="sendPost()">Send</button>
                </div>
            </div>
        </div>
    </div>
</template>