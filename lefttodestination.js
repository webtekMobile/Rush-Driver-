import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class Lefttodestination extends React.Component {
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
            marginLeft: 240,
            marginTop: -70,
            backgroundColor: '#46484a',
            flexDirection: 'row',
            borderRadius: 30,
          }}>
          <View
            style={{
              height: 22,
              width: 22,
              margin: 10,
              elevation: 1,
              borderRadius: 20,
              backgroundColor: 'white',
              marginTop: 4,
              marginLeft: 4,
            }}>
            <TouchableOpacity>
              <View style={{padding: 2}}>
                <Icon name="phone" size={20} color="#444" />
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              paddingTop: 5,
            }}>
            Call support
          </Text>
        </View>
        <View style={{height: 350, paddingTop: 150, paddingLeft: 100}}>
          <Text style={{fontSize: 20}}>Map Under Maintanace</Text>
        </View>
        <View style={styles.downbox}>
          <Text style={styles.txt0}>
            You have received a pick up order from Bartartine Sin El Fil to
            Mansourieh.
          </Text>
          <TouchableOpacity>
            <View
              style={{
                width: '30%',
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                marginLeft: 15,
                backgroundColor: '#303138',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    margin: 15,
                    elevation: 1,
                    backgroundColor: 'white',
                    borderRadius: 30,
                    marginRight: 15,
                  }}>
                  <View style={{padding: 1}}>
                    <Icon name="phone" size={20} color="#444" />
                  </View>
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    paddingTop: 14,
                    paddingRight: 30,
                  }}>
                  Call client
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginTop: 140, paddingLeft: 40}}>
            <View
              style={{
                height: 20,
                width: 20,
                elevation: 1,
                backgroundColor: 'white',
                borderRadius: 30,
                marginRight: 15,
              }}>
              <View style={{padding: 2}}>
                <Icon name="phone" size={18} color="#444" />
              </View>
            </View>

            <View>
              <Text style={{fontSize: 15}}>Estimated Ride Time 00:04:54</Text>
            </View>
          </View>
          <View style={{paddingTop: 20}}>
            <LinearGradient
              colors={['#fc2e1c', '#de594e', '#eb897f']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{
                width: '80%',
                height: 55,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                marginLeft: 30,
              }}>
              <View style={{flexDirection: 'row', paddingRight: 115}}>
                <View
                  style={{
                    height: 48,
                    width: 48,
                    margin: 35,
                    elevation: 1,
                    backgroundColor: 'white',
                    borderRadius: 30,
                  }}>
                  <TouchableOpacity>
                    <View style={{padding: 12, paddingLeft: 15}}>
                      <Icon name="chevron-right" size={25} color="#444" />
                    </View>
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    paddingTop: 45,
                  }}>
                  Left to destination
                </Text>
              </View>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  }
}
export default Lefttodestination;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  downbox: {
    height: '50%',
    width: '100%',
    backgroundColor: '#e1e6eb',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  txt0: {
    padding: 25,
    fontSize: 20,
  },
  box2: {
    flexDirection: 'row',
    height: '20%',
    width: '100%',
    paddingTop: 0,
  },
});
