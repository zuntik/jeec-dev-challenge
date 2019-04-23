<template>
    <div class="details-page">
        <component-title
        title="Speakers @ JEEC"
        subtitle="List of guest speakers that will steal the show!"/>

        {{ text }}
    </div>
</template>

<script>
export default {
    name: "details_page",
    props: ['image', 'name','text'],
}
</script>

<style>

</style>
