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
  Image,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Input} from 'native-base';

class Mywallet extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1}>
          <View
            style={{
              height: '27%',
              width: '15%',
              backgroundColor: 'white',
              elevation: 20,
              borderRadius: 50,
              flexDirection: 'row',
              marginTop: '3%',
              marginLeft: '3%',
            }}>
            <TouchableOpacity>
              <View style={{paddingTop: '40%', paddingLeft: '35%'}}>
                <Icon name="arrow-left" size={25} color="#444" />
              </View>
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  color: 'white',
                  fontWeight: 'bold',
                  width: '100%',
                  textAlign: 'center',
                  paddingLeft: '10%',
                  paddingTop: '15%',
                }}>
                MY WALLET
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: 'white',
                  width: '90%',
                  textAlign: 'center',
                  paddingLeft: '10%',
                  paddingTop: '3%',
                }}>
                Track your cashflow & payments made this month
              </Text>
            </View>
          </View>
          <View
            style={{padding: '25%', flexDirection: 'row', paddingLeft: '35%'}}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              SEPTEMBER
            </Text>
            <Icon
              style={{padding: 5}}
              name="chevron-down"
              size={12}
              color="white"
            />
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
                paddingLeft: 5,
              }}>
              2020
            </Text>
            <Icon
              style={{padding: 5}}
              name="chevron-down"
              size={12}
              color="white"
            />
          </View>
        </View>

        <View style={styles.box2}>
          <View
            style={{
              height: '27%',
              width: '37%',
              backgroundColor: 'green',
              marginBottom: '5%',
              marginTop: '5%',
              alignItems: 'center',
              borderRadius: 10,
              paddingTop: '6%',
            }}>
            <Icon style={{}} name="money" size={60} color="white" />
            <Text style={styles.text}> MY EARNING</Text>
          </View>
          <View
            style={{
              height: '27%',
              width: '37%',
              backgroundColor: 'red',
              marginBottom: '5%',
              alignItems: 'center',
              borderRadius: 10,
              paddingTop: '3%',
            }}>
            <Icon style={{}} name="money" size={60} color="white" />
            <Text style={styles.text}> MY TRANSFERS</Text>
          </View>
          <View
            style={{
              height: '27%',
              width: '37%',
              backgroundColor: 'skyblue',
              borderRadius: 10,
              marginBottom: '5%',
              alignItems: 'center',
              paddingTop: '5%',
            }}>
            <Icon style={{}} name="money" size={60} color="white" />
            <Text style={styles.text}> BALANCE SHEET</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Mywallet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  box1: {
    height: '30%',
    width: '100%',
    backgroundColor: '#41474d',
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 50,
  },
  box2: {
    alignItems: 'center',
    height: '69%',
    width: '90%',
    marginLeft: '8%',
  },
  innerbox: {
    
    marginTop:'30%'
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    width: '90%',
    textAlign:'center',
  },
});
