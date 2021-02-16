import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class Mapdestination extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 60,
            width: 60,
            margin: 15,
            backgroundColor: 'white',
            elevation: 1,
            borderRadius: 50,
          }}>
          <TouchableOpacity>
            <View style={{padding: 18}}>
              <Icon name="align-left" size={25} color="#444" />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 30,
            width: 120,
            marginLeft: 260,
            marginTop: -70,
            backgroundColor: '#46484a',
            flexDirection: 'row',
            borderRadius: 30,
          }}>
          <View
            style={{
              height: 23,
              width: 20,
              margin: 10,
              elevation: 1,
              borderRadius: 20,
              backgroundColor: 'white',
              marginTop: 4,
              marginLeft: 4,
            }}>
            <TouchableOpacity>
              <View style={{padding: 2}}>
                <Icon name="globe" size={18} color="#444" />
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              paddingTop: 5,
            }}>
            call support
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            paddingTop: 300,
            color: 'white',
          }}>
          Map Under Maintanace
        </Text>
        <View
          style={{
            height: 120,
            width: '100%',
            backgroundColor: 'white',
            marginTop: 280,
            borderTopStartRadius: 60,
            borderTopEndRadius: 60,
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 20, paddingTop: 50, paddingLeft: 25}}>
            You’ve reached your destination
          </Text>
          <View
            style={{
              width: 55,
              height: 55,
              borderRadius: 40,
              backgroundColor: 'red',
              marginTop: 40,
              marginLeft: 30,
              elevation: 1,
            }}>
            <TouchableOpacity>
              <View style={{padding: 13}}>
                <Icon name="check" size={28} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default Mapdestination;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6f7780',
  },
});
