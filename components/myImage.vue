<template>
    <img :src="scr" alt="">
</template>

<script>
import loadingMixin from '@/components/loadingMixin'
export default {
    mixins:[loadingMixin],
    mounted(){
        console.log('test', this.$total_loaded())
    }
}
</script>