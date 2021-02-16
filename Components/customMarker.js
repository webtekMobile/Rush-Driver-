import React from 'react'
import {View,StyleSheet,Image} from 'react-native'


export const DefaultMarker =()=>{
    return(
        <View style={styles.roundMarker}>
            <Image style={styles.roundImage} source={require('../assets/marker.png')} />
        </View>
    )
}
export const RestaurantMarker =()=>{
    return(
        <View style={styles.roundMarker}>
            <Image style={styles.roundImage} source={require('../assets/rmarker.png')} />
        </View>
    )
}
export const CustomCircle =()=>{
    return(
        <View style={styles.roundCircle}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    roundMarker:{
        width:30,
        height:30,
        // backgroundColor:'#fff',
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center'
    },
    roundImage:{
        width:25,
        height:20,
        borderRadius:25,
        resizeMode:'contain'
    },
    roundCircle:{
        width:30,
        height:30,
        backgroundColor:'red',
        borderRadius:30/2,
        justifyContent:'center',
        alignItems:'center'
    }
})

