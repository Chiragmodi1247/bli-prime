import router from "../../router";

export default {
  name: "ShowCard",
  computed: {
    ShowTitle() {
      return this.alt.length > 20
        ? this.alt.substring(0, 20) + "..."
        : this.alt;
    },
    ShowDesc() {
      return this.Desc.length > 100
        ? this.Desc.substring(0, 100) + "..."
        : this.alt;
    },
  },
  props: {
    url: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "Image",
    },
    Desc: {
      type: String,
      default: "This is a very good show",
    },
    ShowUrl: {},
    showId: {},
  },
  methods: {
    goToShowPage() {
      console.log(this.showId);
      router.push({
        name: "ShowPage",
        params: { showId: this.showId },
      });
    },
  },
};
