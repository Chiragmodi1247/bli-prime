console.log("App js loaded")
import Header from '../components/Header.vue'

export default {
    name: 'app',
    components: {
        Header
    },
    computed: {
        isLogged () {
            return true;
        } 
    }
}  