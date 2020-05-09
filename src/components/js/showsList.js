import ShowCard from "../ShowCard.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "ShowsList",
  components: {
    ShowCard,
    Carousel,
    Slide,
  },
  props: {
    title: {
      type: String,
      default: "Some Shows You May Like To Watch",
    },
    shows: {
    }
  },
};
