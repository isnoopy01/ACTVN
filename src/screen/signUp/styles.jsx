import { StyleSheet } from "react-native";
import { sizes } from "../../constants/theme";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 34,
        paddingTop: 90
    },
    top: {
        alignItems: 'center'
    },
    textTop: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#CF0016',
        padding: 10
    },
    content1: {
        fontSize: 17,
        fontWeight: '600',
        color: '#CF0016',
    },
    content2: {
        fontSize: 17,
        fontWeight: '600',
        color: '#4A515E',
        textAlign: 'center'
    },
    btnSignAnother: {
        marginTop: 50,
        padding: 17,
        backgroundColor: '#CF0016',
        width: sizes.width - 60,
        borderRadius: 10
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    
    btnAnother: {
       marginTop: 300
    },
    textBottom: {
        color: '#4A515E',
        fontSize: 15,
        fontWeight: 'normal',
        marginTop: 5,
        textAlign: 'center',
        textDecorationLine: 'underline'
    }


})

export default styles;