import { StyleSheet } from 'react-native';

export default StyleSheet.create ({

//Header
    bannerWrapper: {
        flex: 1,
        alignItems: 'center',
        maxHeight: 210,
    },
    bannerTitleWrapper: {
        marginTop: 35,
        zIndex: 2, 
        position: 'absolute',
        top: 0, 
        left: 0, 
        right: 0,
         
    },
    bannerTitleText: {
        fontFamily: 'montserrat', 
        color: '#fff', 
        marginTop: 15, 
        fontSize: 20,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        marginLeft: 90,
        marginRight: 90,
        justifyContent: 'center',
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
    },
    bannerDescWrapper: {
        marginTop: 30,
        marginRight: 2,
        height: 35,
        flex:1,
        flexDirection: 'row'
    },
    bannerDesc: {
        marginLeft: 2,
        flex: 1,
        height: 35,
        backgroundColor: 'rgba(0,0,0, 0.2)',
        paddingLeft: 10,
        flexDirection: 'row',
        paddingTop: 10,
    },
    bannerDescText : {
        color: '#fff',
        fontWeight: '300',
        fontSize: 11,
        marginLeft: 10,
    },
    imageStyle: {
        height: 210, 
    },
    divider: {
        backgroundColor: '#e61875',
        position: 'absolute',
        marginTop: 0,
        left: 0,
        right: 0,
        height: 5,
    },

// Main
    pageWrapper: {
        flex: 1,
        backgroundColor: '#e0e0e0',
    },
    rowWrapper: {
        marginTop: 1,
        backgroundColor: '#fff',
        height: 50,
        flex: 5,
        flexDirection: 'row',
    },
    listItemWrapper: {
        flex: 3,
        height: 50,
        justifyContent: 'center',
    },
    listItemText: {
        marginLeft: 10,
        fontFamily: 'robotolight',
    },
    checkWrapper: {
        flex: 0.8,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyCircle: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#e61875',
    },
    checkedCircle: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#e61875',
        backgroundColor: '#e61875',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hiddenRowWrapper: {
        alignSelf: 'flex-end',
        height: 50,
        width: 74,
        marginTop: 1,
        flexDirection: 'row',
        backgroundColor: '#00BFA5'
    },
    editButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    deleteButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});