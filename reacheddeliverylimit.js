import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class Reacheddeliverylimit extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            height: '8%',
            width: '90%',
            marginLeft: '4.5%',
            justifyContent: 'space-between',
          }}>
          <View style={{marginTop: 7}}>
            <View
              style={{
                height: '85%',
                width: '140%',
                backgroundColor: 'white',
                borderRadius: 50,
                elevation: 10,
              }}>
              <TouchableOpacity>
                <View style={{marginLeft: 12, marginTop: 12}}>
                  <Icon name="align-left" size={22} color="black" />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              height: '60%',
              width: '25%',
              backgroundColor: 'white',
              borderRadius: 50,
              elevation: 10,
              marginTop: 12,
            }}>
            <TouchableOpacity>
              <View style={{marginLeft: 10, marginTop: 5,flexDirection:'row'}}>
                <Icon name="globe" size={25} color="black" />
                <Text style={{fontSize:16,paddingLeft:5,fontWeight:'bold'}}>Offline</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            height: '20%',
            width: '80%',
            paddingLeft: '15%',
            paddingTop:'25%'
          }}>
          YOU HAVE REACHED YOUR DELIVERY LIMIT
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
          }}>
          Please contact your Zone Manager in order to settle your balance and
          start a new one
        </Text>
      </View>
    );
  }
}
export default Reacheddeliverylimit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cccbc6',
    height: '100%',
    width:'100%'
  },
});
