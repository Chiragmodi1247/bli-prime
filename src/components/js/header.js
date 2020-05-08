import { mapState, mapActions } from "vuex";
import router from "../../router";

export default {
  name: "Header",
  computed: {
    ...mapState(["isLogging", "email", "isLogged"]),
  },
  watch: {
    $route(to, from) {
      if (from.path === "/Login") this.unsetIsLogging();
      else if (to.path === "/Login") this.logginIn();
    },
  },
  methods: {
    ...mapActions(["logginIn", "unsetIsLogging"]),
    launchSignInForm() {
      this.logginIn();
      router.push("Login");
    },
    goToLandingPage() {
      router.push("/");
    }
  },
};
