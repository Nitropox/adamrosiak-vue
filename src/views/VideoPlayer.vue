<template>
    <div>
       <video class="vd" autoplay controls :src="getVideo()"></video>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'VideoPlayer',
    methods: {
        ...mapGetters(['getVideo']),
    }
}
</script>
<style scoped lang="scss">
.vd{
    width: 100vw;
}
</style>