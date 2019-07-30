const GifBox = {
    props: ['gif'],
    template: `<div class="gif-box">
                <a :href="gif.url">
                    <img :src="gif.images.original.url" alt="">
                </a>
                <a :href="gif.user.profile_url" class="gif-user" v-if="gif.user">
                    <img :src="gif.user.avatar_url" alt="" height="40" width="40">
                    {{gif.user.display_name}}
                </a>
            </div>`
};