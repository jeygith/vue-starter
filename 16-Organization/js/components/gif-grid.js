const GifGrid = {

    props: ['gifs'],
    components: {
        'gif-box': GifBox
    },
    template: `
            <div class="columns is-multiline" v-if="gifs">
        <div class="column is-one-quarter" v-for="gif in gifs">
            <gif-box v-bind:gif="gif"></gif-box>
        </div>
    </div>
        `
};