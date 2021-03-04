import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles.js';

const DestinationSearchScreen = (props) => {

    const [inputText, setInputText] = useState('');

    return (
        <View>
            {/* Input Component */}
            <TextInput
                style={styles.textInput}
                placeholder="Where are you going?"
                value={inputText}
                onChangeText={setInputText}
            />
        </View>
    );
}

export default DestinationSearchScreen;