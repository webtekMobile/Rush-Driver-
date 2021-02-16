import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Responsivescreen from 'react-native-responsive-screen';
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
  FlatList,
} from 'react-native';

class Settings extends React.Component {
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
                height: '80%',
                width: '140%',
                backgroundColor: 'white',
                borderRadius: 50,
                elevation: 10,
              }}>
              <TouchableOpacity>
                <View style={{marginLeft: 12, marginTop: 8}}>
                  <Icon name="close" size={25} color="black" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                paddingTop: '5%',
              }}>
              SETTINGS
            </Text>
          </View>

          <View
            style={{
              height: '70%',
              width: '12%',
              backgroundColor: 'white',
              borderRadius: 50,
              elevation: 10,
              marginTop: 10,
            }}>
            <TouchableOpacity>
              <View style={{marginLeft: 10, marginTop: 10}}>
                <Icon name="search" size={25} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{}}>
          <View
            style={{
              flexDirection: 'row',
              borderTopWidth: 0.2,
              borderBottomWidth: 0.2,
              height: '25%',
              width: '80%',
              marginLeft: '10%',
              marginTop: '10%',
            }}>
            <Icon
              style={{paddingTop: '5%'}}
              name="language"
              size={25}
              color="black"
            />
            <Text style={styles.text}>Language</Text>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: '30%',
                paddingTop: '5%',
              }}>
              <Text style={{fontSize: 20, paddingRight: '3%'}}>English</Text>
              <TouchableOpacity>
                <Icon name="chevron-up" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{borderBottomWidth: 0.2, width: '80%', marginLeft: '10%'}}>
            <View style={styles.box2}>
              <Icon name="globe" size={25} color="black" />
              <Text style={styles.text1}>Term & Condition</Text>
              <TouchableOpacity>
                <Icon
                  style={{paddingLeft: '30%'}}
                  name="chevron-down"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.box2}>
              <Icon name="globe" size={25} color="black" />
              <Text style={styles.text1}>Privacy Policy</Text>
              <TouchableOpacity>
                <Icon
                  style={{paddingLeft: '40%'}}
                  name="chevron-down"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default Settings;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'white',
  },
  box2: {
    flexDirection: 'row',
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: '5%',
    paddingLeft: '3%',
  },
  text1: {
    fontSize: 20,
    marginLeft: '3%',
  },
  
});

