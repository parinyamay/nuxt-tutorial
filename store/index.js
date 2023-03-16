import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default () =>
    new Vuex.Store({
        state: () => ({
            // Information
            loadData: [],
        }),
        getters: {
            // Get information
            getAllPosts(state) {
                return state.loadData
            },
        },
        mutations: {
            // Do some thing about information in state
            setPostState(state, posts) {
                state.loadData = posts
            },

            addPostState(state, post) {
                state.loadData.push(post)
            },
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios
                    .get('https://nuxt-tutorial-1f803-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
                    .then((res) => {
                        const data = []
                        for (const key in res.data) {
                            data.push({ ...res.data[key], id: key })
                        }
                        vuexContext.commit('setPostState', data)
                    })
                    .catch((err) => {
                        context.error(err)
                    })
            },
            addPost(vuexContext, post) {
                const createPost = { ...post }

                return axios
                    .post(
                        'https://nuxt-tutorial-1f803-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
                        createPost
                    )
                    .then((res) => {
                        console.log(res)
                        vuexContext.commit('addPostState', {
                            id: res.data.name,
                            ...createPost,
                        })
                    })
                    .catch((err) => {
                        console.error(err.response.data)
                    })
            },
        },
    })
