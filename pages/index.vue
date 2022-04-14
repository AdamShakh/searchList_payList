<template>
  <div class="mainContOuter">

    <search-list :items=this.items width=50%></search-list>
    <div style="width: 50%">
      <services :services=this.listServices width=100%></services>
    </div>

  </div>
</template>

<script>
import searchList from '@/components/searchList.vue'
import services from '@/components/services.vue'

export default {
  components: {
    searchList,
    services,
  },
  data(){
    return{
      items: [
        {icon: 'sfd.jpg', text: "first tab", href: 'https://yandex.ru'},
        {icon: 'novalny.png', text: "second decision", href: 'https://navalny.com'},
        {icon: 'lorem_ipsum.jpg', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
                                          Maxime aperiam quis nihil nisi laboriosam veritatis repellat \
                                           sint porro itaque dolorem, ", href: 'https://www.lipsum.com'},
        {icon: 'duma.jpg', text: "Duma", href: 'http://duma.gov.ru/'},
        {icon: 'aurus_limo.png', text: "Putin's limo", href: 'https://aurusmotors.com/'},
        {icon: 'zil_limo.jpg', text: "Brezhnev's limo", href: 'https://www.drive2.ru/b/2930024/'},
        {icon: 'zis_limo.jpg', text: "Stalin's limo", href: 'https://histrf.ru/read/articles/tsar-avtomobil-dlia-stalina'},
        {icon: 'oD4IFKn.jpg', text: "i don't know what to write", href: 'https://motivationalmanager.biz/Uploads/Public/47420323_m.jpg'},
        {icon: 'Kremlin_palace.jpg', text: "Кремлевский дворец", href: 'http://kremlin.ru/'},
        {icon: 'penta.png', text: "666", href: 'https://ezoterica.club/obryadyi/ritualyi/znaki-satany.html'},
        {icon: 'favicon.ico', text: "sit more elit decision dolor sit amet consectetur", href: 'https://ru.wikipedia.org/wiki/Lorem_ipsum'},
      ],

      listServices: [
        {
          name: 'Web development',
          price: 500,
        },
        {
          name: 'Prom development',
          price: 465.1234456,
        },
        {
          name: 'One more',
          price: 101,
        },
        {
          name: 'Lorem ipsum',
          price: 0,
        },
        {
          name: 'My code',
          price: 666.6666776,
        },
        {
          name: 'All Working',
          price: 1001,
        },
      ]
    }
  }
}
</script>

<style>
  .mainContOuter{
    width: 100%;
    display: flex;
    flex-direction: row;
  }
</style>









