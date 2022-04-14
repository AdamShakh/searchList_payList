

export default ({ app }, inject) => {
    let total = 0
    let loaded = 0

    inject('total_images', () => total) // .$total_images
    inject('total_loaded', () => loaded)
    inject('new_image_mounted', () => total+=1)
    inject('new_image_loaded', () => loaded+=1)
}