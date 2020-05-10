import router from "../../router";
import { mapState, mapActions } from "vuex";

console.log("Left image js")

export default {
    name: 'LeftImage',
    computed: {
        imageClass() {
            return this.isLeft? "left-image" : "right-image";
        },
        imageOrientation() {
            return this.isLeft ? "left" : "right"
        }
    },
    props: {
        url : {
            type: String,
            default : ""
        },
        bigTitle: {
            type: String,
            default : "Welcome To PRIME"
        },
        bodyTitle: {
            type: String,
            default : "Largest marketing website"
        },
        buttonTitle: {
            type: String,
            default : "Get started"
        },
        isLeft: {
            type: Boolean,
            default: true
        }
    },
    methods:{
        ...mapState(['isLogged']),
        ...mapActions(["logginIn"]),
        goToLogin() {
            if(this.isLogged){
                router.push("Home");    
            }else{
                this.logginIn();
                router.push("Login");    
            }
        }
    }
}