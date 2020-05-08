import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Slider",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      imgs: [
        {
          src:
            "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_Thappad/445f4ed6-fd39-4629-a4a2-7d8c5d595ac6._UR3000,600_SX1500_FMjpg_.jpg",
          alt: "Thappad",
        },
        {
          src:
            "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_PataalLokTrailer/1454d13a-f8f3-46fe-9e82-1a98c578d1b3._UR3000,600_SX1500_FMjpg_.jpg",
          alt: "Thappad",
        },
        {
          src:
            "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_Familymanlanguagev1/4e2024af-b48a-4fbe-9839-ac7f5efa39f8._UR3000,600_SX1500_FMjpg_.jpg",
          alt: "Thappad",
        },
        {
          src:
            "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_LittleWomen/3eff83bd-9753-493c-b1f0-01849817ff52._UR3000,600_SX1500_FMjpg_.jpg",
          alt: "Thappad",
        },
        {
          src:
            "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_AfsosLaunch/b77bce94-7f04-491f-a6d0-8323ec7dea69._UR3000,600_SX1500_FMjpg_.jpg",
          alt: "Thappad",
        },
        {
          src:
            "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_TheBigBangTheory/e365228b-6685-45c5-84e0-a0bc77547455._UR3000,600_SX1500_FMjpg_.jpg",
          alt: "Thappad",
        },
      ],
      timer: null,
      currentIndex: 0,
      itemsPerPage: 1,
    };
  },

  mounted: function() {
    this.startSlide();
  },
  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 4000);
    },

    next() {
      this.currentIndex += 1;
    },
    prev() {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
