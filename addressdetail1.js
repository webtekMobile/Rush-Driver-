import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StyleSheet, Image, TouchableOpacity,TextInput,ScrollView} from 'react-native';

class Addressdetail1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              height: '7%',
              width: '14%',
              marginLeft: '3%',
              marginTop: '3%',
              backgroundColor: 'white',
              elevation: 20,
              borderRadius: 50,
              flexDirection: 'row',
            }}>
            <TouchableOpacity>
              <View style={{paddingTop: '35%', paddingLeft: '40%'}}>
                <Icon name="close" size={25} color="#444" />
              </View>
            </TouchableOpacity>
            <View style={{height:'100%',width:'60%'}}>
              <TouchableOpacity>
                <Image
                  style={{
                    height: '140%',
                    width: '360%',
                    borderRadius: 80,
                    marginLeft: '270%',
                    marginTop:'30%'
                  }}
                  source={require('./assets/profile.jpg')}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: '15%',
              width: '90%',
              marginLeft: '6%',
              borderColor: '#b0b3b8',
              borderBottomWidth: 0.2,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#6c6f73',
                paddingTop: '20%',
                textAlign: 'center',
              }}>
              Sara Doe
            </Text>
          </View>
          <View
            style={{
              height: '18%',
              width: '90%',
              paddingTop: '15%',
              marginLeft: '10%',
              borderColor: '#b0b3b8',
              borderBottomWidth: 0.2,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#535557'}}>
              ADDRESS DETAILS
            </Text>
            <Text
              style={{
                height: '80%',
                width: '90%',
                fontSize: 14,
                color: '#8e9194',
              }}>
              Street Halal, 4 Floor Mansourieh, Daychounieh
            </Text>
          </View>

          <View
            style={{
              height: '27%',
              width: '90%',
              paddingTop: '6%',
              marginLeft: '6%',
              borderColor: '#b0b3b8',
              borderBottomWidth: 0.2,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: '#535557',
                paddingBottom: '1%',
              }}>
              ADDRESS PICTURES
            </Text>
            <TouchableOpacity style={{flexDirection: 'row',paddingBottom:'40%'}}>
              <Image
                style={{
                  height: 140,
                  width: 140,
                  borderColor: 'black',
                  borderWidth: 1,
                  margin: 2,
                }}
                source={require('./assets/address.png')}></Image>

              <Image
                style={{
                  height: 140,
                  width: 140,
                  borderColor: 'black',
                  borderWidth: 1,
                  margin: 2,
                }}
                source={require('./assets/address.png')}></Image>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: '15%',
              width: '90%',
              paddingTop: 20,
              marginLeft: 20,
              borderColor: '#b0b3b8',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: '#535557',
                paddingBottom: 10,
              }}>
              EXTRA DETAILS
            </Text>
            <Text
              style={{
                color: '#acb1b5',
                fontSize: 15,
                fontFamily: 'Poppins-SemiBold',
              }}>
              When you arrive to the spot, you will find a status of Venus, take
              the first exit and go up the hill, the place is between trees
            </Text>
          </View>

          <TouchableOpacity>
            <View style={{paddingTop: '10%', height: '110%'}}>
              <LinearGradient
                colors={['#fc2e1c', '#de594e', '#eb897f']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{
                  width: '80%',
                  height: '6%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 30,
                  marginLeft: '10%',
                }}>
                <View>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                    }}>
                    Call Client
                  </Text>
                </View>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
export default Addressdetail1;

const styles = StyleSheet.create({
  container: {
   width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'white',
  },
});
