import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class FloatingActionButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.floatingbuttonStyle}>
                <MaterialIcons name='add' color='#fff' size={30} />
            </TouchableOpacity>
        )
    }
}

var styles = StyleSheet.create({
    floatingbuttonStyle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#00BFA5',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    }
});