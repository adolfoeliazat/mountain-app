import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    ListView,
    View,
    TouchableOpacity
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import firebaseApp from './Helpers/FirebaseDB';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './Styles/mainStyle';

import FloatingActionButton from './Components/FloatingActionButton';
import Header from './Components/Header';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newListItem: '',
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            isChecked: false,
            isEditing: false,
        }

        this.itemsRef = firebaseApp.database().ref().orderByChild('isCompleted');
        this.numNotCompleted = 0;
        this.numCompleted = 0;
    }

    listenForItems(itemsRef) {
        itemsRef.on('value', (snap) => {

            // get children as an array
            var items = [];
            snap.forEach((child) => {
                if(child.val().isCompleted == 'no') {
                    this.numNotCompleted++;
                };
                items.push({
                    item: child.val().item,
                    isCompleted: child.val().isCompleted,
                    _key: child.key
                });
                
            });

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(items)
            });

        });
    }
    componentDidMount() {
        this.listenForItems(this.itemsRef);
    }

    toggleChecked() {
        if(this.state.isChecked) {
            this.setState({isChecked: false})
        }
        else {
            this.setState({isChecked: true})
        }
    }

    renderCheckBox() {
        if(this.state.isChecked) {
            return (
                <TouchableOpacity style={styles.checkedCircle} onPress={this.toggleChecked.bind(this)}>
                    <MaterialIcons name='check' color='#fff' size={20} />
                </TouchableOpacity>
            );
        }
        
        return (
            <TouchableOpacity style={styles.emptyCircle} onPress={this.toggleChecked.bind(this)}></TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.pageWrapper}>
                <Header numNotCompleted={this.numNotCompleted} numCompleted={this.numCompleted}/>
                <FloatingActionButton />
                <ScrollView style={{marginTop: 4}}> 
                    <SwipeListView
                        disableRightSwipe={true}
                        dataSource={this.state.dataSource}
                        renderRow={(data) => (
                            <View style={styles.rowWrapper}>
                                <View style={styles.checkWrapper}>
                                    {this.renderCheckBox()}
                                </View>
                                <View style={styles.listItemWrapper}>
                                    <Text style={styles.listItemText}>{data.item}</Text>
                                </View>
                            </View>
                        )}
                        renderHiddenRow={ data => (
                            <View style={styles.hiddenRowWrapper}>
                                <TouchableOpacity style={styles.editButton}><MaterialIcons name='mode-edit' color='#fff' size={20} /></TouchableOpacity>
                                <TouchableOpacity style={styles.deleteButton}><MaterialIcons name='delete' color='#fff' size={20} /></TouchableOpacity>
                            </View>
                        )}
                        rightOpenValue={-75}
                        friction={5}
                    />
                </ScrollView>
            </View>
        )
    }
}