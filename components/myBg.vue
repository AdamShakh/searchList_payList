<template>
    <div style="width: 30px; height: 50px;" :style="bgStyle"></div>
</template>

<script>
import loadingMixin from '@/components/loadingMixin.js'
export default {
    mixins:[loadingMixin],
    computed:{
        bgStyle(){
            /* return `background-image: url(${src})` */
            return 'background-image: url(' + src + ')'
        }
    }
}
</script>

<style>

</style>
