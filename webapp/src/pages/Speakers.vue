<template>
    <div class="speakers-page">
        <navbar/>
        <component-title
        title="Speakers @ JEEC"
        subtitle="List of guest speakers that will steal the show!"/>

        <router-link router-link :to="{ name: 'Details' }" text="hey">
          Details
        </router-link>
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
                }
            ]
        };
    }
}
</script>

<style>

</style>
