import ShowsList from "../../components/ShowsList.vue";
import { mapState } from "vuex";

export default {
  name: "ShowPage",
  components: {
    ShowsList,
  },
  computed: {
    ...mapState(["allShows"]),
    matchedShow() {
      for(let i=0;i<this.allShows.length;i++){
        if(this.allShows[i].id === this.$route.params.showId)
        return this.allShows[i];
      }
      return this.skeletonShow;
    },
  },
  data() {
    return {
      recommendedShows: [],
      imgs: [
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f3f3a0a35db34273337360aba27fe71947d6d2422a87bcf948c54c3d6b08ccd7._V_SX1080_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/88d7d251303b9c650322f095d056203b25837682cb3a67f04b5d30d60aef2a78._V_SX1080_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/eeeda32f0ef55c1607d6ae56c79cb43ea42ed2b84c0462f02a83c47aced0c0cf._V_SX1080_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/78752aa4c152b9b94e81afbb53f40c5d794bc32e8122f41dbeba3c22673c504e._V_SX1080_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d11dfd4529501bd278e3e8423f1917adf297342224e609b7f7167c7f784c5ebe._V_SX1080_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/2fb5e022eef295b5eef14d85b9f566d2683a28bd163823adaeccdb888551bb80._V_SX1080_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7b8b03ac4281afe1a6638d64b354fad6f815f615b645e4e98cc3a5d4bef7ab12._V_SX1080_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7c624075b98cbbfbf836bb629415d8222269fffde60b3a5a988abf1ada377d4b._V_SX1080_.jpg'
      ],
      img: this.imgs[Math.floor(Math.random() * 8)],
      skeletonShow: {
        id: "149",
        showUrl:
          "https://www.primevideo.com/region/eu/detail/0GZ0O97SOB4VWFWCTVWY2LCZ56/ref=atv_hm_hom_c_r1Fy1u_6_11",
        imageUrl:
          "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/40d957277cf5b0d9f30d1c893c278fb690f303fdba8214161a7f38dc167814a3._UR1920,1080_RI_SX356_FMjpg_.jpg",
        desc:
          "After tracking a potentially suspicious shipment of illegal arms in the Venezuelan jungle, CIA Officer Jack Ryan heads to South America to investigate. ",
        name: "Gravity",
      },
    };
  },
  created: function() {
    fetch("https://api.jsonbin.io/b/5eb30d0a8284f36af7b69ed7/3")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.recommendedShows = res.totalShows[2].Shows;
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  },
};
