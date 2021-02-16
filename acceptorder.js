import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SwipeButton from 'rn-swipe-button';
import MapView, { Overlay, Circle, Marker, Callout, Polyline } from 'react-native-maps';
import { height } from './otpSubmit';
import ToggleButton from 'react-native-toggle-element';
import { MapStyle } from './Components/customMap'
import { DefaultMarker, RestaurantMarker, CustomCircle } from './Components/customMarker'
const polyline = require('@mapbox/polyline');

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';

class Acceptorder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mapRegion: null,
      currentLatitude: null,
      currentLongitude: null,
      driver_status: false,
      LATLNG: {
        latitude: 26.67474,
        longitude: 80.56676743
      },
      coords: []
    }
  }
  fetchInitialRoute = async () => {
    const slati = 20.5647474
    const slongi = 80.56443
    const elati = 20.83646
    const elongi = 80.966474

    try {
      const resp = await fetch("https://maps.googleapis.com/maps/api/directions/json?origin=" + slati + "," + slongi + "&destination=" + elati + "," + elongi + "&key=AIzaSyC5m-C32piW2yiT3kevVbvLfHXsLsPTWik")
      const respJson = await resp.json()
      let points = polyline.decode(respJson.routes[0].overview_polyline.points)
      let tmpCoords = points.map((point, index) => ({ latitude: point[0], longitude: point[1] }))

      this.setState({
        coords: tmpCoords
      })

      // console.log('choords data',this.state.coords)
    }
    catch (error) {
      console.log(error)
    }

  }
  componentDidMount() {
    this.fetchInitialRoute()
  }
  render() {
    return (
      <ScrollView
        contentContainerStyle={{ width: wp('100%'), height: hp('100%') }}>
        <View style={styles.container}>
          <MapView
            style={{ flex: 1 }}
            // liteMode={true}
            customMapStyle={MapStyle}
            // mapType='mute'
            // region = { this.state.mapRegion }
            showsUserLocation={true}
            followUserLocation={true}
            showsBuildings={false}
            showsIndoors={false}
            loadingEnabled={true}
            // onRegionChangeComplete = { this.onRegionChangeComplete.bind(this) }
            initialRegion={{
              latitude: 20.5647474,
              longitude: 80.56443,
              latitudeDelta: 2,
              longitudeDelta: 2,
            }}
          >
            <Marker
              coordinate={{ latitude: 20.5647474, longitude: 80.56443 }} >
              <DefaultMarker />
            </Marker>
          </MapView>
          <View style={{ width: wp('95%'), height: hp('8%'), position: 'absolute', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignSelf: 'center' }}>
            <View style={{ height: '100%', width: '50%', justifyContent: 'center' }}>
              <View style={{ width: 40, height: 40, borderRadius: 40 / 2, elevation: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                <Icon name='align-left' size={20} color='#333'></Icon>
              </View>
            </View>
            <View style={{ height: '100%', width: '50%', justifyContent: 'center' }}>
              <ToggleButton

                value={this.state.driver_status}
                onPress={(newState) => this.setState({ driver_status: newState, isActive: true })}
                containerStyle={{ alignSelf: 'flex-end', }}
                leftComponent={
                  <View>
                    {this.state.driver_status ? (
                      <Text style={{ fontFamily: 'Poppins-Regulae', fontSize: 11, paddingLeft: '5%' }}>Online</Text>
                    ) : (
                        <View></View>
                      )}
                  </View>
                }
                rightComponent={
                  <View>
                    {this.state.driver_status ? (
                      <Text></Text>
                    ) : (
                        <Text style={{ fontFamily: 'Poppins-Regulae', fontSize: 11, paddingRight: '5%' }}>Offline</Text>
                      )}
                  </View>
                }
                thumbActiveComponent={
                  <View style={{ width: '100%', height: '100%', backgroundColor: '#5A9B4B', borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./assets/car.png')} style={{ width: 15, height: 15, resizeMode: 'contain' }} />
                  </View>
                }
                thumbInActiveComponent={
                  <View style={{ width: '100%', height: '100%', backgroundColor: '#BE1F24', borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./assets/car.png')} style={{ width: 15, height: 15, resizeMode: 'contain' }} />
                  </View>
                }
                trackBar={{
                  activeBackgroundColor: '#fff',
                  inActiveBackgroundColor: '#fff',
                  borderActiveColor: '#fff',
                  borderInActiveColor: '#fff',
                  borderWidth: 1,
                  width: 110,
                  height: 40,
                  // elevation:2,

                }}
              />
            </View>

          </View>
          <View style={{ flex: 0.8, marginTop: '-8%', backgroundColor: '#fff', borderTopLeftRadius: 25, borderTopRightRadius: 25, elevation: 2 }}>

          </View>
        </View>
      </ScrollView>
    );
  }
}
export default Acceptorder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});