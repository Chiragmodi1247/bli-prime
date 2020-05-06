console.log("Left image js")

export default {
    name: 'LeftImage',
    computed: {
        imageClass() {
            return this.isLeft? "left-image" : "right-image";
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
    }
}