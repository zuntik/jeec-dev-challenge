<template>
    <div class="speakers-page">
        <navbar/>
        <component-title
        title="Speakers @ JEEC"
        subtitle="List of guest speakers that will steal the show!"/>

        <ul>
            <li v-for="speaker in speakers">
                <router-link router-link :to="{name: 'Details', params: speaker}">
                    <div>
                        <img class="clickable" v-bind:src="speaker.image">
                        <p>{{speaker.name}}</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            speakers: [
                {
                    name: 'Moe Szyslak',
                    text: 'Principal Motor Designer',
                    image: '../../static/moe.png',
                },
                {
                    name: 'Apu Nahasapeemapetilon',
                    text: 'shoppy',
                    image: '../../static/apu.png'
                },
                {
                    name: 'duffman',
                    text: 'beer guy',
                    image: '../../static/duffman.png'
                },
                {
                    name: 'itchy',
                    text: 'and scratchy show!',
                    image: '../../static/itchy.png'
                },
                {
                    name: 'ned flanders',
                    text: 'professional neighbour',
                    image: '../../static/ned_flanders.png'
                },
                {
                    name: 'patty',
                    text: 'works in dmv',
                    image: '../../static/patty.png'
                },
                {
                    name: 'scratchy',
                    text: 'tv character',
                    image: '../../static/scratchy.png'
                },
                {
                    name: 'sideshow bob',
                    text: 'harmless criminal',
                    image: '../../static/sideshow_bob.png'
                }
            ]
        };
    }
}
</script>

<style>
ul
{
    list-style-type: none;
}
img.clickable
{
    border-radius: 10px;
    height:150px;
    box-shadow: 2px 2px 5px grey;
}


</style>
