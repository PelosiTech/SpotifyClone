import { Platform, StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        ...Platform.select({
            ios: {
                bottom: 79,
            },
            android: {
                bottom: 49,
            },
        }),
        width: '100%',
        backgroundColor: "#131313",
        borderColor: 'black',
        borderWidth: 2,
    },
    progress: {
      height: 3,
      backgroundColor: '#bcbcbc'
    },
    row: {
        flexDirection: 'row',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    nameContainer: {
        flex: 2,
        flexDirection: "column",
        alignItems: 'center',
    },
    title: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
    },
    artist: {
        color: "lightgray",
        fontSize: 18,
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around',
    },
    image: {
        width: 75,
        height: 75,
        marginRight: 10,
    },

});

export default styles;