import React from 'react';
import {
    View,
    ImageBackground
} from 'react-native';
import styles from './styles';

const HomeScreen = (props) => {
    return (
        <View>
            <ImageBackground
                source={require('../../../assets/images/wallpaper.jpg')}
                style={styles.image}
            >
            </ImageBackground>
        </View >
    );
}

export default HomeScreen;