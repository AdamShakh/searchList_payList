<template>
    <div>
        <h1>
            {{$store.images_loaded}}/{{$store.getters}}
        </h1>
        <my-image src='https://picsum.photos/200/300/'></my-image>
        <my-image src='https://picsum.photos/200/300/'></my-image>
        <my-image src='https://picsum.photos/200/300/'></my-image>
        <my-image src='https://picsum.photos/200/300/'></my-image>
        <my-image src='https://picsum.photos/200/300/'></my-image>
    </div>
</template>

<script>
import MyBg from '@/components/myBg.vue'
import MyImage from '@/components/myImage.vue'

export default {
    components:{
        MyBg,
        MyImage
    }
}
</script>

<style>

</style>
