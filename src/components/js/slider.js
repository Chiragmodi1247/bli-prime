import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Slider",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      imgs: [],
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
  created: function() {
    fetch("https://api.jsonbin.io/b/5eb57fc647a2266b1474fe10/1")
    .then( res => {
      return res.json()
    })
    .then( res => {
      this.imgs = res.imgs;
    })
    .catch( err => console.log(err))
  }
};
