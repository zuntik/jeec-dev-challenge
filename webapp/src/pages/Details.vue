<template>
    <div class="details-page">
        <navbar/>
        <component-title
        title="Speakers @ JEEC"
        subtitle="List of guest speakers that will steal the show!"/>

        <div>
            <img class="pic" v-bind:src="image">
            <p>{{name}}</p>
        </div>
        <div>
        {{text}}
        </div>
    </div>
</template>

<script>
export default {
    name: "details_page",
    props: ['image', 'name','text'],
}
</script>

<style>

img.pic
{
    border-radius: 10px;
    height:150px;
    box-shadow: 2px 2px 5px grey;
}


</style>
