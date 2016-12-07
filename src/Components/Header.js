import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../Styles/mainStyle';

export default class Header extends Component {
    render() {
        return(
            <View style={styles.bannerWrapper}>
                <View style={styles.bannerTitleWrapper}>
                    <Image source={require('../Images/bucketlistIcon-small.png')} resizeMode='contain' style={{height: 60, alignSelf: 'center'}}/>
                    <Text style={styles.bannerTitleText}>MOUNTAIN LIST</Text>
                    <View style={styles.bannerDescWrapper}>
                        <View style={styles.bannerDesc}>
                            <MaterialIcons name='star-border' color='#fff' size={14}/>
                            <Text style={styles.bannerDescText}>{this.props.numNotCompleted} Summits To Reach</Text>
                        </View>
                        <View style={styles.bannerDesc}>
                            <MaterialIcons name='check-circle' color='#00BFA5' size={14}/>
                            <Text style={styles.bannerDescText}>7 Conquered Heights</Text>
                        </View>
                    </View>
                </View>
                <Image source={require('../Images/mountainBanner.jpg')} resizeMode='contain' style={styles.imageStyle}/>
                <View style={styles.divider} />
            </View>
        );
    }
}