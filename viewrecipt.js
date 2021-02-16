import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

class Viewrecipt extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', paddingTop: '1%'}}>
          <View
            style={{
              height: '70%',
              width: '15%',
              margin: '3%',
              backgroundColor: 'white',
              elevation: 20,
              borderRadius: 30,
            }}>
            <TouchableOpacity>
              <View style={{padding: '30%'}}>
                <Icon name="align-left" size={25} color="#444" />
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: '36%',
              width: '30%',
              marginLeft: '45%',
              marginTop: '5%',
              backgroundColor: 'black',
              flexDirection: 'row',
              borderRadius: 30,
            }}>
            <View
              style={{
                height: '72%',
                width: '19%',
                margin: '5%',
                elevation: 1,
                borderRadius: 20,
                backgroundColor: 'white',
                marginTop: '3%',
                marginLeft: '3%',
              }}>
              <TouchableOpacity>
                <View style={{padding: '8%'}}>
                  <Icon name="phone" size={20} color="#444" />
                </View>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                paddingTop: '4%',
              }}>
              Call support
            </Text>
          </View>
        </View>
        <View
          style={{
            height: '44%',
            width: '100%',
            paddingTop: '30%',
            paddingLeft: '25%',
          }}>
          <Text style={{fontSize: 20}}>Map Under Maintanace</Text>
        </View>
        <View style={styles.downbox}>
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: '10%',
              paddingTop: '5%',
            }}>
            <Image
              style={{
                height: '40%',
                width: '16%',
                borderRadius: 40,
              }}
              source={require('./assets/profile.jpg')}></Image>

            <View style={{paddingTop: '4%', paddingLeft: '6%'}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sara Doe</Text>
              <Text style={{fontWeight: 'bold'}}>Address details</Text>
            </View>

            <TouchableOpacity>
              <View
                style={{
                  height: '22%',
                  width:'80%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 30,
                  marginLeft: '12%',
                 // marginTop: '1%',
                  backgroundColor: '#303138',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      height: '70%',
                      width: '14%',
                       margin: '2%',
                      elevation: 1,
                      backgroundColor: 'white',
                      borderRadius: 30,
                     // marginRight: 15,
                    }}>
                    <View style={{padding: 1}}>
                      <Icon name="phone" size={20} color="#444" />
                    </View>
                  </View>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                    //  paddingTop: '1%',
                      paddingRight: '8%',
                    }}>
                    Call Client
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: '20%',
              width: '80%',
              backgroundColor: '#c4c3c0',
              marginLeft: '10%',
              marginTop: '3%',
            }}></View>

          <View
            style={{flexDirection: 'row', marginTop: '2%', paddingLeft: '10%'}}>
            <View
              style={{
                height: '100%',
                width: '6%',
                elevation: 1,
                backgroundColor: 'white',
                borderRadius: 30,
                marginRight: '3%',
              }}>
              <View style={{padding: 2}}>
                <Icon name="phone" size={18} color="#444" />
              </View>
            </View>

            <View>
              <Text style={{fontSize: 15}}>Ride Time 00:23:04</Text>
            </View>
          </View>
          <View style={{paddingTop: '2%'}}>
            <TouchableOpacity>
              <LinearGradient
                colors={['#fc2e1c', '#de594e', '#eb897f']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{
                  width: '80%',
                  height: '40%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 30,
                  marginLeft: '10%',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                  }}>
                  View Receipt
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default Viewrecipt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  downbox: {
    width: '100%',
    backgroundColor: '#e1e6eb',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  
});
