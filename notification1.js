import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

class Notification1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Data: [
        {
          id: '1',
          title: 'Celine A. tipped you 4 $',
          time: '2 min ago',
        },
        {
          id: '2',
          title: 'You accepted a ride',
          time: '2 min ago',
        },
        {
          id: '3',
          title: 'You accepted a ride',
          time: '2 min ago',
        },
      ],
      Data1: [
        {
          id: 1,
          title: 'Celine A. tipped you 4 $',
          time: 'yesterday',
        },
        {
          id: '2',
          title: 'You accepted a ride',
          time: '10 November',
        },
        {
          id: '3',
          title: 'You accepted a ride',
          time: '10 November',
        },
        {
          id: 4,
          title: 'You accepted a ride',
          time: '10 November',
        },
        {
          id: '5',
          title: 'You accepted a ride',
          time: '10 November',
        },
        {
          id: '6',
          title: 'You accepted a ride',
          time: '10 November',
        },
      ],
    };
  }
  renderItem = ({item}) => (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: 'black',
          width: '100%',
          paddingTop: '4%',
          paddingBottom: '4%',
          borderTopWidth: 0.5,
        }}>
        <View
          style={{
            height: '30%',
            width: '1.5%',
            backgroundColor: 'black',
            borderRadius: 70,
            marginLeft: '10%',
            marginTop: '1%',
          }}></View>
        <Text style={{fontSize: 16, paddingLeft: '2%'}}>{item.title}</Text>
        <View style={{}}>
          <Text style={{color: '#d4cbcb', fontSize: 15, paddingLeft: '35%'}}>
            {item.time}
          </Text>
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingLeft: '3%',
            paddingTop: '3%',
          }}>
          <View
            style={{
              height: '125%',
              width: '14%',
              backgroundColor: 'white',
              borderRadius: 50,
              elevation: 20,
            }}>
            <TouchableOpacity>
              <View style={{paddingLeft: '30%', paddingTop: '25%'}}>
                <Icon name="close" size={25} color="#444" />
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingLeft: '20%',
              paddingTop: '5%',
            }}>
            NOTIFICATIONS
          </Text>
        </View>

        <View style={styles.fstbox}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              color: 'black',
              fontWeight: 'bold',
              paddingBottom: '3%',
              paddingTop: '2%',
            }}>
            Today
          </Text>
          <FlatList
            data={this.state.Data}
            renderItem={this.renderItem}
            KeyExtractor={(item) => item.id}
            numColumns={1}></FlatList>
        </View>

        <View style={styles.secbox}>
          <Text
            style={{
              height: '13%',
              fontSize: 20,
              textAlign: 'center',
              backgroundColor: '#dbdad3',
              color: 'black',
              paddingTop: 8,
              paddingBottom: 2,
              fontWeight: 'bold',
            }}>
            Earlier
          </Text>
          <FlatList
            data={this.state.Data1}
            renderItem={this.renderItem}
            KeyExtractor={(item) => item.id}
            numColumns={1}></FlatList>
        </View>
      </View>
    );
  }
}
export default Notification1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    paddingTop: 2,
  },
  fstbox: {
    width: '100%',
    height: '30%',
  },
  secbox: {
    width: '100%',
  },
});
