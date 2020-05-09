import Slider from "../../components/Slider.vue";
import ShowsList from "../../components/ShowsList.vue";

export default {
  name: "HomePage",
  components: {
    Slider,
    ShowsList,
  },
  data() {
    return{
      TotalShows:[]
    }
  },
  created: function() {
    console.log("Home page created");
    fetch("https://api.jsonbin.io/b/5eb30d0a8284f36af7b69ed7/4")
    .then( res => {
      return res.json()
    })
    .then( res => {
      this.TotalShows = res.totalShows;
    })
    .catch( err => {
      console.log("Error: ",err)
    })
  },
};
