let total_images = 0
let loaded_images = 0

export default{
    props:{
        src: {required: true}
    },
    mounted(){
        this.$store.dispatch('new_image_mounted')
        let image = new Image()
        image.src = this.src
        image.onload = () => {
            this.$store.dispatch('new_image_loaded')
        }
    },
    computed:{
        images_total(){
            return this.$total_images();
        },
        images_loaded(){
            return this.$total_loaded()
        }
    }
}