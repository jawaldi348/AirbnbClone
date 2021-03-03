import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';

const Post = (props) => {
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image
                style={styles.image}
                source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg' }}
            />

            {/* Bed & Bedroom */}
            <Text style={styles.bedrooms}>1 bed . 1 bedrooms</Text>
        </View>
    );
}

export default Post;