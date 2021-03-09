import React from "react";
import { View, Text, Pressable } from "react-native";

import styles from './styles';

const GuestsScreen = (props) => {
    return (
        <View>
            <View style={styles.row}>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>Adults</Text>
                    <Text style={{ color: '#8d8d8d' }}>Ages 13 or above</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable
                        onPress={() => console.warn('- clicked')}
                        style={styles.button}>
                        <Text>-</Text>
                    </Pressable>
                    <Text style={{ marginHorizontal: 20, fontSize: 16 }}>0</Text>
                    <Pressable
                        onPress={() => console.warn('+ clicked')}
                        style={styles.button}>
                        <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default GuestsScreen;