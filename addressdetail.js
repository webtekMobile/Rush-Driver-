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
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

class Addressdetail extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: '7%',
            width: '14%',
            marginLeft: '3%',
            marginTop: '3%',
            backgroundColor: 'white',
            elevation: 10,
            borderRadius: 50,
            flexDirection: 'row',
          }}>
          <TouchableOpacity>
            <View style={{paddingTop: '30%', paddingLeft: '42%'}}>
              <Icon name="close" size={25} color="#444" />
            </View>
          </TouchableOpacity>
          <View>
            <TouchableOpacity>
              <Image
                style={{
                  height: '115%',
                  width: '135%',
                  borderRadius: 80,
                  marginLeft: '130%',
                  marginTop: '30%',
                }}
                source={require('./assets/profile.jpg')}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: '15%',
            width: '90%',
            marginLeft: '5%',
            borderColor: '#b0b3b8',
            borderBottomWidth: 0.2,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#6c6f73',
              paddingTop: '20%',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Sara Doe
          </Text>
        </View>
        <View
          style={{
            height: '15%',
            width: '90%',
            paddingTop: '5%',
            marginLeft: '6%',
            borderColor: '#b0b3b8',
            borderBottomWidth: 0.2,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: '#535557',
              paddingBottom: '2%',
            }}>
            ADDRESS DETAILS
          </Text>
          <Text
            style={{
              height: '80%',
              width: '60%',
              fontSize: 14,
              color: '#8e9194',
            }}>
            Street Halal, 4 Floor Mansourieh, Daychounieh
          </Text>
        </View>

        <View
          style={{
            height: '25%',
            width: '90%',
            paddingTop: '5%',
            marginLeft: '6%',
            borderColor: '#b0b3b8',
            borderBottomWidth: 0.2,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: '#535557',
              paddingBottom: '5%',
            }}>
            ADDRESS PICTURES
          </Text>
          <TouchableOpacity>
            <Image
              style={{
                height: '80%',
                width: '40%',
                borderColor: 'black',
                borderWidth: 1,
              }}
              source={require('./assets/address.png')}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: '20%',
            width: '80%',
            paddingTop: '8%',
            marginLeft: '7%',
            borderColor: '#b0b3b8',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: '#535557',
              paddingBottom: '3%',
            }}>
            EXTRA DETAILS
          </Text>
          <View>
            <TextInput
              style={{
                height: '90%',
                width: '90%',
                borderColor: 'black',
                borderWidth: 1,
              }}
              placeholder="Add Extra Note..."
            />
          </View>
        </View>

        <TouchableOpacity>
          <View style={{paddingTop: '10%'}}>
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
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                  }}>
                  Save
                </Text>
              </View>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Addressdetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
});
