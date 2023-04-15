<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import OnePost from "../../components/OnePost.vue"

export default defineComponent({
    data() {
        return {
            isLoading: false,
            posts: []
        };
    },
    methods: {
        loadPosts() {
            this.isLoading = true;
            axios.get(this.apiLink + "/web/posts", {
                params: {
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
        }
    },
    mounted() {
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
            HEADER
        </div>
        <div class="body" v-if="!isLoading">
            <div class="post" v-for="item in posts" :key="item">
                <OnePost :post="item" />
            </div>
        </div>
        <div class="special" v-if="isLoading">Loading posts...</div>
    </div>

    <div class="e" style="max-width: 80vw;">

        <!-- <div class="msg">
            <div class="title">options</div>
            <div class="description">
                <RouterLink class="embed" style="background-color: #ededed; color: black" to="/instruments/poster">
                    <div class="text">
                        Create post
                    </div>
                </RouterLink>
            </div>
        </div> -->

        <!-- <div>
            <div class="special" v-if="isLoading">Loading posts...</div>
            <div class="level" v-for="item in posts" :key="item">
                <OnePost :post="item" />
            </div>
        </div> -->
        <button>load posts</button>
    </div>
</template>