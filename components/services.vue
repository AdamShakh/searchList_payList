<template>
    <div class="services-root" :style="widthOut">
        <p class="title">Services</p>
        <div>
            <div v-for="(service, i) in services_inner" :key="i"
                @click="selectService(service)" 
                :class="{'selected': service.selected}" class="service">
                    <div>{{service.name}}</div>
                    <div>$ {{service.price}}</div>
            </div>
        </div>
        <hr style="margin: 20px 3em 0px; background-color: green">
        <div class="total-row">
            <div>Total</div>
            <div>$ {{total}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        services:{
            required: true,
            type: Array,
        },
        width:{
            default: '50%',
        }
    },
    data(){
        return{
            services_inner: []
        }
    },
    methods:{
        updateInnerServices(){
            this.services_inner = this.services.map(el => {
                return {
                    name: el.name,
                    price: el.price.toFixed(2),
                    selected: false,
                }
            })
        },
        selectService(service){
            service.selected = !service.selected
        },
        /* ZeorosAfterDot(price){
            let zers = price - parseInt(price, 10)
            if (zers > 0) return false
            return true
        }, */
    },             //  функция срабатывает как только меняется внешний элемент в ней используемый
    computed:{     //  а сама функции всегда возвращает заранее просчитанное значение , как переменная
        total(){
            let sum = 0
            this.services_inner.forEach(el => {
                if (el.selected){
                    sum += parseFloat(el.price, 10)
                }
            })
            return sum.toFixed(2)
        },
        widthOut(){
            return 'width: ' + this.width
        }
    },
    watch:{         // следит за указанными свойствами И если оно поменяется , то выполняет функцию
        services:{
            handler(newValue){
                this.updateInnerServices();
            },
            deep: true,
            immediate: true,
        }
    },
    mounted(){  // запускается 1 раз на клиентской стороне , после render'а страницы
    }
}
</script>

<style>
@font-face{
    src: url('../static/SFUI/Beautiful_People_two_Personal_Use.ttf');
    font-family: 'elegant';
    font-weight: 200;
}
.services-root{
    display: flex;
    flex-direction: column;
    background-color: rgb(123, 195, 219);
}
.title{
    margin: .5em 0em .0em;
    text-align: center;
    color: white;
    font-size: 3em;
    font-family: 'elegant', sans-serif;
}
.service{
    background-color: rgb(248, 149, 165);
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-weight: bold;
    padding: 30px 20px;
    margin: 10px 3em 0px;
    cursor: pointer;
}
.service.selected{
    background-color: rgb(90, 231, 90);
    color: black
}
.total-row{
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 20px;
    color: white;
    align-items: center;
    height: 50px;
    margin: 5px 4em 10px;
    padding: 5px 10px;
}

</style>
