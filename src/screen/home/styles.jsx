import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingBottom: 10,
        paddingTop: 10,
        paddingRight: 20,
        alignItems: 'center'
    },
    info: {
        marginLeft: 10
    },
    header1: {
        flexDirection: 'row',
    },
    names: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        paddingRight: 10,
        // borderRightColor: 'black',
        // borderStyle: 'solid',
        borderRightColor: 'black',
        borderRightWidth: 1,
        fontSize: 18,
        fontWeight: 'bold'

    },
    codeStudent: {
        fontSize: 16,
        fontWeight: 'normal'
    }


})

export default styles;