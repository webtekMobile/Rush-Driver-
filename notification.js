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

class Notification extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', }}>
          <View style={{paddingRight: '10%'}}>
            <View
              style={{
                height: '25%',
                width:'50%',
                backgroundColor: 'white',
                elevation: 20,
                borderRadius: 50,
                marginTop: '20%',
                marginLeft:'10%'
              }}>
              <TouchableOpacity>
                <View style={{paddingLeft: '25%', paddingTop: '25%'}}>
                  <Icon name="close" size={25} color="#444" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                paddingTop: '25%',
                marginLeft: '2%',
                textAlign: 'center',
              }}>
              NOTIFICATIONS
            </Text>
          </View>
        </View>
        <View
          style={{
            alignContent: 'center',
            alignItems: 'center',
            paddingTop: '30%',
          }}>
          <Icon name="archive" size={100} color="#444" />
        </View>
        <View style={{width:'80%'}}>
          <Text style={{textAign: 'center', fontSize: 20, paddingLeft: '39%'}}>
            No notifications are currently available
          </Text>
        </View>
      </View>
    );
  }
}
export default Notification;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'white',
  },
});
