import { mapActions } from 'vuex'
import router from '../../router'

export default {
    name: 'Login',
    data () {
        return {
            userName: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['login']),
        onSubmit(){
            if(this.userName.length === 0 || this.userName===''){
                alert('Please Enter a name')
                return;
            }
            this.login(this.userName)
            router.push('Home')
        }
    }
}