import { mapState, mapActions } from "vuex";
import router from "../../router";

export default {
  name: "Header",
  data() {
    return {
      currentTab: "Home",
      tabs: ["Home", "TV Shows", "Movies", "Kids"],
      tabPath: ["/home", "/tvshows", "/movies", "/kids"],
      searchTerm: "",
    };
  },
  computed: {
    ...mapState(["isLogging", "userName", "isLogged", "allShows"]),
    suggestions() {
      return this.allShows.filter((show) => {
        return (
          show.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1
        );
      });
    },
  },
  watch: {
    $route(to, from) {
      if (from.path === "/Login") this.unsetIsLogging();
      else if (to.path === "/Login") this.logginIn();
      if (to.name === "Home") this.currentTab = "Home";
      else if (to.name === "Kids") this.currentTab = "Kids";
      else if (to.name === "Movies") this.currentTab = "Movies";
      else if (to.name === "TVShows") this.currentTab = "TV Shows";
      else this.currentTab = "";
    },
  },
  methods: {
    ...mapActions(["logginIn", "unsetIsLogging", "logout", "fetchAllShows"]),
    launchSignInForm() {
      this.logginIn();
      router.push("Login");
    },
    goToLandingPage() {
      router.push("/");
    },
    changeTab(index) {
      this.currentTab = this.tabs[index];
      router.push(this.tabPath[index]);
    },
    logoutUser() {
      this.logout();
      router.push("/");
    },
    searchShow() {
      router.push({
        name: "SearchPage",
        params: { searchTerm: this.searchTerm },
      });
      this.searchTerm = "";
    },
    searchedShow(name) {
      router.push({
        name: "SearchPage",
        params: { searchTerm: name },
      });
      this.searchTerm = "";
    },
  },
  created: function() {
    this.fetchAllShows();
  },
};
