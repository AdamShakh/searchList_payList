<template>
    <div class='mainCont' :style="widthOut">
        <!-- <div v-show="false">{{fuseSearchLive}}</div> -->
        <div class="inputCont">  <!-- @keyup.enter="fuseSearch" -->  <!-- fuseSearch for fuse search -->
            <img class="inputIcon" src="@/static/search.svg" alt="">
            <input class='input' type="text" v-model="query" placeholder="enter your search terms">
        </div>
         
        <div>
            <div v-for="(item, i) in fuseResults" :key="i">  <!-- in directSearch  ||  in fuseResults -->
                <a class="ItemCont" :href="item.item.href" target="_blank">
                    <div style="width: 60px; height: 60px;"><img :src="item.item.icon" style="width: 60px; height: 60px;" alt="IMG"></div> 
                    <span style="margin: 10px;"><b>{{item.item.text}}</b></span>
                </a>
                <hr>
            </div>
        </div>

    </div>
</template>

<script>
import VueFuse from 'vue-fuse'
/* Vue.use(VueFuse) */

export default {
    components:{
        VueFuse
    },
    props:{
        items:{
            required: true,
            type: Array,
        },
        width:{
            default: '50%',
        }
    },
    data(){
        return{
            query: '',
            fuseResults: [],
        }
    },
    computed:{
        directSearch(){
            return this.items.filter(el=>{
                return el.text.indexOf(this.query) !== -1
            })
        },
        /* fuseSearchLive(){   // instead query in watch
            let i = this.query
            this.fuseSearch()
            return i
        }, */
        widthOut(){
            return 'width: ' + this.width
        }
    },
    methods:{
        fuseSearch () {
            this.$search(this.query, this.items, { includeScore: true, 
                                                   shouldSort: true, 
                                                   threshold: 0.3, 
                                                   keys: ['text'] }).then(result => {
                this.fuseResults = result;
                console.log(result); //
            })
        }
    },
    mounted(){
        this.query = ' '
        this.fuseSearch();
        this.query = ''
    },
    watch:{
        query:function(val){
            this.fuseSearch()
        }
        /* query:{
            handler(val){
                this.fuseSearch()
            },
            immediate: true,
        } */
    }
}
</script>

<style>
    .mainCont{
        display: flex;
        flex-direction: column;
        padding: 30px;
    }

    .inputCont{
        border: 15px solid blue;
        /* position: relative; */
        width: 100%;
        margin: 0px 0px 10px;
        
    }
    .inputIcon{
        height: 17px;
        position: relative;
        left: 8px;
        /* bottom: calc(50% - 7.5px); */
        top: 3px;
    }
    .input{
        font-size: 17px;
        padding: .3em;
        margin: 5px;
        outline: 0;
        border: 0;
        width: calc(100% - 33px);
    }

    .ItemCont{
        display: flex;
        align-items: center;
        margin: 10px;
        color: black;
        text-decoration: none; 
    }
</style>
