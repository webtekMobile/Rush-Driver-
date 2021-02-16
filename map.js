import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class Map extends React.Component {
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
            width: 80,
            marginLeft: 300,
            marginTop: -70,
            backgroundColor: '#46484a',
            flexDirection: 'row',
            borderRadius: 30,
          }}>
          <View
            style={{
              height: 22,
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
            Online
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
        <View style={{paddingLeft:330,paddingTop:330}}>
          <View
            style={{
              height: 40,
              width: 40,
              margin: 10,
              elevation: 1,
              borderRadius: 20,
              backgroundColor: 'white',
              marginTop: 4,
              marginLeft: 4,
            }}>
            <TouchableOpacity>
              <View style={{padding: 10}}>
                <Icon name="bell" size={18} color="#444" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6f7780',
  },
});
