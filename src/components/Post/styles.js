import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10
    },
    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b'
    }
});

export default styles;