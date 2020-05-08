import { mapActions } from 'vuex'
import router from '../../router'

export default {
    name: 'Login',
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['login']),
        onSubmit(){
            this.login(this.email)
            router.push('Home')
        }
    }
}