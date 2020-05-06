console.log("Landing page js")
import LeftImage from '../../components/LeftImage.vue'

export default {
    name: 'LandingPage',
    components: {
        LeftImage
    },
    data () {
        return {
            imageData:[
                {
                    bigTitle: 'Welcome to Prime Video',
                    bodyTitle: 'Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals',
                    buttonTitle: 'Start 30 Day free trial',
                    url: 'https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._SY1200_FMJPG_.jpg',
                    isLeft: false
                },
                {
                    bigTitle: 'Great Entertainment',
                    bodyTitle: 'With your Prime membership, you have access to exclusive Amazon Originals, blockbuster Bollywood movies, regional movies and more.',
                    buttonTitle: 'Get started',
                    url: 'https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-Living-Room-V2._CB524587855_SY1200_FMJPG_.jpg',
                    isLeft: true
                },
                {
                    bigTitle: 'One membership, many benefits',
                    bodyTitle: 'Your Prime membership now also includes ad-free music along with unlimited free, fast delivery on eligible items, exclusive access to deals & more.',
                    buttonTitle: 'Get started',
                    url: 'https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/PRIME_multi-benefit_MAGNET_2X._CB1519820207_SY1200_FMJPG_.jpg',
                    isLeft: false
                },
                {
                    bigTitle: 'Even better with Fire TV Stick',
                    bodyTitle: 'The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.',
                    buttonTitle: 'Get started',
                    url: 'https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/MLP_Template_Image_Left._SY1200_FMJPG_.jpg',
                    isLeft: true
                }
            ]
        }
    }
}