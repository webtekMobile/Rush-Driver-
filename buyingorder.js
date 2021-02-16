import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
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
  Image
} from 'react-native';
import {Input} from 'native-base';

class Buyingorder extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: '50%',
            width: '100%',
            backgroundColor: '#d0d2d9',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                height: '80%',
                width: '14%',
                margin: '3%',
                backgroundColor: 'white',
                elevation: 20,
                borderRadius: 50,
              }}>
              <TouchableOpacity>
                <View style={{marginLeft: '30%', marginTop: '25%'}}>
                  <Icon name="align-left" size={25} color="#444" />
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: '20%',
                width: '25%',
                backgroundColor: 'white',
                marginTop: '3%',
                borderRadius: 40,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  elevation: 20,
                  borderRadius: 40,
                  backgroundColor: 'white',
                }}>
                <Text style={{fontSize: 20, padding: '5%'}}>Online</Text>
                <TouchableOpacity>
                  <Icon style={{paddingTop: '3%'}} name="globe" size={25} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{paddingLeft: '20%'}}>
            <Text style={{fontSize: 25,}}>
              Map Under Maintanance
            </Text>
          </View>
          <View
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: 'white',
              marginTop: '40%',
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            }}>
            <View>
              <Text
                style={{
                  padding: '6%',
                  fontSize: 20,
                }}>
                You have received a pick up order from Bartartine Sin El Fil to
                Mansourieh.
              </Text>
            </View>
            <View
              style={{
                width: '35%',
                height: '10%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                marginLeft: '4%',
                backgroundColor: '#303138',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    height: '90%',
                    width: '17%',
                    elevation: 20,
                    backgroundColor: 'white',
                    borderRadius: 30,
                    marginRight: '4%',
                  }}>
                  <View style={{paddingLeft: '15%'}}>
                    <Icon name="phone" size={20} color="#444" />
                  </View>
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                  }}>
                  Call support
                </Text>
              </View>
            </View>
            <View style={{height: '40%', width: '100%', flexDirection: 'row'}}>
              <Image
                style={{
                  height: 120,
                  width: 100,
                  backgroundColor: 'red',
                  margin: 20,
                }}
                source={require('./assets/profile.jpg')}></Image>
              <View style={{paddingTop: '5%'}}>
                <Text style={styles.item}>Size: Medium</Text>
                <Text style={styles.item}>Color: Green</Text>
                <Text style={styles.item}>Estimating price: $56</Text>
              </View>
            </View>
            <View
              style={{
                height: '35%',
                width: '80%',
                backgroundColor: '#d0d2d9',
                marginLeft: '10%',
              }}>
              <Text
                style={{fontSize: 20, paddingLeft: '30%', paddingTop: '14%'}}>
                Under Maintanance
              </Text>
            </View>
            <View style={{paddingTop: '4%'}}>
              <LinearGradient
                colors={['#fc2e1c', '#de594e', '#eb897f']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{
                  width: '55%',
                  height: '40%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 30,
                  marginLeft: '3%',
                }}>
                <View style={{flexDirection: 'row', paddingLeft: '44%'}}>
                  <View
                    style={{
                      height: '38%',
                      width: '40%',
                      margin: '30%',
                      elevation: 20,
                      backgroundColor: 'white',
                      borderRadius: 30,
                    }}>
                    <TouchableOpacity>
                      <View style={{padding: '25%', paddingLeft: '30%'}}>
                        <Icon name="chevron-right" size={25} color="#444" />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <Text
                    style={{color: 'white', fontSize: 20, paddingTop: '40%'}}>
                    Accept Order
                  </Text>
                  <TouchableOpacity>
                    <View
                      style={{
                        height: '48%',
                        width: '100%',
                        backgroundColor: '#49494f',
                        margin: '22%',
                        borderRadius: 30,
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          color: 'white',
                          paddingTop: '13%',
                          paddingLeft: '10%',
                          textAlign: 'center',
                        }}>
                        Decline
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default Buyingorder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
   marginTop:'4%'
  },
});
