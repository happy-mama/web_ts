<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import OnePost from "../../components/OnePost.vue"
import router from '@/router';

interface post {
    _id: string
    myLike: boolean
    likes: number
}

export default defineComponent({
    data() {
        return {
            isLoading: false,
            posts: [],
            thread: "main"
        };
    },
    methods: {
        like(postId: any) {
            axios.post(this.apiLink + "/web/posts/like", {
                thread: this.thread,
                postId: postId,
                auth: this.$cookies.get("token")
            }).then(res => {
                if (res.data.error) {
                    console.log(res.data.error)
                } else {
                    this.posts.forEach((post: post) => {
                        if (post._id == postId) {
                            post.myLike = true
                            post.likes += 1
                        }
                    })
                }
            })
        },
        loadPosts() {
            this.posts = []
            this.isLoading = true;

            router.push({ path: this.$route.path, query: { thread: this.thread } })

            axios.get(this.apiLink + "/web/posts", {
                params: {
                    thread: this.thread,
                    getLast: true
                }
            }).then(res => {
                const data = res.data;
                if (data.error) {
                    console.log(data.error);
                }
                else {
                    this.isLoading = false;
                    this.posts = data;
                }
            });
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
        this.emitter.on("post-like", postId => this.like(postId))
        this.updateQueryApi();
        this.loadPosts();
    },
    components: { OnePost }
})

</script>

<style>
@import "@/assets/posts.css";
</style>

<template>
    <div class="posts">
        <div class="header">
            Current thread:
            <select v-model="thread" name="m">
                <option value="main">main</option>
                <option value="test">test</option>
            </select><br>
            <!-- <div style="display: inline;"> -->
            <button class="default" @click="loadPosts">reload posts</button><br>
            <RouterLink class="link" :to="`/instruments/poster?thread=${thread}`">
                Create post
            </RouterLink>
            <!-- </div> -->
        </div>
        <div class="body" v-if="!isLoading">
            <div class="post" v-for="item in posts" :key="item">
                <OnePost :post="item" />
            </div>
        </div>
        <div class="special" v-if="isLoading">Loading posts...</div>
    </div>
</template>