import { mapState } from 'vuex'

const ShowCard = () => import('../../components/ShowCard.vue')

export default {
    name: 'SeachPage',
    computed: {
        ...mapState(['allShows']),
        searchedResults() {
            return this.allShows.filter( show => {
                return show.name.toLowerCase().indexOf(this.$route.params.searchTerm.toLowerCase()) !== -1
            })
        }
    },
    components: {
        ShowCard
    }
}