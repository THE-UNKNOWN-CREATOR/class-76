import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, Platform, ImageBackground} from 'react-native'
import 'react-native-gesture-handler'

export default class Home extends React.Component{
    render()
    {
        return(
            <View style={styles.view}>
                <SafeAreaView style={styles.safeView}/>
                <ImageBackground source={require("../assets/bg_image.png")} style={styles.backImg}>
                <View>
                    <Text>ISS Tracker</Text>
                </View>

                <TouchableOpacity style={styles.rootName} onPress = {
                    this.props.navigation.navigate('Iss Location')
                }>
                    <Text>Look At A SpaceShip</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.rootName} onPress = {
                    this.props.navigation.navigate('Meteor')
                }>
                    <Text>Look At A Rock Floating In Space</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.rootName}>
                    <Text>Look At New Things</Text>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },

    safeView: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    backImg: {
        resizeMode: 'cover',
        flex: 1
    },

    rootName: {
        flex: 0.25,
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 100,
        height: 47
    }
})