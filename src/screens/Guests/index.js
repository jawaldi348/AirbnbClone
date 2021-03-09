import React from "react";
import { View, Text } from "react-native";

import styles from './styles';

const GuestsScreen = (props) => {
    return (
        <View>
            <View style={styles.row}>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>Adults</Text>
                    <Text style={{ color: '#8d8d8d' }}>Ages 13 or above</Text>
                </View>
            </View>
        </View>
    );
}

export default GuestsScreen;